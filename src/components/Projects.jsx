import React from "react";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <div id="projects" className="p-4 sm:p-12 font-['Helvetica'] text-white">
      <h1 className="text-3xl sm:text-8xl leading-10 font-bold text-[#e3e3e3] sm:pl-12 py-4 sm:py-8 text-center sm:text-left">
        Projects
      </h1>
      {/* Project 1 */}
      <ProjectCards />
    </div>
  );
};

export default Projects;
