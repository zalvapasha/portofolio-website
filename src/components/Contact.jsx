import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 xs:grid-cols-4 xs:grid-rows-2 gap-4 text-white">
      <div className="bg-zinc-800 rounded-3xl h-24 row-start-1 row-end-1 col-start-1 col-end-3 xs:row-start-1 xs:row-end-1 xs:col-start-1 xs:col-end-3">
        <div className="flex items-center justify-center w-full h-full p-8">
          <div className="flex items-center justify-center w-full gap-3 px-4 py-2 bg-zinc-600 rounded-2xl">
            <IoMail color="white" size={35} className="flex-shrink-0" />
            <h2 className="text-lg font-semibold truncate">
              zalvapasha1@gmail.com
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-4 gap-2 bg-zinc-800 rounded-3xl row-start-2 row-end-4 col-start-1 col-end-3 xs:row-start-1 xs:row-end-3 xs:col-start-3 xs:col-end-5">
        <FaGithub color="white" className="size-[50px]" />
        <h2 className="text-3xl font-semibold">Github Profile</h2>
        <h3 className="text-lg">Find more of my repositories</h3>
      </div>

      <div className="flex items-center justify-center bg-zinc-800 rounded-3xl h-full row-start-4 row-end-4 col-start-1 col-end-1 xs:row-start-2 xs:row-end-2 xs:col-start-1 xs:col-end-1">
        <FaLinkedin color="white" size={50} className="flex-shrink-0" />
      </div>

      <div className="flex items-center justify-center bg-zinc-800 rounded-3xl h-full row-start-4 row-end-4 col-start-2 col-end-2 xs:row-start-2 xs:row-end-2 xs:col-start-2 xs:col-end-2">
        <FaInstagram color="white" size={50} className="flex-shrink-0" />
      </div>
    </div>
  );
};

export default Contact;
