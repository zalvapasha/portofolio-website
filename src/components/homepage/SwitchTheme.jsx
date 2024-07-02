// src/components/homepage/SwitchTheme.js
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const SwitchTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full h-full p-8 flex justify-center items-center">
      <div className="">
        <label className="flex items-center cursor-pointer relative">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="sr-only"
          />
          <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-13 w-24 rounded-full relative transition duration-200">
            <span
              className={`${
                theme === "dark" ? "translate-x-5" : "-translate-x-5"
              } translate-y-1 inline-block w-10 h-10 transform bg-white rounded-full shadow-md transition duration-200`}
            ></span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default SwitchTheme;
