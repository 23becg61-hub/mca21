import { useState } from 'react';

export const useViewMode = () => {
  const [viewMode, setViewMode] = useState('sender');
  
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