import React from "react";

const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="min-h-fit px-4 md:px-24 py-8 md:py-16 pt-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">
          education.
        </h2>
        <div className="grid gap-8 md:gap-16 max-w-2xl mx-auto">
          <div className="space-y-4">
            <p className="font-mono text-sm text-[#969696]">
              CLEMSON UNIVERSITY
            </p>
            <h3 className="text-2xl md:text-3xl font-medium text-[#fefeff]">
              Master of Science in Computer Science
            </h3>
            <p className="text-sm text-[#fefeff]">
              Aug 2023 - May 2025 || Clemson, SC
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-mono text-sm text-[#969696]">
              JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY (AITS)
            </p>
            <h3 className="text-2xl md:text-3xl font-medium text-[#fefeff]">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-sm text-[#fefeff]">
              Aug 2016 - Sep 2020 || Tirupati, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
