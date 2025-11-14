// ============================================================================
// FILE: src/components/home/Projects.jsx (UPDATED)
// ============================================================================
import React from 'react';
import Card from '../common/Card';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: 'StockTrack Pro - Real-Time Portfolio Manager',
      description: 'A comprehensive stock tracking application for investors needing quick access to market data. It allows users to search stocks, view real-time price charts, and create a personal watchlist.',
      imageUrl: 'src/assets/images/p1.png',
      tags: ['react', 'redux-toolkit', 'tailwind-css', 'recharts', 'nodejs', 'expressjs', 'mongodb', 'javascript'],
      liveUrl: 'https://github.com/suresh-datt-joshi/stock-track-pro/blob/main/SCREENSHOTS.md',
      githubUrl: 'https://github.com/suresh-datt-joshi/stock-track-pro',
    },
    {
      title: 'TalkMate Bot',
      description: 'An interactive AI-powered chat companion that provides instant, relevant, and context-aware responses, built to showcase the power of large language models.',
      imageUrl: 'src/assets/images/p2.png',
      tags: ['JavaScript', 'API', 'HTML5','react','expressjs','vite'],
      liveUrl: 'https://chat-bot-mu-red.vercel.app/',
      githubUrl: 'https://github.com/suresh-datt-joshi/ChatBot',
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'A simple web-based Tic Tac Toe game built using HTML, CSS, and JavaScript. This project allows two players to play on the same device.',
      imageUrl: 'src/assets/images/p3.png',
      tags: ['HTML5', 'CSS3', 'JavaScript(ES6+)'],
      liveUrl: 'https://tic-tac-toe-game-steel-gamma.vercel.app/',
      githubUrl: 'https://github.com/suresh-datt-joshi/tic-tac-toe_game',
    },
    {
      title: 'Weather-Tracker',
      description: 'A full-stack weather app featuring user login. Users can search for weather by city or use their current location to get instant, up-to-date forecast data.',
      imageUrl: 'src/assets/images/p4.png',
      tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JavaScript', 'Vercel', 'API'],
      liveUrl: 'https://github.com/suresh-datt-joshi/Weather_App/blob/main/README.md',
      githubUrl: 'https://github.com/suresh-datt-joshi/Weather_App',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I'm proud of. Each one challenged me and helped me grow as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/suresh-datt-joshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 group"
          >
            <span className="flex items-center">
              View All Projects on GitHub
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
