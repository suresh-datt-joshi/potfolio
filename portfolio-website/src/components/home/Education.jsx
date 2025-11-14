import React from 'react';
import { School, Building, Calendar, Award } from 'lucide-react';

const EducationTimelineCard = ({ degree, institution, duration, grade, details, isLast }) => (
  <div className="relative pl-12">
    {/* Circle Icon on the timeline */}
    <div className="absolute top-0 left-4 transform -translate-x-1/2 bg-gray-900 p-1 rounded-full">
      <div className="bg-cyan-500 text-white rounded-full p-2">
        <School size={18} />
      </div>
    </div>

    {/* The card content */}
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-10 transition-all duration-300 hover:border-cyan-400 hover:bg-gray-800/50 transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white">{degree}</h3>
        <div className="bg-gray-700 text-cyan-300 font-bold py-1 px-3 rounded-full text-sm flex items-center flex-shrink-0 ml-4">
          <Award size={14} className="mr-2" />
          <span>{grade}</span>
        </div>
      </div>
      <div className="flex items-center text-gray-400 mb-2 text-sm">
        <Building size={16} className="mr-3 flex-shrink-0" />
        <span>{institution}</span>
      </div>
      <div className="flex items-center text-gray-400 mb-4 text-sm">
        <Calendar size={16} className="mr-3 flex-shrink-0" />
        <span>{duration}</span>
      </div>
      <p className="text-gray-300 mt-3 border-t border-gray-700 pt-4">{details}</p>
    </div>
  </div>
);

const Education = () => {
  const educationData = [
    {
        degree: 'Bachelor of Engineering, CSE',
        institution: 'HKBK College Of Engineering',
         duration: '2022 - 2026 (Expected)',
        grade: '8.41 CGPA (till 6th sem)',
        details: 'Building proficiency in full-stack development through a curriculum centered on Data Structures, Algorithms, and Machine Learning. Gaining hands-on experience in building, testing, and deploying end-to-end web applications.'
    },
    {
      degree: 'Senior Secondary Education',
      institution: 'Samruddhi Pre-University College',
      duration: '2020 - 2022',
      grade: '94.33%',
      details: 'Focused on Physics, Chemistry, Mathematics, and Computer Science, laying a strong foundation for my engineering studies.'
    },
    {
      degree: 'Secondary Education',
      institution: 'Medhasree Olympiad School',
      duration: '2010 - 2020',
      grade: '95.68%',
      details: 'Excelled in a curriculum with a strong emphasis on Science and Mathematics, securing a top rank in the institution.'
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Education</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Bar */}
            <div className="absolute top-2 left-4 h-full w-0.5 bg-gray-700"></div>
            {educationData.map((edu, index) => (
              <EducationTimelineCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;