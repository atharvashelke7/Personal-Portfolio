import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Menu icon
import { GiCancel } from "react-icons/gi"; // Cancel icon

const Header = ({ onAboutClick, onProjectClick, onContactClick }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div id="header" className="flex justify-center items-center pt-4 sm:pt-10">
      {/* Desktop view */}
      <div className="hidden sm:flex p-4 sm:py-4 rounded-full bg-black border dark:border-white shadow-lg text-white gap-6 font-['Helvetica'] font-semibold">
        <div className="avatar">
          <div className="w-10 sm:w-12 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQG8dhKUz1ZEaA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728580566506?e=1736380800&v=beta&t=oGk-LYmQgo-y5eq7MXi-WaAJvriFltd2Q1JF42kcusg"
              alt="Avatar"
            />
          </div>
        </div>
        <button onClick={onAboutClick} className="bg-[#646464] text-white py-1 px-2 w-28 rounded-full hover:bg-opacity-70 transition">About</button>
        <button onClick={onProjectClick} className="bg-[#646464] text-white py-1 px-2 w-28 rounded-full hover:bg-opacity-70 transition">Projects</button>
        <button onClick={onContactClick} className="bg-[#646464] text-white py-1 px-2 w-28 rounded-full hover:bg-opacity-70 transition">Contact Me</button>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden flex items-center justify-between w-full px-6 py-4">
        {/* Avatar */}
        <div className="avatar flex items-center">
          <div className="w-10 rounded-full ring-white ring-offset-2 shadow-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQG8dhKUz1ZEaA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728580566506?e=1736380800&v=beta&t=oGk-LYmQgo-y5eq7MXi-WaAJvriFltd2Q1JF42kcusg"
              alt="Avatar"
            />
          </div>
        </div>
        {/* Menu button */}
        <button onClick={toggleDrawer} className="text-white">
          <FiMenu size={24} />
        </button>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-10 flex justify-start">
          {/* Drawer content */}
          <div className="w-2/3 bg-black border-l border-white shadow-lg p-4 relative">
            {/* Close button */}
            <button
              onClick={toggleDrawer}
              className="text-white  rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-opacity-80 transition transform hover:rotate-90"
            >
              <GiCancel size={20} />
            </button>
            {/* Drawer navigation */}
            <div className="flex flex-col items-start mt-6 pl-3 uppercase gap-4">
              <button onClick={() => { toggleDrawer(); onAboutClick(); }} className="text-white text-lg py-4 border-b border-gray-500 w-full hover:border-b-4 transition-all">About</button>
              <button onClick={() => { toggleDrawer(); onProjectClick(); }} className="text-white text-lg py-4 border-b border-gray-500 w-full hover:border-b-4 transition-all">Projects</button>
              <button onClick={() => { toggleDrawer(); onContactClick(); }} className="text-white text-lg py-4 border-b border-gray-500 w-full hover:border-b-4 transition-all">Contact Me</button>
            </div>
          </div>
          {/* Clickable area to close the drawer */}
          <div className="flex-1" onClick={toggleDrawer}></div>
        </div>
      )}
    </div>
  );
};

export default Header;
