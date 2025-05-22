import React from 'react';
import { SocialLink } from '../types';

interface HeroSectionProps {
  name: string;
  title: string;
  bio: string;
  socialLinks: SocialLink[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ name, title, bio, socialLinks }) => {
  return (
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="md:w-2/5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="/passphoto-min.jpg"
                alt={name}
                className="w-64 h-80 object-cover shadow-2xl" 
              />
              <div className="absolute inset-0 border-2 border-sky-400 -m-4 z-[-1]"></div>
            </div>
          </div>
          
          <div className="md:w-3/5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 drop-shadow-lg tracking-tight">
              Hi, I'm <span className="text-sky-600 font-extrabold">{name.split(' ').map(word => word[0] + word.slice(1).toLowerCase()).join(' ')}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-700 mb-6 font-mono font-semibold drop-shadow-sm tracking-wide">
              {title}
            </p>
            <p className="text-lg text-light-slate leading-relaxed mb-8 max-w-2xl">
              {bio}
            </p>
            <div className="flex space-x-6 mb-10">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-slate hover:text-sky-400 transition-colors duration-300"
                >
                  {React.cloneElement(link.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-7 h-7 sm:w-8 sm:h-8" })}
                </a>
              ))}
            </div>
            <a
              href="#projects"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
