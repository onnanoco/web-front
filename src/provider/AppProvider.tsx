import React from 'react';
import { LayoutContextProvider } from './contexts/LayoutContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <LayoutContextProvider>
      {children}
    </LayoutContextProvider>
  );
};

export default AppProvider;
