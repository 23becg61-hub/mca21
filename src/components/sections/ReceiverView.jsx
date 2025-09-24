import { useState } from 'react';
import { SchemesGrid } from './SchemesGrid';
import { ReceiverSchemeModal } from './ReceiverSchemeModal';
import { BarChart3, TrendingUp } from 'lucide-react';

export const ReceiverView = ({ schemes }) => {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSchemeClick = (scheme) => {
    setSelectedScheme(scheme);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedScheme(null), 300);
  };

  const totalComments = schemes.reduce((acc, scheme) => acc + scheme.comments.length, 0);
  const schemesWithComments = schemes.filter(scheme => scheme.comments.length > 0);

  return (
    <>
      <div className="mb-8">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            View sentiment analysis and feedback statistics for government schemes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-surface border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Schemes</p>
                <p className="text-2xl font-bold text-foreground">{schemes.length}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                📊
              </div>
            </div>
          </div>

          <div className="bg-surface border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Comments</p>
                <p className="text-2xl font-bold text-foreground">{totalComments}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                💬
              </div>
            </div>
          </div>

          <div className="bg-surface border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Schemes</p>
                <p className="text-2xl font-bold text-foreground">{schemesWithComments.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-foreground">Schemes Feedback Analysis</h2>
          <p className="text-sm text-muted-foreground">
            Click on any scheme to view detailed sentiment analysis
          </p>
        </div>
      </div>

      <SchemesGrid 
        schemes={schemes} 
        onSchemeClick={handleSchemeClick}
        isReceiver={true}
      />

      <ReceiverSchemeModal
        scheme={selectedScheme}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};