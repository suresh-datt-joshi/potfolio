import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Server, Code, Terminal, Cloud } from 'lucide-react';

const SkillBar = ({ name, level, delay }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setWidth(level), delay);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-cyan-400 font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ icon: Icon, title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-2"
  >
    <div className="flex items-center mb-6">
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-lg mr-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} {...skill} delay={index * 100} />
      ))}
    </div>
  </motion.div>
);

const SkillsEnhanced = () => {
  const skillsData = [
    {
      icon: Terminal,
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 75 },
      ],
    },
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Redux', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Git & GitHub', level: 90 },
      ],
    },
    {
      icon: Cpu,
      title: 'Tools & Platforms',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 90 },
        { name: 'Linux', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Proficiency levels based on real-world project experience and continuous learning
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;
