import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AudienceType } from "../../types";
import { audienceContent } from "../../data/audienceContent";
import ScrollArrow from "../UI/ScrollArrow";

interface IntroSectionProps {
  selectedAudience: AudienceType;
  scrollToSection: (sectionId: string) => void;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  selectedAudience,
  scrollToSection,
}) => {
  return (
    <section id="intro" className="min-h-screen px-4 md:px-24">
      <div className="pt-16 pb-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-7xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAudience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl md:text-6xl text-[#fefeff] leading-tight mb-12 max-w-3xl mx-auto">
                {audienceContent[selectedAudience].description}
              </div>
              <div className="flex gap-4 flex-wrap justify-center">
                {audienceContent[selectedAudience].links.map((link, index) => (
                  <span key={index} className="text-sm text-[#969696]">
                    {link}
                  </span>
                ))}
              </div>

              <ScrollArrow onClick={() => scrollToSection("education")} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
