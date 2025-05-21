
import React from 'react';
import { Experience } from '../types';
import { ExperienceItem } from './ExperienceItem';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-lightest-navy transform -translate-x-1/2"></div>
        
        {experiences.map((exp, index) => (
           <div key={exp.id} className="animate-fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
            <ExperienceItem experience={exp} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
