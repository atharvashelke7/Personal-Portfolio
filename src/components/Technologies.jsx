import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="p-6 sm:p-12 font-['Helvetica']">
      <h1 className="text-3xl sm:text-6xl md:text-8xl leading-tight font-bold text-[#e3e3e3] text-center sm:text-left sm:pl-8 py-4 sm:py-6">
        Top Skills
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 p-6 sm:p-12 md:p-16 lg:p-24">
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <RiReactjsLine className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <DiNodejs className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <TbBrandRedux className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#764abc]" />
        </div>
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <SiExpress className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white" />
        </div>
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <SiMongodb className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#00ef64]" />
        </div>
        <div className="rounded-2xl border-4 p-4 sm:p-6 md:p-8 lg:p-10 border-zinc-700">
          <RiJavascriptFill className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f7e025]" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
