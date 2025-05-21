
import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

interface NavbarProps {
  navLinks: NavLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-navy shadow-lg' : 'bg-navy'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-sky-400 hover:text-sky-500 transition-colors">
            Alex Johnson
          </a>
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-lightest-slate hover:text-sky-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={handleLinkClick}
              className="text-sky-400 border border-sky-400 hover:bg-sky-400 hover:text-navy px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact Me
            </a>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-lightest-slate hover:text-sky-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-light-navy shadow-lg">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-lightest-slate hover:bg-lightest-navy hover:text-sky-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="#contact"
              onClick={handleLinkClick}
              className="block text-center text-sky-400 border border-sky-400 hover:bg-sky-400 hover:text-navy mt-2 mx-3 px-4 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
