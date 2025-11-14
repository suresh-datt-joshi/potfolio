// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// FILE: src/components/home/Contact.jsx (UPDATED)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  // Animation variants for staggering effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <motion.div
        className="container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
          Get In Touch
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-24 h-1 bg-cyan-400 mx-auto mb-8"
        ></motion.div>

        <motion.p variants={itemVariants} className="text-gray-400 mb-6 max-w-xl mx-auto text-lg">
          I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center items-center text-gray-300 text-md mb-10">
          <MapPin size={18} className="mr-2 text-cyan-400" />
          <span>Bengaluru, India</span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sureshdj9632@gmail.com" target="_blank"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 group shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            <span className="flex items-center text-lg">
              Say Hello
              <Mail size={22} className="ml-3 transition-transform duration-300 group-hover:rotate-12" />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
