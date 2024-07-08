const stacksData = [
  {
    name: "HTML",
    logo: require("../src/assets/stackslogo/HTML5.png").default,
  },
  {
    name: "CSS",
    logo: require("../src/assets/stackslogo/CSS3.png").default,
  },
  {
    name: "JavaScript",
    logo: require("../src/assets/stackslogo/JavaScript.png").default,
  },
  {
    name: "React JS",
    logo: require("../src/assets/stackslogo/ReactJS.png").default,
  },
  {
    name: "Tailwind CSS",
    logo: require("../src/assets/stackslogo/TailwindCSS.png").default,
  },
  {
    name: "Github",
    logo: require("../src/assets/stackslogo/Github.png").default,
  },
  {
    name: "Figma",
    logo: require("../src/assets/stackslogo/Figma.png").default,
  },
  {
    name: "Adobe Photoshop",
    logo: require("../src/assets/stackslogo/Photoshop.png").default,
  },
  {
    name: "Adobe Illustrator",
    logo: require("../src/assets/stackslogo/Illustrator.png").default,
  },
  {
    name: "Adobe Premiere Pro",
    logo: require("../src/assets/stackslogo/PremierePro.png").default,
  },
];

const projectsData = [
  {
    title: "Movio Data App",
    icon: require("../src/assets/projectsicon/movio.svg").default,
    video: require("../src/assets/projectsvideo/movio.mp4").default,
    poster: require("../src/assets/projectsposter/movio.webp").default,
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
    title: "Traffic Violation Detection",
    icon: require("../src/assets/projectsicon/autrol.svg").default,
    video: require("../src/assets/projectsvideo/autrol.mp4").default,
    poster: require("../src/assets/projectsposter/autrol.webp").default,
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
    title: "Ease To-Do List App",
    icon: require("../src/assets/projectsicon/ease.svg").default,
    video: require("../src/assets/projectsvideo/ease.mp4").default,
    poster: require("../src/assets/projectsposter/ease.webp").default,
    description:
      "Effortlessly manage tasks with our intuitive to-do list app. Features include adding, deleting, completing, updating, and organizing tasks for streamlined productivity.",
    websiteLink: "https://ease-to-do.vercel.app/",
    githubLink: "https://github.com/zalvapasha/to-do-list-app",
    technologies: ["React JS", "JavaScript", "Tailwind CSS", "ShadCN UI"],
  },
];

export { stacksData, projectsData };
