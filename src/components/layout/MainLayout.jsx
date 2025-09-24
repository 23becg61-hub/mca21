import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const MainLayout = ({ children, viewMode, onViewModeChange }) => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <div className="app-container flex">
        <Sidebar />
        
        <div className="main-content ml-[calc(var(--sidebar-width)+var(--sidebar-offset))] w-[calc(100%-var(--sidebar-width)-var(--sidebar-offset))] px-4 md:px-12 transition-all duration-300 mt-2.5 overflow-hidden">
          <Header viewMode={viewMode} onViewModeChange={onViewModeChange} />
          
          <main className="max-w-5xl mx-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};