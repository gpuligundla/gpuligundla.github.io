import React from 'react';
import { sections } from '../../data/sections';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
      {sections.map(({ id, title }) => (
        <div key={id} className="mb-4 text-left">
          <button
            onClick={() => scrollToSection(id)}
            className="group flex items-center gap-2 text-sm cursor-pointer"
          >
            <span className={`transition-all duration-300 ${
              activeSection === id ? 'text-[#fefeff]' : 'text-[#969696]'
            }`}>
              {title}
            </span>
          </button>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;