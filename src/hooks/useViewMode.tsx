import { useState } from 'react';
import { ViewMode } from '@/types';

export const useViewMode = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('sender');
  
  const toggleViewMode = () => {
    setViewMode(prev => prev === 'sender' ? 'receiver' : 'sender');
  };
  
  return {
    viewMode,
    setViewMode,
    toggleViewMode,
    isSender: viewMode === 'sender',
    isReceiver: viewMode === 'receiver'
  };
};