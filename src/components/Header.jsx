import React from "react";

const Header = ({ onAboutClick, onProjectClick, onContactClick }) => {
  return (
    <div id="header" className="flex justify-center items-center pt-4 sm:pt-10">
      <div className="p-4 sm:py-4 rounded-full  bg-black overflow-hidden border  dark:border-white shadow-lg text-white   flex flex-row items-center justify-center gap-2 sm:gap-6 font-['Helvetica'] font-semibold">
        <div className="avatar">
          <div className="w-10 sm:w-12  rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQG8dhKUz1ZEaA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728580566506?e=1736380800&v=beta&t=oGk-LYmQgo-y5eq7MXi-WaAJvriFltd2Q1JF42kcusg"
              alt="Avatar"
            />
          </div>
        </div>
        <button
          onClick={onAboutClick}
          className="bg-[#646464] font-[Helvetica] font-light  bg-opacity-50 py-1 px-2 w-20 sm:w-28 text-xs sm:text-base rounded-full hover:bg-opacity-70 transition"
        >
          About
        </button>
        <button
          onClick={onProjectClick}
          className="bg-[#646464] font-[Helvetica] font-light bg-opacity-50 py-1 px-2 w-20 sm:w-28 text-xs sm:text-base rounded-full hover:bg-opacity-70 transition"
        >
          Projects
        </button>
        <button
          onClick={onContactClick}
          className="bg-[#646464] font-[Helvetica] font-light bg-opacity-50 py-1 px-2 w-20 sm:w-28 text-xs sm:text-base rounded-full hover:bg-opacity-70 transition"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Header;
