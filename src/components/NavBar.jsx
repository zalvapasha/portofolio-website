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
    <nav className="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70">
      <ul className="z-40 gap-4 flex-row relative flex-nowrap items-center max-w-[1024px] bg-content2 rounded-xl h-11 my-8 flex justify-center w-auto px-2  bg-zinc-800 p-2 ">
        {items.map(({ id, name, path, active }) => (
          <li
            key={id}
            className={`whitespace-nowrap font-medium items-center text-sm py-1 px-2 ${
              active ? "text-white bg-zinc-600 rounded-md" : "text-white/60"
            }`}
          >
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
