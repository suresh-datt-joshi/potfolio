import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/suresh-datt-joshi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sureshdattjoshi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/suresh_datt_" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
            <Twitter size={24} />
          </a>
        </div>
        <p>&copy; {currentYear} Suresh. All Rights Reserved.</p>
        <p className="text-sm mt-2">Crafted with code and a touch of curiosity</p>
      </div>
    </footer>
  );
};

export default Footer;
