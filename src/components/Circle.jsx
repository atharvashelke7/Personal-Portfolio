import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Circle = ({ onCircleClick }) => {
  return (
    <div className="fixed bottom-8 right-6 sm:bottom-10 sm:right-16">
      <button
        onClick={onCircleClick}
        className="btn btn-circle bg-white text-black hover:bg-gray-400"
      >
        <FaArrowUp className="text-black" />
      </button>
    </div>
  );
};

export default Circle;
