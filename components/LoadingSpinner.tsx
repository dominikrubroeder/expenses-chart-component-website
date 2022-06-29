import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-app-orange opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-app-orange"></span>
    </span>
  );
};

export default LoadingSpinner;
