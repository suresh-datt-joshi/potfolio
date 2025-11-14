import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Anderson',
      role: 'Senior Developer at TechCorp',
      image: 'https://ui-avatars.com/api/?name=John+Anderson&background=22d3ee&color=fff&size=128',
      content: 'Suresh is an exceptional developer with a keen eye for detail. His ability to solve complex problems and deliver high-quality solutions on time is remarkable. A true professional!',
      rating: 5,
    },
    {
      name: 'Sarah Mitchell',
      role: 'Project Manager at InnovateLabs',
      image: 'https://ui-avatars.com/api/?name=Sarah+Mitchell&background=22d3ee&color=fff&size=128',
      content: 'Working with Suresh was a pleasure. He communicates effectively, understands requirements quickly, and always goes the extra mile to ensure project success.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO at StartupHub',
      image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=22d3ee&color=fff&size=128',
      content: 'Suresh\'s expertise in full-stack development and DevOps practices helped us scale our platform efficiently. His proactive approach and technical skills are outstanding.',
      rating: 5,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-800/30 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12"
            >
              <Quote className="text-cyan-400 w-12 h-12 mb-6 opacity-50" />
              
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-cyan-400"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="bg-gray-800 hover:bg-cyan-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="bg-gray-800 hover:bg-cyan-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
