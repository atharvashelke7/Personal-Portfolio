// projectsData.js
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import aii from "../assets/aii.png";
import { SiFramer } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    projectTitle: "YouTube Project",
    projectSubtitle: "YouTube",
    description:
      "A web application inspired by YouTube, developed using React.js, Redux Toolkit, and Tailwind CSS. It features a responsive UI, video listings, and a functional search bar, allowing users to browse, view, and interact with videos seamlessly. The project demonstrates efficient state management, styling, and user experience similar to the original platform.",
    imageUrl: "https://i.pinimg.com/1200x/48/20/99/482099fdddab26d1220993104ce09b13.jpg",
    projectUrl: "https://youtube-project-ruddy.vercel.app/",
    techIcons: [
      { component: RiReactjsLine, color: "text-cyan-400" },
      { component: TbBrandRedux, color: "text-[#764abc]" },
      { component: RiTailwindCssFill, color: "text-[#38bdf8]" },
    ],
  },
  {
    id: 2,
    projectTitle: "Netflix-GPT Project",
    projectSubtitle: "Netflix-GPT",
    description:
      "A Netflix clone integrated with GPT for personalized recommendations and Firebase for authentication.",
    imageUrl:
      "https://i.pinimg.com/1200x/63/5f/12/635f124734285d243ff884749044dd5a.jpg",
    projectUrl: "https://netflix-gpt-project.vercel.app/",
    techIcons: [
      { component: RiReactjsLine, color: "text-cyan-400" },
      { component: TbBrandRedux, color: "text-[#764abc]" },
      { component: RiTailwindCssFill, color: "text-[#38bdf8]" },
      { component: SiFirebase, color: "text-[#dd2c00]" },
    ],
  },
  {
    id: 3,
    projectTitle: "Ai-Summarize",
    projectSubtitle: "Ai-Summarize",
    description:
      "Developed a responsive chatbot application using React.js and Tailwind CSS, integrated with Rapid API for enhanced conversational capabilities. The chatbot offers real-time interaction and intelligent responses, providing a seamless user experience with a clean, modern UI. The project demonstrates efficient API integration, styling, and user-friendly design.",
    imageUrl: aii,
    projectUrl: "https://ai-summarizer-ruby-alpha.vercel.app/",
    techIcons: [
      { component: RiReactjsLine, color: "text-cyan-400" },
      { component: RiTailwindCssFill, color: "text-[#38bdf8]" },
    ],
  },
  {
    id: 4,
    projectTitle: "Ochi Design",
    projectSubtitle: "Ochi",
    description:
      "OCHI is a responsive clone project crafted with React, Tailwind CSS, and Framer Motion. It features smooth animations and a modern UI, closely replicating the original platform's design and functionality. This project showcases dynamic user interactions, efficient state management, and engaging visual effects, providing a polished and immersive user experience.",
    imageUrl:
      "https://i.pinimg.com/1200x/b5/27/1a/b5271a15f7498b3c1248e3fc14d5cd74.jpg",
    projectUrl: "https://ochi-project-eta.vercel.app/",
    techIcons: [
      { component: RiReactjsLine, color: "text-cyan-400" },
      { component: RiTailwindCssFill, color: "text-[#38bdf8]" },
      { component: SiFramer, color: "text-white" },
    ],
  },
];

export default projectsData;
