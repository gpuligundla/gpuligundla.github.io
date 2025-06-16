import React from 'react';
import { motion } from 'framer-motion';

interface ScrollArrowProps {
  onClick: () => void;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ onClick }) => {
  return (
    <motion.div 
      className="mt-16 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ 
        delay: 1,
        duration: 1.5
      }}
    >
      <motion.div
        className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#fefeff]"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    </motion.div>
  );
};

export default ScrollArrow;