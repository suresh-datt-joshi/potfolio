import React from 'react';
import { motion } from 'framer-motion';

// This is a Higher-Order Component (HOC) that wraps our sections with an animation.
// We've updated it to accept and pass down props.
const SectionWrapper = (Component) => function HOC(props) { // <-- Receive props here
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Pass all received props down to the wrapped component */}
      <Component {...props} />
    </motion.div>
  );
};

export default SectionWrapper;