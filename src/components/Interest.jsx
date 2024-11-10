import React from "react";

const Interest = () => {
  return (
    <div id="interest" className="flex flex-col gap-5 font-['Helvetica'] justify-center py-12 items-center">
      <h1 className="sm:text-6xl text-4xl font-bold text-[#8e8e8e] p-5">
        Interested In
      </h1>
      <div className="py-2 w-72  hover:bg-zinc-800  text-white text-lg  text-center rounded-full border border-white">
        <h1>Frontend Development</h1>
      </div>
      <div className="py-2 w-72 hover:bg-zinc-800  text-white text-lg  text-center rounded-full border border-white">
        <h1>Backend Development</h1>
      </div>
      <div className="py-2 w-72 hover:bg-zinc-800  text-white text-lg text-center rounded-full border border-white">
        <h1>Full Stack Development</h1>
      </div>
    </div>
  );
};

export default Interest;
