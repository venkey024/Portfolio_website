
import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};
