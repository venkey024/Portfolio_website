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
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          {/* Photo Container */}
          <div className="md:w-2/5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-xl">
                <img 
                  src="/passphoto-min.jpg"
                  alt={name}
                  className="w-56 h-72 object-cover transform transition-transform duration-500 group-hover:scale-105" 
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-sky-500/20 rounded-tr-xl" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-sky-500/20 rounded-bl-xl" />
              
              {/* Background Glow */}
              <div className="absolute -inset-3 bg-sky-500/5 rounded-2xl -z-10 transform rotate-6 transition-transform duration-500 group-hover:rotate-8" />
            </div>
          </div>
          
          {/* Content Container */}
          <div className="md:w-3/5 animate-fade-in-up space-y-6" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h2 className="text-lg font-mono text-sky-600 tracking-wider">Welcome to my portfolio</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                Hi, I'm <span className="text-sky-600 font-extrabold inline-block hover:scale-105 transition-transform duration-300">
                  {name.split(' ').map(word => word[0] + word.slice(1).toLowerCase()).join(' ')}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-mono">
                {title}
              </p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {bio}
            </p>

            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sky-500 transform hover:scale-110 transition-all duration-300"
                >
                  {React.cloneElement(link.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { 
                    className: "w-6 h-6" 
                  })}
                </a>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-medium rounded-lg 
                  shadow-lg hover:bg-sky-600 transform hover:-translate-y-1 transition-all duration-300
                  relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
