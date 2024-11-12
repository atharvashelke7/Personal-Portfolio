import React from "react";
import { motion } from "framer-motion";
import cv from "../assets/cv.pdf";

const Title = ({ onClickHire }) => {
  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="text-white p-8 md:p-24 font-['Helvetica']"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-neutral-200 to-neutral-100 dark:from-neutral-500 dark:via-white dark:to-white font-extrabold"
        variants={itemVariants}
      >
        Atharva Shelke
      </motion.h1>
      <motion.h3
        className="text-2xl md:text-5xl font-semibold text-[#e1e1e1] pt-2 md:pt-4"
        variants={itemVariants}
      >
        Full Stack Developer
      </motion.h3>
      <motion.p
        className="text-[#8e8e8e] tracking-tight pt-2 md:pt-4 text-lg md:text-3xl leading-7 md:leading-10 w-full md:w-1/2"
        variants={itemVariants}
      >
        I'm a passionate full-stack developer with expertise in building modern,
        scalable, and user-friendly web applications.
      </motion.p>
      <motion.div className="flex gap-3 md:gap-5" variants={itemVariants}>
        <a
          href={cv}
          download="Atharva_Shelke_CV.pdf"
          className="py-1.5 sm:py-2 px-4 sm:px-6 md:px-7 mt-4 md:mt-5 text-xs sm:text-sm md:text-lg rounded-xl bg-black border dark:border-white text-white hover:bg-zinc-900"
          aria-label="Download CV"
        >
          Download CV
        </a>
        <button
          onClick={onClickHire}
          className="py-1.5 sm:py-2 px-4 sm:px-6 md:px-7 mt-4 md:mt-5 text-xs sm:text-sm md:text-lg rounded-xl bg-black border dark:border-white text-white hover:bg-zinc-900"
        >
          Hire Me
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Title;
