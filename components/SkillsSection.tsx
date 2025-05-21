import React from 'react';
import { Skill, SkillCategory } from '../types';
import { SkillBadge } from './SkillBadge';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const categorizedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  const categoryOrder: SkillCategory[] = [
    SkillCategory.LANGUAGES,
    SkillCategory.FRONTEND,
    SkillCategory.BACKEND,
    SkillCategory.DATABASE,
    SkillCategory.TOOLS,
  ];


  return (
    <div className="max-w-4xl mx-auto">
      {categoryOrder.map((category, catIndex) => (
        categorizedSkills[category] && (
          <div key={category} className="mb-10 animate-fade-in-up" style={{ animationDelay: `${0.2 * (catIndex + 1)}s` }}>
            <h3 className="text-2xl font-semibold text-black mb-6 text-center md:text-left">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              {categorizedSkills[category].map((skill) => (
                <SkillBadge key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};
