import React from "react";
import cv from "../assets/cv.pdf";

const Title = ({ onClickHire }) => {
  return (
    <div className="text-white p-8 md:p-24 font-['Helvetica']">
      <h1 className="text-4xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-neutral-200 to-neutral-100 dark:from-neutral-500 dark:via-white dark:to-white font-extrabold">
        Atharva Shelke
      </h1>
      <h3 className="text-2xl md:text-5xl font-semibold text-[#e1e1e1] pt-2 md:pt-4">
        Full Stack Developer
      </h3>
      <p className="text-[#8e8e8e] tracking-tight pt-2 md:pt-4 text-lg md:text-3xl leading-7 md:leading-10 w-full md:w-1/2">
        I'm a passionate full-stack developer with expertise in building modern,
        scalable, and user-friendly web applications.
      </p>
      <div className="flex gap-3 md:gap-5">
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
      </div>
    </div>
  );
};

export default Title;
