import React from 'react';
import { AnimatePresence } from 'framer-motion';

// Import Components
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';
import Education from '../components/home/Education';
import Skills from '../components/home/Skills';
import Certificates from '../components/home/Certificates';

// Import the animation wrapper
import SectionWrapper from '../components/common/SectionWrapper';

// Wrap each section component with the animation HOC
const AnimatedAbout = SectionWrapper(About);
const AnimatedProjects = SectionWrapper(Projects);
const AnimatedContact = SectionWrapper(Contact);
const AnimatedHero = SectionWrapper(Hero);
const AnimatedEducation = SectionWrapper(Education);
const AnimatedSkills = SectionWrapper(Skills);
const AnimatedCertificates = SectionWrapper(Certificates);


const HomePage = ({ activeSection, setActiveSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <AnimatedHero setActiveSection={setActiveSection} />;
      case 'about':
        return <AnimatedAbout />;
      case 'skills':
        return <AnimatedSkills />;
      case 'projects':
        return <AnimatedProjects />;
      case 'education':
        return <AnimatedEducation />;
      case 'certificates':
        return <AnimatedCertificates />;
      case 'contact':
        return <AnimatedContact />;
      default:
        return <AnimatedHero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <main>
      <AnimatePresence mode="wait">
        <div key={activeSection}>
          {renderSection()}
        </div>
      </AnimatePresence>
    </main>
  );
};

export default HomePage;