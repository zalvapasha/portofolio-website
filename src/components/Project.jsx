import React from "react";
import projectsData from "../data.json";
import { FaGithub } from "react-icons/fa6";
import { TbLink } from "react-icons/tb";

const Project = () => {
  return (
    <div className="flex flex-col gap-20">
      {projectsData.projects.map((project, index) => (
        <div
          className="grid grid-cols-2 lg:grid-rows-3 lg:grid-cols-4 gap-5 pb-4 overflow-hidden"
          key={index}
        >
          <div className="flex lg:hidden items-center text-3xl text-left font-bold text-white col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 ">
            <span className="bg-zinc-700 p-2 rounded-md mr-2 flex-shrink-0">
              <img
                src={project.icon}
                alt="Project Icon"
                style={{ width: "24px", height: "24px" }}
              />
            </span>
            {project.title}
          </div>

          <div className="col-span-full lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-3">
            <video
              className="rounded-3xl"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={project.video}
              // autoPlay
              muted
              loop
            />
          </div>

          <div className="rounded-3xl bg-zinc-800 col-start-1 col-end-3 lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5">
            <div className="flex justify-center  flex-col p-5 text-left text-gray-400 text-lg gap-4">
              <div className="hidden lg:flex items-center text-white text-3xl font-bold">
                <span className="flex bg-zinc-700 p-2 rounded-md mr-2">
                  <img src={project.icon} alt="Project Icon" />
                </span>
                {project.title}
              </div>
              {project.description}
            </div>
          </div>

          <div className="rounded-3xl bg-zinc-800 hover:bg-zinc-600 p-5 lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-3">
            <a
              href={project.websiteLink}
              className="min-h-full flex justify-center items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbLink size={50} color="white" className="flex-shrink-0" />
            </a>
          </div>
          <div className="rounded-3xl bg-zinc-800 hover:bg-zinc-600 p-5 lg:col-start-4 lg:col-end-4 lg:row-start-3 lg:row-end-3">
            <a
              href={project.githubLink}
              className="min-h-full flex justify-center items-center flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={50} color="white" className="flex-shrink-0" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
