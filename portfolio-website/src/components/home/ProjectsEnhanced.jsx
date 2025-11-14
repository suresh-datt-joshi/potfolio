import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const TechBadge = ({ tech }) => (
  <span className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors duration-200">
    {tech}
  </span>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400 transition-all duration-300 group"
  >
    <div className="relative overflow-hidden h-48 bg-gray-900">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 4).map((tag, i) => (
          <TechBadge key={i} tech={tag} />
        ))}
        {project.tags.length > 4 && (
          <span className="px-3 py-1 text-xs text-gray-500">+{project.tags.length - 4} more</span>
        )}
      </div>
      
      <div className="flex gap-4 mt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            <Github size={16} />
            Source Code
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectsEnhanced = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      title: 'StockTrack Pro - Real-Time Portfolio Manager',
      description: 'A comprehensive stock tracking application for investors needing quick access to market data. It allows users to search stocks, view real-time price charts, and create a personal watchlist.',
      imageUrl: '/images/p1.png',
      tags: ['react', 'redux-toolkit', 'tailwind-css', 'recharts', 'nodejs', 'expressjs', 'mongodb', 'javascript'],
      category: 'fullstack',
      liveUrl: 'https://github.com/suresh-datt-joshi/stock-track-pro/blob/main/SCREENSHOTS.md',
      githubUrl: 'https://github.com/suresh-datt-joshi/stock-track-pro',
    },
    {
      title: 'TalkMate Bot',
      description: 'An interactive AI-powered chat companion that provides instant, relevant, and context-aware responses, built to showcase the power of large language models.',
      imageUrl: '/images/p2.png',
      tags: ['JavaScript', 'API', 'HTML5', 'react', 'expressjs', 'vite'],
      category: 'frontend',
      liveUrl: 'https://chat-bot-mu-red.vercel.app/',
      githubUrl: 'https://github.com/suresh-datt-joshi/ChatBot',
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'A simple web-based Tic Tac Toe game built using HTML, CSS, and JavaScript. This project allows two players to play on the same device.',
      imageUrl: '/images/p3.png',
      tags: ['HTML5', 'CSS3', 'JavaScript(ES6+)'],
      category: 'frontend',
      liveUrl: 'https://tic-tac-toe-game-steel-gamma.vercel.app/',
      githubUrl: 'https://github.com/suresh-datt-joshi/tic-tac-toe_game',
    },
    {
      title: 'Weather-Tracker',
      description: 'A full-stack weather app featuring user login. Users can search for weather by city or use their current location to get instant, up-to-date forecast data.',
      imageUrl: '/images/p4.png',
      tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JavaScript', 'Vercel', 'API'],
      category: 'fullstack',
      liveUrl: 'https://github.com/suresh-datt-joshi/Weather_App/blob/main/README.md',
      githubUrl: 'https://github.com/suresh-datt-joshi/Weather_App',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I'm proud of. Each one challenged me and helped me grow as a developer.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {id === 'all' && <Filter size={16} />}
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/suresh-datt-joshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 group"
          >
            View All Projects on GitHub
            <Github size={20} className="transition-transform duration-300 group-hover:rotate-12" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsEnhanced;
