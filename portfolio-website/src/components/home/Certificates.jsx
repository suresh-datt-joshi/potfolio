import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificateCard = ({ title, issuer, date, link }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400 hover:bg-gray-800/50 transform hover:-translate-y-1">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-cyan-400 font-semibold">{issuer}</p>
        <p className="text-gray-500 text-sm mt-1">{date}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 ml-4">
        <ExternalLink size={20} />
      </a>
    </div>
  </div>
);

const Certificates = () => {
  const certificatesData = [
    { title: 'Full-Stack Web Development', issuer: 'Udemy', date: 'On Progress', link: '#' },
    { title: 'Effective Communication', issuer: 'eSkillIndia', date: 'Issued Aug 2025', link: 'src/assets/certify/suresh_joshi_4963240.pdf' },
    { title: 'Accenture UK Developer and Technology Completion Certificate', issuer: 'Forage', date: 'Issued Aug 2025', link: 'src/assets/certify/developer_completion_certificate.pdf' },
    { title: 'Skyscanner Front-End Software Engineering Completion Certificate', issuer: 'Forage', date: 'Issued Aug 2025', link: 'src/assets/certify/frontend_SE_completion_certificate.pdf' },
    { title: 'Networking Basics Course', issuer: 'Cisco Networking Academy ', date: 'Issued DEC 2024', link: 'src/assets/certify/Networking_Basics_Badge20241210-25-1uxocb_241210_1.pdf' },
    { title: 'Cyber Security and Ethical Hacking Training Completion Certificate', issuer: 'Coincent', date: 'Issued Apr 2023', link: 'src/assets/certify/cybersecurity training completion.pdf' },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Certificates</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {certificatesData.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;