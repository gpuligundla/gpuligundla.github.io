import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLogo: React.FC = () => {
  const [isNameExpanded, setIsNameExpanded] = useState(false);

  const handleLogoClick = () => {
    if (window.innerWidth < 768) {
      setIsNameExpanded(!isNameExpanded);
    } else {
      window.location.reload();
    }
  };

  const remainingLetters = "eethakrishna".split("");

  return (
    <motion.div 
      className="fixed top-8 left-4 md:left-8 z-50 cursor-pointer"
      onHoverStart={() => setIsNameExpanded(true)}
      onHoverEnd={() => setIsNameExpanded(false)}
      onClick={handleLogoClick}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative text-3xl font-medium flex">
        <span>G</span>
        <AnimatePresence>
          {isNameExpanded && (
            <div className="flex">
              {remainingLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.02,
                    ease: "easeOut"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AnimatedLogo;