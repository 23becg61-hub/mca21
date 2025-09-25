import { useEffect } from 'react';
import { X, PieChart, BarChart3 } from 'lucide-react';
import { Scheme } from '@/types';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SentimentChart } from './SentimentChart';
import { getSentimentData } from '@/utils/sentimentAnalysis';

interface ReceiverSchemeModalProps {
  scheme: Scheme | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ReceiverSchemeModal = ({ scheme, isOpen, onClose }: ReceiverSchemeModalProps) => {
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

  const sentimentData = getSentimentData(scheme.comments);

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
      <div className={`modal-content bg-surface p-10 rounded-scheme w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl transition-all duration-300 ${
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

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {scheme.description}
          </p>

          <div className="bg-muted/50 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">{scheme.comments.length}</div>
                <div className="text-sm text-muted-foreground">Total Comments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{sentimentData.positive}</div>
                <div className="text-sm text-muted-foreground">Positive</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{sentimentData.negative}</div>
                <div className="text-sm text-muted-foreground">Negative</div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="pie" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="pie" className="flex items-center gap-2">
                <PieChart className="w-4 h-4" />
                Pie Chart
              </TabsTrigger>
              <TabsTrigger value="bar" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Bar Chart
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pie" className="mt-0">
              <div className="bg-surface border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Sentiment Analysis - Pie Chart</h3>
                <SentimentChart sentimentData={sentimentData} chartType="pie" />
              </div>
            </TabsContent>
            
            <TabsContent value="bar" className="mt-0">
              <div className="bg-surface border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Sentiment Analysis - Bar Chart</h3>
                <SentimentChart sentimentData={sentimentData} chartType="bar" />
              </div>
            </TabsContent>
          </Tabs>

          <div className="comments-preview mt-6">
            <h3 className="text-xl font-semibold mb-4">Comments Preview</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {scheme.comments.length > 0 ? (
                scheme.comments.map((comment, index) => (
                  <div key={index} className="bg-muted/30 p-3 rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-sm">{comment.name}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        (comment.sentiment || 'positive') === 'positive' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {comment.sentiment || 'positive'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{comment.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No comments available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};