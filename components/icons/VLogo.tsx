import React from 'react';

interface VLogoProps {
  className?: string;
}

export const VLogo: React.FC<VLogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20L50 80L90 20"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
