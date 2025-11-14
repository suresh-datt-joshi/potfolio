import React from 'react';
import { Cpu, Database, Server, Code, Terminal } from 'lucide-react';

const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400 hover:bg-gray-800/50 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <div className="bg-gray-700 p-2 rounded-lg mr-4">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-300">
      {skills.map(skill => <li key={skill} className="flex items-center"><span className="text-cyan-400 mr-2">&#8227;</span>{skill}</li>)}
    </ul>
  </div>
);

const Skills = () => {
  const skillsData = {
    languages: { icon: <Terminal size={24} className="text-cyan-400" />, title: 'Languages', skills: ['JavaScript', 'Java', 'Python'] },
    frontend: { icon: <Code size={24} className="text-cyan-400" />, title: 'Frontend', skills: ['React', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    backend: { icon: <Server size={24} className="text-cyan-400" />, title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT'] },
    databases: { icon: <Database size={24} className="text-cyan-400" />, title: 'Databases', skills: ['MongoDB', 'MySQL'] },
    devops: { icon: <Cpu size={24} className="text-cyan-400" />, title: 'DevOps & Cloud', skills: ['Docker', 'AWS', 'CI/CD', 'Git & GitHub'] },
    toolsPlatforms: { icon: <Cpu size={24} className="text-cyan-400" />, title: 'Tools & Platforms', skills: ['VS Code', 'PyCharm', 'Postman', 'Linux', 'Vercel', 'Netlify'] },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Skills</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <SkillCard {...skillsData.languages} />
          <SkillCard {...skillsData.frontend} />
          <SkillCard {...skillsData.backend} />
          <SkillCard {...skillsData.databases} />
          <SkillCard {...skillsData.devops} />
          <SkillCard {...skillsData.toolsPlatforms} />
        </div>
      </div>
    </section>
  );
};

export default Skills;