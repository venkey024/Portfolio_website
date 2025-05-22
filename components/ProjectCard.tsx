
import React from 'react';
import { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-56">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <p className="text-xs text-sky-600 font-mono mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-100">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-sky-600 transition-colors flex items-center bg-gray-50 hover:bg-sky-50 px-3 py-1 rounded-md text-sm"
              aria-label={`${project.title} GitHub repository`}
            >
              <GitHubIcon className="w-4 h-4 mr-1" /> Source Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-sky-600 transition-colors flex items-center bg-gray-50 hover:bg-sky-50 px-3 py-1 rounded-md text-sm"
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
