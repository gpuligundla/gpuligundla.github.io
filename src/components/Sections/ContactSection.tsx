import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <img
              src="/gk.jpeg"
              alt="Geethakrishna Puligundla"
              width={500}
              height={300}
              className="mb-8 mx-auto"
                      />
          <p className="text-xl md:text-xl text-[#fefeff] underline text-center">pgeethakrishna@gmail.com</p>
          <div className="flex flex-wrap gap-4 md:gap-8 pt-8 justify-center">
            <a
              href="https://www.linkedin.com/in/gpuligundla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/gpuligundla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
            >
              GitHub
            </a>
            <a
              href="https://x.com/geethakrishna_p"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
            >
              X [Twitter]
            </a>
            <a
              href="https://gk.bearblog.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
            >
              Blog
            </a>
            <a
              href="https://cal.com/gpuligundla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
            >
              Meeting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;