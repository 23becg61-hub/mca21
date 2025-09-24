import { useState } from 'react';
import { schemesData } from '@/data/schemes';
import { MainLayout } from '@/components/layout/MainLayout';
import { Banner } from '@/components/sections/Banner';
import { SchemesGrid } from '@/components/sections/SchemesGrid';
import { SchemeModal } from '@/components/sections/SchemeModal';
import { ReceiverView } from '@/components/sections/ReceiverView';
import { useViewMode } from '@/hooks/useViewMode';
import { useToast } from '@/hooks/use-toast';
import { analyzeSentiment } from '@/utils/sentimentAnalysis';

const Index = () => {
  const [schemes, setSchemes] = useState(schemesData);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { viewMode, setViewMode } = useViewMode();
  const { toast } = useToast();

  const handleSchemeClick = (scheme) => {
    setSelectedScheme(scheme);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedScheme(null), 300);
  };

  const handleAddComment = (schemeId, name, text) => {
    const sentiment = analyzeSentiment(text);
    const newComment = {
      name: 'Anonymous',  // Always use Anonymous as requested
      text,
      time: new Date().toISOString(),
      sentiment
    };

    setSchemes(prevSchemes => 
      prevSchemes.map(scheme => 
        scheme.id === schemeId 
          ? { ...scheme, comments: [...scheme.comments, newComment] }
          : scheme
      )
    );

    // Update the selected scheme if it's currently open
    if (selectedScheme && selectedScheme.id === schemeId) {
      setSelectedScheme(prev => prev ? {
        ...prev,
        comments: [...prev.comments, newComment]
      } : null);
    }

    toast({
      title: "Comment Added",
      description: "Your comment has been successfully added to the scheme.",
    });
  };

  return (
    <>
      <MainLayout viewMode={viewMode} onViewModeChange={setViewMode}>
        {viewMode === 'sender' ? (
          <>
            <Banner />
            <SchemesGrid 
              schemes={schemes} 
              onSchemeClick={handleSchemeClick} 
            />
          </>
        ) : (
          <ReceiverView schemes={schemes} />
        )}
      </MainLayout>

      {viewMode === 'sender' && (
        <SchemeModal
          scheme={selectedScheme}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddComment={handleAddComment}
        />
      )}
    </>
  );
};

export default Index;