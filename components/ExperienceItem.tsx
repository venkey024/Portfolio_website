
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`mb-12 md:mb-16 flex md:items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="hidden md:flex flex-col items-center mx-4">
        {experience.logoUrl ? (
            <img src={experience.logoUrl} alt={`${experience.company} logo`} className="w-12 h-12 rounded-full bg-lightest-navy p-1 border-2 border-sky-400" />
        ) : (
            <div className="w-12 h-12 rounded-full bg-sky-400 flex items-center justify-center text-navy font-bold text-xl">
            {experience.company.charAt(0)}
            </div>
        )}
        <div className="w-0.5 h-16 bg-lightest-navy mt-2"></div>
      </div>

      <div className="bg-light-navy p-6 rounded-lg shadow-xl w-full md:max-w-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="flex items-center mb-3 md:hidden">
            {experience.logoUrl ? (
                <img src={experience.logoUrl} alt={`${experience.company} logo`} className="w-10 h-10 rounded-full bg-lightest-navy p-1 border-2 border-sky-400 mr-3" />
            ) : (
                <div className="w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center text-navy font-bold text-lg mr-3">
                {experience.company.charAt(0)}
                </div>
            )}
            <div>
                <h3 className="text-xl font-semibold text-lightest-slate">{experience.role}</h3>
                <p className="text-sky-400 font-medium">{experience.company}</p>
            </div>
        </div>
        <div className="hidden md:block">
            <h3 className="text-xl font-semibold text-lightest-slate">{experience.role}</h3>
            <p className="text-sky-400 font-medium">{experience.company}</p>
        </div>
        <p className="text-xs text-slate font-mono my-2">{experience.duration}</p>
        <ul className="list-disc list-inside space-y-1 text-slate text-sm">
          {experience.responsibilities.map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
