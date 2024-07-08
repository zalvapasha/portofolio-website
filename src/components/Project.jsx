import React, { useContext } from "react";
import { projectsData } from "../data.js";
import { FaGithub } from "react-icons/fa6";
import { TbLink } from "react-icons/tb";
import { ThemeContext } from "../context/ThemeContext";

const Project = () => {
  const { theme } = useContext(ThemeContext);

  const cardMode = `${
    theme === "dark"
      ? "bg-cardDark border-borderDark"
      : "bg-cardLight border-borderLight "
  }`;

  return (
    <div className="flex flex-col gap-20">
      {projectsData.map((project, index) => (
        <div
          className="grid grid-cols-2 lg:grid-rows-3 lg:grid-cols-4 gap-5 pb-4 overflow-hidden"
          key={index}
        >
          <div className="flex lg:hidden items-center text-textLight1 dark:text-textDark1 text-lg xxs:texl-2xl xs:text-3xl text-left ml-4 font-bold col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5">
            <span className="bg-cardLight border-borderLight dark:border-borderDark dark:bg-boxDark border-[1px] text-textLight1 dark:text-textDark1 p-2 rounded-xl mr-2 flex-shrink-0">
              <img
                src={project.icon}
                alt="Project Icon"
                style={{ width: "24px", height: "24px" }}
              />
            </span>
            {project.title}
          </div>

          <div className="border-borderLight dark:border-borderDark col-span-full border-[1px] rounded-3xl lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-3">
            <video
              className="rounded-3xl"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={project.video}
              poster={project.poster}
              playsInline
              autoPlay
              muted
              loop
            />
          </div>

          <div
            className={`${cardMode} rounded-3xl border-[1px] col-start-1 col-end-3 lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5`}
          >
            <div className="flex justify-center flex-col p-5 text-left text-gray-400 text-lg gap-4">
              <div className="hidden lg:flex items-center text-textLight1 dark:text-textDark1 text-3xl font-bold">
                <span className="flex bg-boxLight border-borderLight dark:border-borderDark dark:bg-boxDark border-[1px] p-2 rounded-xl mr-2">
                  <img
                    src={project.icon}
                    alt="Project Icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                </span>
                {project.title}
              </div>

              <div className="text-textLight3 dark:text-textDark3 text-base md:text-xl lg:text-base">
                {project.description}
              </div>

              <div className="text-textLight1 dark:text-textDark1 font-">
                <ul className="gap-2 flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-boxLight dark:bg-boxDark text-sm px-2 w-fit rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {project.websiteLink !== "None" && (
            <div
              className={`${cardMode} rounded-3xl hover:bg-boxLight dark:hover:bg-boxDark border-[1px] p-5 lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-3 transition duration-500 ease-in-out`}
            >
              <a
                href={project.websiteLink}
                className="min-h-full flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbLink
                  size={50}
                  color={theme === "dark" ? "#fbfbfb" : "#262626"}
                  className="flex-shrink-0"
                />
              </a>
            </div>
          )}

          <div
            className={`${cardMode} rounded-3xl hover:bg-boxLight dark:hover:bg-boxDark border-[1px] p-5  transition duration-500 ease-in-out ${
              project.websiteLink === "None"
                ? "col-span-full lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-3"
                : "lg:col-start-4 lg:col-end-4 lg:row-start-3 lg:row-end-3"
            } `}
          >
            <a
              href={project.githubLink}
              className="min-h-full flex justify-center items-center flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={50}
                color={theme === "dark" ? "#fbfbfb" : "#262626"}
                className="flex-shrink-0"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
