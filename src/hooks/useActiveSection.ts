import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = sectionId === "intro" ? 0 : section.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return { activeSection, scrollToSection };
};