import { useState } from 'react';
import { Home, FolderOpen, Star, Calendar, BookOpen, Library } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'brands', label: 'Brands', icon: Star },
  { id: 'libraries', label: 'Libraries', icon: Library },
  { id: 'schedule', label: 'Schedule', icon: Calendar },
  { id: 'learn', label: 'Learn', icon: BookOpen },
];

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('libraries');

  return (
    <aside className="fixed top-sidebar-offset left-sidebar-offset w-sidebar h-[calc(100vh-var(--topbar-height))] bg-surface border-r border-sidebar-border p-6 shadow-portal-sm rounded-lg z-50 transition-all duration-300">
      <div className="sidebar-header mb-10 pl-1">
        <div className="text-2xl font-bold text-primary">
          Manobhaav
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <li key={item.id} className={isActive ? 'active' : ''}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'text-primary bg-accent font-semibold relative nav-active-indicator' 
                      : 'text-sidebar-foreground hover:bg-accent hover:text-primary'
                    }
                  `}
                  aria-label={item.label}
                >
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span className="nav-text">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};