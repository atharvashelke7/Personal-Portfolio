import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GIT_HUB, LINKDIN_URL } from "../utlis/constant";

const SocialMedia = () => {
  return (
    <div>
      <nav className="text-center">
        <h1 className="text-gray-400 text-lg sm:text-xl md:text-2xl pb-4">
          Get in touch
        </h1>
        <div className="flex justify-center gap-4">
          <a href={LINKDIN_URL} target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-[#E9E9E9] hover:text-blue-500 transition-colors" />
          </a>
          <a href={GIT_HUB} target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 text-[#E9E9E9] hover:text-gray-400 transition-colors" />
          </a>
          <a href="mailto:shelkeatharva07@gmail.com">
            <SiGmail className="w-6 h-6 sm:w-8 sm:h-8 text-[#E9E9E9] hover:text-red-500 transition-colors" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default SocialMedia;
