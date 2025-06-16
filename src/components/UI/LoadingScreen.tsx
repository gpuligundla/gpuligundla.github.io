import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      key="loader"
      className="h-screen w-screen flex items-center justify-center bg-black"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1 
          className="text-[12vw] md:text-[8vw] font-medium leading-none"
          animate={{
            opacity: [1, 0],
            y: [0, -20],
            transition: { duration: 0.5, delay: 1.5 }
          }}
        >
          GK
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;