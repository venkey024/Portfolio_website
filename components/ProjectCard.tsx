
import React from 'react';
import { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-light-navy rounded-lg shadow-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-56 object-cover" 
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-lightest-slate mb-2">{project.title}</h3>
        <p className="text-slate text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <p className="text-xs text-sky-400 font-mono mb-1">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-lightest-navy text-sky-400 px-2 py-1 rounded-full text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 mt-auto pt-4 border-t border-lightest-navy">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-sky-400 transition-colors flex items-center"
              aria-label={`${project.title} GitHub repository`}
            >
              <GitHubIcon className="w-5 h-5 mr-1" /> Source
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-sky-400 transition-colors flex items-center"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLinkIcon className="w-5 h-5 mr-1" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
