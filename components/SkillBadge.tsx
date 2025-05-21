
import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="flex items-center bg-light-navy px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {skill.icon && <span className="mr-2">{skill.icon}</span>}
      <span className="text-sm font-medium text-light-slate">{skill.name}</span>
    </div>
  );
};
