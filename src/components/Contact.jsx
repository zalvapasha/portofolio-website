import React, { useContext } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const cardMode = `${
    theme === "dark"
      ? "bg-cardDark border-borderDark"
      : "bg-cardLight border-borderLight "
  }`;

  return (
    <div className="grid grid-cols-2 grid-rows-4 xs:grid-cols-4 xs:grid-rows-2 gap-4">
      <div
        className={`${cardMode} border-[1px] rounded-3xl h-24 row-start-1 row-end-1 col-start-1 col-end-3 xs:row-start-1 xs:row-end-1 xs:col-start-1 xs:col-end-3`}
      >
        <div className="flex items-center justify-center w-full h-full p-8">
          <a
            href="mailto:zalvapasha1@gmail.com"
            className="flex items-center justify-center w-full gap-3 px-4 py-2 bg-boxLight dark:bg-boxDark rounded-2xl"
          >
            <IoMail
              color={theme === "dark" ? "#fbfbfb" : "#262626"}
              size={35}
              className="flex-shrink-0"
            />
            <h2 className="text-lg font-semibold text-textLight1 dark:text-textDark1 truncate">
              zalvapasha1@gmail.com
            </h2>
          </a>
        </div>
      </div>

      <a
        className={`${cardMode} flex flex-col items-center justify-center p-4 gap-2 border-[1px] rounded-3xl row-start-2 row-end-4 col-start-1 col-end-3 xs:row-start-1 xs:row-end-3 xs:col-start-3 xs:col-end-5`}
        href="https://github.com/zalvapasha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          color={theme === "dark" ? "#fbfbfb" : "#262626"}
          className="size-[50px]"
        />
        <h2 className="text-3xl text-textLight1 dark:text-textDark1 font-semibold">
          Github Profile
        </h2>
        <h3 className="text-lg text-textLight2 dark:text-textDark2">
          Find more of my repositories
        </h3>
      </a>

      <a
        className={`${cardMode} flex items-center justify-center border-[1px] rounded-3xl h-full row-start-4 row-end-4 col-start-1 col-end-1 xs:row-start-2 xs:row-end-2 xs:col-start-1 xs:col-end-1`}
        href="https://www.linkedin.com/in/zalva-ihilani-pasha-b88506237/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          color={theme === "dark" ? "#fbfbfb" : "#262626"}
          size={50}
          className="flex-shrink-0"
        />
      </a>

      <a
        className={`${cardMode} flex items-center justify-center border-[1px] rounded-3xl h-full row-start-4 row-end-4 col-start-2 col-end-2 xs:row-start-2 xs:row-end-2 xs:col-start-2 xs:col-end-2`}
        href="https://www.instagram.com/zalvpsh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          color={theme === "dark" ? "#fbfbfb" : "#262626"}
          size={50}
          className="flex-shrink-0"
        />
      </a>
    </div>
  );
};

export default Contact;
