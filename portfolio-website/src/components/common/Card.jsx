import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Card = ({ title, description, imageUrl, tags, liveUrl, githubUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1F2937/7DD3FC?text=Project'; }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

        <div className="mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-cyan-300 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex justify-end space-x-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" aria-label={`GitHub repository for ${title}`}>
            <Github size={24} />
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" aria-label={`Live demo of ${title}`}>
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
