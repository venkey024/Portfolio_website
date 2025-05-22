import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import { VLogo } from './icons/VLogo';

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

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 text-sky-500 group-hover:text-sky-600 transition-colors">
              <VLogo className="w-full h-full" />
            </div>
            <span className="text-xl font-bold text-gray-900">Venkatesh</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-sky-500 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-sky-500 transition-colors"
          >
            {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-600 hover:text-sky-500 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sky-500 font-medium"
            >
              Contact Me
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
