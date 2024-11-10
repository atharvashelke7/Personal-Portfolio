import React, { useRef } from "react";
import Header from "./Header";
import Homepage from "./Homepage";
import Circle from "./Circle";

const Body = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c]">
      <div ref={headerRef} id="header">
        <Header
          onAboutClick={scrollToAbout}
          onProjectClick={scrollToProject}
          onContactClick={scrollToContact}
        />
      </div>
      <div>
        <Homepage
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
          
        />
      </div>

      <Circle onCircleClick={scrollToHeader} />
    </div>
  );
};

export default Body;
