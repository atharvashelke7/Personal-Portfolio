import React from "react";
import projectsData from "../utlis/ProjectData";

const ProjectCards = () => {
  return (
    <div>
      {projectsData.map((project) => (
        <div key={project.id} className="py-4 sm:py-8">
          <div className="flex flex-col items-center sm:items-start px-4 sm:px-10">
            <h2 className="py-2 text-lg sm:text-xl tracking-tight bg-black text-white w-28 sm:w-40 text-center uppercase rounded-lg">
              Project {project.id}
            </h2>
            <h1 className="text-2xl uppercase sm:text-4xl pt-4 sm:pt-6 pb-4 sm:pb-8 font-semibold text-center sm:text-left">
              {project.projectTitle}
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 px-4 sm:px-10">
            <div className="card w-full max-w-[20rem] sm:max-w-[36rem] md:max-w-[40rem] h-auto shadow-lg bg-black rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <figure className="w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                <img
                  className="object-cover w-full h-full sm:h-auto sm:w-full transition-all duration-500 ease-in-out"
                  src={project.imageUrl}
                  alt={project.projectTitle}
                />
              </figure>
              <div className="p-4 sm:p-6 flex flex-col justify-between h-full bg-gradient-to-t from-gray-900 via-transparent to-transparent">
                <h2 className="text-xl font-['Helvetica']  sm:text-2xl font-semibold">
                  {project.projectSubtitle}
                </h2>
                <p className="text-sm font-['Helvetica'] text-[#84898c] sm:text-base mt-2">
                  {project.description}
                </p>

                {/* Icons */}
                <div className="flex gap-3 mt-4">
                  {project.techIcons.map((icon, index) => {
                    const IconComponent = icon.component;
                    return (
                      <IconComponent
                        key={index}
                        className={`text-2xl ${icon.color}`}
                      />
                    );
                  })}
                </div>

                <div className="card-actions flex justify-end mt-4">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black border border-gray-200 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
