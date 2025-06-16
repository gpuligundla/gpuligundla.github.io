import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AudienceType } from "./types";
import { useActiveSection } from "./hooks/useActiveSection";

// Components
import LoadingScreen from "./components/UI/LoadingScreen";
import AnimatedLogo from "./components/Logo/AnimatedLogo";
import MobileMenu from "./components/Layout/MobileMenu";
import Header from "./components/Layout/Header";
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";

// Sections
import IntroSection from "./components/Sections/IntroSection";
import ProjectSection from "./components/Sections/ProjectsSection";
import WorkSection from "./components/Sections/WorkSection";
import AboutSection from "./components/Sections/AboutSection";
import ContactSection from "./components/Sections/ContactSection";
import EducationSection from "./components/Sections/EducationSection";

import "./index.css";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedAudience, setSelectedAudience] =
    useState<AudienceType>("recruiters");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useActiveSection();

  // Set document metadata
  useEffect(() => {
    document.title = "Geethakrishna Puligundla";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "PortFolio");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "PortFolio";
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="space-grotesk bg-black text-[#fefeff] flex flex-col min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            <AnimatedLogo />

            <MobileMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />

            <Header
              selectedAudience={selectedAudience}
              setSelectedAudience={setSelectedAudience}
            />

            <Navigation
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />

            <main className="flex-grow">
              <IntroSection
                selectedAudience={selectedAudience}
                scrollToSection={scrollToSection}
              />
              <EducationSection />
              <WorkSection />
              <ProjectSection />
              <AboutSection />
              <ContactSection />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
