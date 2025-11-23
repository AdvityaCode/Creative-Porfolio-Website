import { FaPython } from "react-icons/fa";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#rc" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I am a junior Computer Engineering major at Union College! As a liberal arts school, Union has taught me how to use technology as a tool to bring change in the real world.",
    description: "",
    className:
      "relative lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] overflow-hidden",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "justify-end relative z-10 text-white p-4",
    img: "/b1.jpg",
    spareImg: "",
    overlayClassName: "absolute inset-0 bg-gray-900 bg-opacity-30 z-0",
  },
  {
    id: 2,
    title: "I love connecting with new people (check out Contact)!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Broad Tech Stack",
    description: "Java is my favorite programming language, but I use a",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Expertise includes: Java, JavaScript, React, Node.js, Python, CSS, C/C++, HTML, TailwindCSS, TypeScript.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "A computer vision HCI basketball training application",
    description: "Currently working on: ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    des: "Full-stack personal portfolio website using React components, TailwindCSS, ThreeJS, and Aceternity UI.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/AdvityaCode/Creative-Porfolio-Website",
  },
  {
    id: 2,
    title: "Strategy Based German Board Game",
    des: "Object Oriented software in Python and Java for users to play Igel Aergern, a German strategy based board game.",
    img: "/p1.png",
    iconLists: [],
    link: "https://github.com/AdvityaCode/Igel-Aergern-Program-for-Strategy-Based-German-Board-Game",
  },
  {
    id: 3,
    title: "Embedded Microcontroller C/C++ Final Project",
    des: "A touch free project in C/C++ that ensures COVID-19 free entry in buildings using NUCLEO-F429ZI board peripherals.",
    img: "/p3.png",
    iconLists: [],
    link: "",
  },

  {
    id: 4,
    title: "Automatic Music Transcription Software",
    des: "A software that uses Dynamic Time Warping and signal processing to give immediate and accurate feedback to instrument players to improve.",
    img: "/p4.png",
    iconLists: [],
    link: "https://github.com/AdvityaCode/COVID-19_Safe_Entryway_System",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AI/ML Computer Vision Research Assistant",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern @ NYU Tandon School of Engineering",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "MakerWeb Technology and Fabrication Assistant, CNC and Laser Lab",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Resident Advisor, Department of Residential Life, Union College",
    desc: "Maintained community standards and implemented academic and wellness programs for a 260 person residence hall to foster community development.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/advityacode",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://linkedin.com/AdvityaSingh",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
