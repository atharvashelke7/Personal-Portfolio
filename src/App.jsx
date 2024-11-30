import React from "react";
import { motion } from "framer-motion";
import Body from "./components/Body";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      {/* Smooth Scroll Container */}
      <motion.div
        style={{ overflowY: "scroll", height: "100vh" }} // Enabling scroll
        initial={{ y: -100 }} // Initial position above the screen
        animate={{ y: 0 }} // Animate to final position (normal)
        transition={{ type: "spring", stiffness: 100 }} // Smooth spring animation
      >
        <Body />
      </motion.div>
    </>
  );
}

export default App;
