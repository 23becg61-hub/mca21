import { useState } from 'react';
import { Search, Lightbulb, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: 'yours', label: 'Yours' },
  { id: 'shared', label: 'Shared with you' },
  { id: 'public', label: 'Public Libraries' },
];

export const Header = () => {
  const [activeTab, setActiveTab] = useState('public');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="h-header flex items-center justify-between px-1 bg-surface sticky top-0 z-40 border-b border-border shadow-portal-sm rounded-lg mb-0">
      <div className="flex items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              mr-5 px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative tab-link
              ${activeTab === tab.id 
                ? 'text-primary active' 
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative focus-ring rounded-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search all templates"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 pl-10 bg-background border-input focus:border-primary"
            aria-label="Search templates"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-accent hover:text-primary-hover"
            aria-label="Ideas"
          >
            <Lightbulb className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-accent hover:text-primary-hover"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
          </Button>
          
          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold ml-2 shadow-portal-md">
            A
          </div>
        </div>
      </div>
    </header>
  );
};