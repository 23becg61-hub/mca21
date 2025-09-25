import { Scheme } from '@/types';

interface SchemeCardProps {
  scheme: Scheme;
  onClick: (scheme: Scheme) => void;
  isReceiver?: boolean;
}

export const SchemeCard = ({ scheme, onClick, isReceiver = false }: SchemeCardProps) => {
  return (
    <div 
      className="scheme-card bg-card border border-border rounded-scheme overflow-hidden cursor-pointer shadow-portal-md hover:shadow-portal-lg hover:border-primary transition-all duration-300 group"
      onClick={() => onClick(scheme)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(scheme);
        }
      }}
    >
      <div className="card-image-placeholder w-full h-48 bg-muted rounded-t-scheme overflow-hidden">
        <img
          src={scheme.image}
          alt={scheme.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="card-content p-6">
        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200">
          {scheme.title}
        </h3>
        <div className="mt-3 text-sm text-muted-foreground flex items-center justify-between">
          <span>
            {scheme.comments.length > 0 
              ? `${scheme.comments.length} comment${scheme.comments.length > 1 ? 's' : ''}`
              : 'Be the first to comment'
            }
          </span>
          {isReceiver && scheme.comments.length > 0 && (
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
              View Analytics
            </span>
          )}
        </div>
      </div>
    </div>
  );
};