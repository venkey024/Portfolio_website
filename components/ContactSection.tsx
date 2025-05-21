
import React from 'react';
import { SocialLink } from '../types';

interface ContactSectionProps {
  email: string;
  socialLinks: SocialLink[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ email, socialLinks }) => {
  return (
    <div className="max-w-xl mx-auto text-center animate-fade-in-up">
      <p className="text-lg text-slate mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. 
        Feel free to reach out!
      </p>
      <a
        href={`mailto:${email}`}
        className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-10"
      >
        Say Hello
      </a>
      <div className="flex justify-center space-x-8">
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
            {React.cloneElement(link.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "w-8 h-8 sm:w-10 sm:h-10" })}
          </a>
        ))}
      </div>
    </div>
  );
};
