import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <div className="app-container flex">
        <Sidebar />
        
        <div className="main-content ml-[calc(var(--sidebar-width)+var(--sidebar-offset))] w-[calc(100%-var(--sidebar-width)-var(--sidebar-offset))] px-12 transition-all duration-300 mt-2.5">
          <Header />
          
          <main className="max-w-5xl mx-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};