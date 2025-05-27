
import React from 'react';
import { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow bg-white relative z-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>
        <div className="mb-4">
          <p className="text-xs text-sky-600 font-mono mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-xs font-mono transform transition hover:scale-105 hover:bg-sky-100">
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
