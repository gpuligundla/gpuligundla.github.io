import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-4xl mx-auto">about.</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="space-y-8">
              <p className="text-sm text-[#fefeff]">
                I'm a General Software Engineer based in the USA with 3+ years of experience designing and building scalable, reliable software solutions. 
                I enjoy solving complex problems from first principles and focus on writing clean, maintainable code grounded in strong computer science fundamentals. 
                I'm currently exploring Generative AI and integrating LLMs to enhance product capabilities and push the boundaries of intelligent software
              </p>
            </div>
          </div>
          
          <div className="md:mt-32">
            <div className="space-y-8">
              <p className="text-sm text-[#fefeff]">
                I believe that any software product is built on four key pillars: systems, networks, storage, and security. 
                Understanding and optimizing these areas is essential to creating a solid and reliable product.
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="space-y-8">
              <p className="text-sm text-[#fefeff]">
                I don't tie myself to any specific programming language. I see languages and frameworks as tools to craft the art of software engineering. 
                For me, it's all about choosing the right tool for the job and building something impactful. Whether it's backend, systems, frontend, 
                cloud, infrastructure, or testing, I enjoy working across the stack and finding the best approach for each challenge.
              </p>
            </div>
          </div>
          
          <div className="md:mt-32">
            <div className="space-y-8">
                <p className="text-sm text-[#fefeff]">
                In my free time, I enjoy exploring the inner workings of technology, diving deep into how systems operate beneath the surface. 
                I love researching interesting topics, tackling DIY projects, traveling to experience new places and cultures and have started hitting the gym.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;