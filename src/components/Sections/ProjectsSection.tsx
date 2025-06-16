import React from 'react';
import { motion } from 'framer-motion';
import { workProjects } from '../../data/projects';

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">projects.</h2>
        <div className="grid gap-8 md:gap-16 max-w-2xl mx-auto">
          {workProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              whileHover={{ y: -10 }}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block p-4 md:p-8 border border-[#969696] rounded-lg hover:border-[#969696] transition-colors relative"
              >
                <h3 className="text-xl md:text-2xl font-medium mb-4">{project.title}</h3>
                <p className="text-sm text-[#fefeff] mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-sm text-[#969696]">{tag}</span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.platforms.map((Platform, i) => (
                    <Platform.icon 
                      key={i} 
                      className="text-xl"
                      style={Platform.color ? { color: Platform.color } : {}}
                    />
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;