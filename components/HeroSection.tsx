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
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 bg-white">
      <div className="text-center max-w-3xl px-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <img 
          src={`https://picsum.photos/seed/${name.split(' ').join('')}/150/150`} 
          alt={name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-sky-400 shadow-xl" 
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lightest-slate mb-4">
          Hi, I'm <span className="text-sky-400">{name}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate mb-6 font-mono">{title}</p>
        <p className="text-lg text-light-slate leading-relaxed mb-8 max-w-2xl mx-auto">
          {bio}
        </p>
        <div className="flex justify-center space-x-6 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate hover:text-sky-400 transition-colors duration-300"
            >
              {/* FIX: Specify SVGProps for the icon element to allow className prop in React.cloneElement */}
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
    </section>
  );
};
