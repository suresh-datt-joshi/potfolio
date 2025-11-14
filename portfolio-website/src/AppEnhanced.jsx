import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

import SEO from './components/SEO';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import HeaderEnhanced from './components/common/HeaderEnhanced';
import Footer from './components/common/Footer';

import HeroEnhanced from './components/home/HeroEnhanced';
import About from './components/home/About';
import SkillsEnhanced from './components/home/SkillsEnhanced';
import ProjectsEnhanced from './components/home/ProjectsEnhanced';
import Education from './components/home/Education';
import Certificates from './components/home/Certificates';
import Testimonials from './components/home/Testimonials';
import ContactEnhanced from './components/home/ContactEnhanced';
import Statistics from './components/home/Statistics';

function AppEnhanced() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <SEO />
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans transition-colors duration-300">
          <ParticleBackground />
          <div className="relative z-10">
            <HeaderEnhanced />
            
            <main>
              <section id="home">
                <HeroEnhanced />
              </section>

              <Statistics />

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <SkillsEnhanced />
              </section>

              <section id="projects">
                <ProjectsEnhanced />
              </section>

              <section id="education">
                <Education />
              </section>

              <section id="certificates">
                <Certificates />
              </section>

              <section id="testimonials">
                <Testimonials />
              </section>

              <section id="contact">
                <ContactEnhanced />
              </section>
            </main>

            <Footer />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default AppEnhanced;
