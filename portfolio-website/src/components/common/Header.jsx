import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="text-2xl font-bold tracking-wider">
          SDJ
        </button>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/suresh_resume.pdf"
            download
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 transition-transform duration-300 transform hover:scale-105"
          >
            <Download size={20} />
            <span>Resume</span>
          </a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-lg hover:text-cyan-400 transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/suresh_resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center space-x-2 transition-transform duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              <span>Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;