import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 drop-shadow-lg">
          {title}
          <span className="text-sky-400">.</span>
        </h2>
        <div className="w-24 h-1 bg-sky-400 mx-auto mt-4 rounded"></div>
      </div>
      {children}
    </section>
  );
};
