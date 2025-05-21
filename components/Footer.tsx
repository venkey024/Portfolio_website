
import React from 'react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="bg-light-navy py-8 mt-16 text-center">
      <p className="text-slate text-sm">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
      <p className="text-xs text-slate mt-1">
        Designed & Built by {name}.
      </p>
    </footer>
  );
};
