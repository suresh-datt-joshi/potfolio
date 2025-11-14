// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// FILE: src/components/home/Hero.jsx (UPDATED)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

// NOTE: We no longer import the image when it's in the /public folder.

const Hero = ({ setActiveSection }) => {
  return (
    <section id="home" className="flex items-center min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="text-cyan-400 font-semibold tracking-wider">Hi, my name is</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-2 mb-4 text-white">
              Suresh Datt Joshi
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
              Full-Stack Developer & DevOps Enthusiast
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 mb-8">
              I build and deploy scalable web applications with a focus on the MERN stack, while actively expanding my skills in DevOps and cloud engineering.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a href="https://github.com/suresh-datt-joshi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/sureshdattjoshi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin size={28} />
              </a>
              <a href="https://x.com/suresh_datt_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter size={28} />
              </a>
            </div>

            <button
              onClick={() => setActiveSection('projects')}
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 group"
            >
              <span className="flex items-center">
                Check out my work
                <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 flex justify-center">
            {/* Use a direct string path for images in the /public folder. */}
            <img 
              src="/profile-picture.jpeg" 
              alt="A snapshot of a web project" 
              className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-gray-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
