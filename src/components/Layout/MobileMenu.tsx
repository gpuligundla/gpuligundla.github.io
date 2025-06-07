import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sections } from '../../data/sections';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection 
}) => {
  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="fixed top-8 right-4 z-50 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-[#fefeff] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 md:hidden pt-24 px-8"
          >
            {sections.map(({ id, title }) => (
              <div key={id} className="mb-6">
                <button
                  onClick={() => handleSectionClick(id)}
                  className="text-2xl font-medium"
                >
                  <span className={`${activeSection === id ? 'text-[#fefeff]' : 'text-[#969696]'}`}>
                    {title}
                  </span>
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;