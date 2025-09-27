import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Scheme } from '@/types';
import { Button } from '@/components/ui/button';
import { CommentSection } from './CommentSection';

interface SchemeModalProps {
  scheme: Scheme | null;
  isOpen: boolean;
  onClose: () => void;
  onAddComment: (schemeId: number, text: string) => void;
}

export const SchemeModal = ({ scheme, isOpen, onClose, onAddComment }: SchemeModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!scheme) return null;

  const handleAddComment = (text: string) => {
    onAddComment(scheme.id, text);
  };

  return (
    <div 
      className={`modal-overlay fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[1000] transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={`modal-content bg-surface p-10 rounded-scheme w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl transition-all duration-300 ${
        isOpen ? 'translate-y-0 scale-100' : 'translate-y-5 scale-98'
      }`}>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="modal-close absolute top-4 right-4 w-11 h-11 rounded-full p-0 hover:bg-accent"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="modal-body flex flex-col gap-6">
          <div className="modal-image w-full max-h-80 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
            <img
              src={scheme.image}
              alt={scheme.title}
              className="w-full h-full object-contain"
            />
          </div>

          <h2 id="modal-title" className="text-3xl font-semibold text-foreground mb-4">
            {scheme.title}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            {scheme.description}
          </p>

          <CommentSection
            comments={scheme.comments}
            onAddComment={handleAddComment}
          />
        </div>
      </div>
    </div>
  );
};