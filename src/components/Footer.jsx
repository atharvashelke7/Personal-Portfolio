import React from "react";

import SocialMedia from "./SocialMedia";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div id="contact" className="font-['Helvetica'] text-white pt-5">
      <footer className="flex flex-col items-center text-center p-6 md:p-10">
       
        <Contact />
        {/* Horizontal Line */}
        <div className="w-11/12 md:w-4/5 lg:w-3/4 border-t border-gray-500 my-4 md:my-6 lg:my-8"></div>

        {/* Social Media Links */}

        <SocialMedia />
      </footer>
    </div>
  );
};

export default Footer;
