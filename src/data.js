import htmlLogo from "../src/assets/stackslogo/HTML5.png";
import cssLogo from "../src/assets/stackslogo/CSS3.png";
import jsLogo from "../src/assets/stackslogo/JavaScript.png";
import reactLogo from "../src/assets/stackslogo/ReactJS.png";
import tailwindLogo from "../src/assets/stackslogo/TailwindCSS.png";
import githubLogo from "../src/assets/stackslogo/Github.png";
import figmaLogo from "../src/assets/stackslogo/Figma.png";
import photoshopLogo from "../src/assets/stackslogo/Photoshop.png";
import illustratorLogo from "../src/assets/stackslogo/Illustrator.png";
import premiereLogo from "../src/assets/stackslogo/PremierePro.png";

import movioIcon from "../src/assets/projectsicon/movio.svg";
import movioVideo from "../src/assets/projectsvideo/movio.mp4";
import movioPoster from "../src/assets/projectsposter/movio.webp";

import autrolIcon from "../src/assets/projectsicon/autrol.svg";
import autrolVideo from "../src/assets/projectsvideo/autrol.mp4";
import autrolPoster from "../src/assets/projectsposter/autrol.webp";

import easeIcon from "../src/assets/projectsicon/ease.svg";
import easeVideo from "../src/assets/projectsvideo/ease.mp4";
import easePoster from "../src/assets/projectsposter/ease.webp";

const stacksData = [
  { logo: htmlLogo, name: "HTML" },
  { logo: cssLogo, name: "CSS" },
  { logo: jsLogo, name: "JavaScript" },
  { logo: reactLogo, name: "React JS" },
  { logo: tailwindLogo, name: "Tailwind CSS" },
  { logo: githubLogo, name: "Github" },
  { logo: figmaLogo, name: "Figma" },
  { logo: photoshopLogo, name: "Adobe Photoshop" },
  { logo: illustratorLogo, name: "Adobe Illustrator" },
  { logo: premiereLogo, name: "Adobe Premiere Pro" },
];

const projectsData = [
  {
    icon: movioIcon,
    title: "Movio Data App",
    video: movioVideo,
    poster: movioPoster,
    description:
      "Movio is a movie database app inspired by IMDb. It allows users to discover detailed information on movies and TV shows. With its intuitive interface, Movio makes exploring cinema easy and enjoyable.",
    websiteLink: "https://movio-tmdb.vercel.app/",
    githubLink: "https://github.com/zalvapasha/movio-tmdb",
    technologies: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "React Slick",
      "TMDB API",
    ],
  },
  {
    icon: autrolIcon,
    title: "Traffic Violation Detection",
    video: autrolVideo,
    poster: autrolPoster,
    description:
      "Our Traffic Violation Detection System identifies violations such as motorcycles without helmets and vehicles not stopping at pedestrian crossings. It also reads vehicle number plates to enforce traffic regulations effectively.",
    websiteLink: "None",
    githubLink: "https://github.com/zalvapasha/Traffic-Violation-Detection",
    technologies: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "Flask",
      "YOLOv7",
      "Mona Server",
    ],
  },
  {
    icon: easeIcon,
    title: "Ease To-Do List App",
    video: easeVideo,
    poster: easePoster,
    description:
      "Effortlessly manage tasks with our intuitive to-do list app. Features include adding, deleting, completing, updating, and organizing tasks for streamlined productivity.",
    websiteLink: "https://ease-to-do.vercel.app/",
    githubLink: "https://github.com/zalvapasha/to-do-list-app",
    technologies: ["React JS", "JavaScript", "Tailwind CSS", "ShadCN UI"],
  },
];

export { stacksData, projectsData };
