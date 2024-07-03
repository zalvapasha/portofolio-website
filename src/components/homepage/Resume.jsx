import React, { useContext } from "react";
import resumePDF from "../../assets/resume.pdf";
import { TbDownload } from "react-icons/tb";
import { ThemeContext } from "../../context/ThemeContext";

const Resume = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full h-full flex p-8 relative ">
      <div className="text-left font-sans">
        <h2 className="text-textLight3 dark:text-textDark3 text-base tracking-[.4rem] mb-4">
          RESUME
        </h2>
        <h3 className="text-black dark:text-white text-lg ">
          Unlock my professional journey—download my resume now!
        </h3>
        <a href={resumePDF} download="resume.pdf">
          <button className="border-borderLight dark:border-borderDark border-[1px] hover:bg-boxLight dark:hover:bg-boxDark rounded-full p-3 absolute right-8 bottom-7 transition duration-500 ease-in-out">
            <TbDownload
              size={20}
              color={theme === "dark" ? "#fbfbfb" : "#262626"}
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
