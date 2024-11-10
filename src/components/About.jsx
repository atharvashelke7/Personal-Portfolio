import React from "react";

const About = () => {
  return (
    <div id="about" className=" p-6 sm:p-12 font-['Helvetica'] text-gray-200">
      <h1 className="text-3xl sm:text-8xl leading-tight font-bold text-[#e3e3e3] sm:pl-12 py-4 sm:py-8 text-center sm:text-left">
        About Me
      </h1>
      <div className="flex flex-col p-5 sm:flex-row items-center justify-between gap-8">
        <img
          className="w-full sm:w-[45%] sm:pl-12 rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Atharva Shelke"
        />
        <p className="text-base sm:text-lg leading-8 sm:w-[45%] sm:pr-16 w-full tracking-wider text-gray-400">
          Hello! I’m Atharva Shelke, a passionate software developer
          specializing in front-end technologies, especially React.js. I’m
          currently pursuing my MCA and have built various projects that
          showcase my ability to create innovative, user-centric applications.
          Projects inspired by platforms like YouTube, Netflix, and Workbox
          highlight my skills in building scalable, responsive applications with
          React.js, Node.js, and MongoDB.
          <br />
          <br />I focus on writing clean, maintainable code, crafting intuitive
          user interfaces, and ensuring functionality across devices.
          Technology's endless potential for growth excites me, and I am
          constantly learning new frameworks, tools, and best practices. I look
          forward to collaborating with innovative teams to solve complex
          problems and deliver impactful solutions. Let’s build something
          amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
