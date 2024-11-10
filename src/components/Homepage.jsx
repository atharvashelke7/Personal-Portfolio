
import React, { useRef } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Title from "./Title";
import About from "./About";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Tools from "./Tools";
import Footer from "./Footer";
import Interest from "./Interest";

const Homepage = ({ aboutRef, projectRef, contactRef }) => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="homepage">
      {/* Title Section with animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title onClickHire={scrollToFooter} />
      </motion.div>

      {/* Technologies Section with custom animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        
      >
        <Technologies />
      </motion.div>

      {/* Tools Section with custom animation */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Tools />
      </motion.div>

      {/* About Section with animation */}
      <motion.div
        ref={aboutRef}
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.div>

      {/* Projects Section with animation */}
      <motion.div
        ref={projectRef}
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Projects />
      </motion.div>

      {/* Interest Section with animation */}
      <motion.div
        ref={footerRef}
        id="interest"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Interest />
      </motion.div>

      {/* Contact Section with animation */}
      <motion.div
        ref={contactRef}
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Homepage;
