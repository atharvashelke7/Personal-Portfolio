import React from "react";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { LiaNpm } from "react-icons/lia";

const Tools = () => {
  return (
    <div className="p-6 sm:p-12 font-['Helvetica']">
      <h1 className="text-3xl sm:text-6xl md:text-8xl leading-tight font-bold text-[#e3e3e3] text-center sm:text-left sm:pl-8 py-4 sm:py-6">
        Tools & Platform
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 p-6 sm:p-12 md:p-16 lg:p-24">
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <SiPostman className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#ff6c37]" />
        </div>
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <FaGithub className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#fefefe]" />
        </div>
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <SiFirebase className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#ffcd32]" />
        </div>
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <RiTailwindCssFill className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#38bdf8]" />
        </div>
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <SiMui className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0073e6]" />
        </div>
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <LiaNpm className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#d50808]" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
