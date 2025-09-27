import { useState } from 'react';
import { Comment } from '@/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (text: string) => void;
}

export const CommentSection = ({ comments, onAddComment }: CommentSectionProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddComment(text.trim());
      setText('');
    }
  };

  const timeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 }
    ];
    
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }
    return 'just now';
  };

  return (
    <div className="comments-section">
      <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-border">Comments</h3>
      
      {/* Comment form */}
      <form onSubmit={handleSubmit} className="comment-composer flex gap-4 items-start mb-6">
        <div className="composer-avatar w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
          A
        </div>
        
        <div className="composer-right flex-1">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a public comment as Anonymous..."
            rows={2}
            className="w-full mb-3 resize-vertical"
            required
          />
          
          <div className="composer-actions flex justify-end gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setText('')}
            >
              Cancel
            </Button>
            <Button type="submit" size="sm">
              Comment
            </Button>
          </div>
        </div>
      </form>

      {/* Comments list */}
      <ul className="comments-list space-y-4 max-h-80 overflow-auto">
        {comments.length === 0 ? (
          <li className="text-center text-muted-foreground py-8">
            Be the first to comment!
          </li>
        ) : (
          comments.map((comment, index) => (
            <li key={index} className="flex gap-3 items-start p-3 rounded-lg bg-transparent">
              <div className="comment-avatar w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                A
              </div>
              
              <div className="comment-body flex-1">
                <div className="comment-meta flex items-center gap-3 mb-1">
                  <div className="comment-author font-semibold text-sm text-foreground">
                    Anonymous
                  </div>
                  <div className="comment-time text-xs text-muted-foreground">
                    • {comment.time ? timeAgo(comment.time) : 'just now'}
                  </div>
                </div>
                
                <div className="comment-text text-sm text-foreground leading-relaxed">
                  {comment.text}
                </div>
                
                <div className="comment-actions flex gap-3 mt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-muted-foreground hover:text-foreground hover:bg-accent p-1 h-auto"
                  >
                    Reply
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-muted-foreground hover:text-foreground hover:bg-accent p-1 h-auto"
                  >
                    Like
                  </Button>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};