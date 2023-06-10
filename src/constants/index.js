import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carwale,
  playzone,
  cameraapp,
  excelclone,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: reactjs,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern (Frontend)",
    company_name: "Carwale",
    icon: carwale,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Apr 2022",
    points: [
      "Made an accepted POC of a Bike Racing Game.",
      "Worked on improving performance of website and mobile pages.",
      "Converted Design (PSD files) to highly functional and responsive web pages",
      "Worked on implementation of different features on website and mobile pages uing React JS and Vanilla JS.",
      "Skills: Software Development · React.js · JavaScript · CSS · SCSS · HTML",
    ],
  },
  {
    title: "Associate Software Developer (Frontend)",
    company_name: "Carwale",
    icon: carwale,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Made various features for desktop and mobile pages of CarWale, BikeWale and CarTrade.",
      "Contributed in building retail page for BikeWale which helps in ordering bikes without visiting the showroom.",
      "Worked on improving the performance through DOM Node reductions and CSS optimizations.",
      "Worked on making several components consistent with the framework that has been used internally.",
      "Worked on various websites of Car dealers across India , which are clients of CarWale.",
      "Skills: Software Development · React.js · JavaScript · CSS · TypeScript · SCSS · HTML · React Native",
    ],
  },
];

const codingProfiles = [
  {
    name:"Leetcode",
    link:"https://leetcode.com/codeski/",
  },
  {
    name:"Codechef",
    link:"https://www.codechef.com/users/ssj0542",
  },
  {
    name:"HackerRank",
    link:"https://www.hackerrank.com/CS1D_1816410244",
  },
  {
    name:"Github",
    link:"https://github.com/ssjha0542",
  },
];

const projects = [
  {
    name: "Play Zone",
    description:
      "Web-based platform that allows users to play three different games on desktop and two on mobile.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: playzone,
    source_code_link: "https://github.com/ssjha0542/PLAY-ZONE",
  },
  {
    name: "Camer Application",
    description:
      "Web application that enables users to click pictures and record videos. Apart from this they can also apply filters and save captured videos and images.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cameraapp,
    source_code_link: "https://github.com/ssjha0542/camera_app/",
  },
  {
    name: "My Excel App",
    description:
      "An amazing excel clone that can work the same way as Microsoft Excel and can perform arithmetic operations and can apply font formatting also.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: excelclone,
    source_code_link: "https://github.com/ssjha0542/Excel-Clone",
  },
];

export { services, technologies, experiences, codingProfiles, projects };
