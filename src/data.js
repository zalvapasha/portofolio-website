import * as stacksLogo from "@assets/stacksLogo/stacksLogo";
import * as projectsIcon from "@assets/projectsicon/projectsicon";
import * as projectsVideo from "@assets/projectsvideo/projectsvideo";
import * as projectsPoster from "@assets/projectsposter/projectsposter";

const stacksData = [
  { logo: stacksLogo.htmlLogo, name: "HTML" },
  { logo: stacksLogo.cssLogo, name: "CSS" },
  { logo: stacksLogo.jsLogo, name: "JavaScript" },
  { logo: stacksLogo.reactLogo, name: "React JS" },
  { logo: stacksLogo.tailwindLogo, name: "Tailwind CSS" },
  { logo: stacksLogo.githubLogo, name: "Github" },
  { logo: stacksLogo.figmaLogo, name: "Figma" },
  { logo: stacksLogo.photoshopLogo, name: "Adobe Photoshop" },
  { logo: stacksLogo.illustratorLogo, name: "Adobe Illustrator" },
  { logo: stacksLogo.premiereLogo, name: "Adobe Premiere Pro" },
];

const projectsData = [
  {
    icon: projectsIcon.movioIcon,
    title: "Movio Data App",
    video: projectsVideo.movioVideo,
    poster: projectsPoster.movioPoster,
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
    icon: projectsIcon.autrolIcon,
    title: "Traffic Violation Detection",
    video: projectsVideo.autrolVideo,
    poster: projectsPoster.autrolPoster,
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
    icon: projectsIcon.easeIcon,
    title: "Ease To-Do List App",
    video: projectsVideo.easeVideo,
    poster: projectsPoster.easePoster,
    description:
      "Effortlessly manage tasks with our intuitive to-do list app. Features include adding, deleting, completing, updating, and organizing tasks for streamlined productivity.",
    websiteLink: "https://ease-to-do.vercel.app/",
    githubLink: "https://github.com/zalvapasha/to-do-list-app",
    technologies: ["React JS", "JavaScript", "Tailwind CSS", "ShadCN UI"],
  },
];

export { stacksData, projectsData };
