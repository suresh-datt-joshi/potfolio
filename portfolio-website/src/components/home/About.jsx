// ============================================================================
// FILE: src/components/home/About.jsx (UPDATED)
// ============================================================================
import React from 'react';
import { Target, Code, Users, Lightbulb } from 'lucide-react';

// A reusable card component for our philosophies
const PhilosophyCard = ({ icon, title, children }) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400 hover:bg-gray-800 transform hover:-translate-y-1">
    <div className="flex items-start">
      <div className="bg-gray-700 p-2 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400">{children}</p>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            About Me
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Career Objective & Summary */}
          <div className="space-y-8 text-lg text-gray-300">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Target size={28} className="text-cyan-400 mr-3" />
                Career Objective
              </h3>
              <p>
                As an aspiring Full-Stack Developer, my goal is to leverage my hands-on experience in the MERN stack to build robust and scalable web applications. I have a strong interest in growing into a Full-Stack DevOps Engineering role, where I can contribute to the entire lifecycle of a product, from development to deployment and maintenance.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Summary
              </h3>
              <p>
                I am a passionate and detail-oriented developer who thrives on solving complex problems. My experience with modern JavaScript frameworks and my drive to learn about DevOps practices allow me to approach projects with a holistic perspective, ensuring both a seamless user experience and a stable, efficient back-end infrastructure.
              </p>
            </div>
          </div>

          {/* Right Column: Core Philosophies */}
          <div className="space-y-6">
            <PhilosophyCard icon={<Code size={24} className="text-cyan-400" />} title="Clean & Efficient Code">
              I believe in writing code that is not only functional but also readable, maintainable, and scalable for the future.
            </PhilosophyCard>
            <PhilosophyCard icon={<Users size={24} className="text-cyan-400" />} title="User-Centric Design">
              The user is at the heart of everything I build. I strive to create interfaces that are intuitive, accessible, and engaging.
            </PhilosophyCard>
            <PhilosophyCard icon={<Lightbulb size={24} className="text-cyan-400" />} title="Continuous Learning">
              The tech world is always moving. I am committed to lifelong learning to keep my skills sharp and my solutions innovative.
            </PhilosophyCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
