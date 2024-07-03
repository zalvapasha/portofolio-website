import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const items = [
    { id: 1, name: "Home", path: "/", active: location.pathname === "/" },
    {
      id: 2,
      name: "Projects",
      path: "/projects",
      active: location.pathname === "/projects",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
      active: location.pathname === "/contact",
    },
  ];

  return (
    <nav className="flex z-40 w-full h-auto items-center justify-center sticky top-0 inset-x-0 ">
      <div className=" p-4 w-fit backdrop-blur-lg rounded-xl my-8">
        <ul className="z-40 gap-4 flex-row relative bg-cardLight border-borderLight dark:bg-cardDark dark:border-borderDark border-[1px] flex-nowrap items-center max-w-[1024px] rounded-xl h-11  flex justify-center w-auto px-2 p-2 ">
          {items.map(({ id, name, path, active }) => (
            <li
              key={id}
              className={`whitespace-nowrap font-medium items-center text-sm py-1 px-2 transition duration-300 ${
                active
                  ? "text-black dark:text-white bg-boxLight dark:bg-boxDark rounded-md"
                  : "dark:text-white/60 text-black/60"
              }`}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
