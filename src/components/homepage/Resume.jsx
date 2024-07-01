import React from "react";
import resumePDF from "../../assets/resume.pdf";
import { TbDownload } from "react-icons/tb";

const Resume = () => {
  return (
    <div className="w-full h-full flex p-8 relative ">
      <div className="text-left">
        <h2 className="text-base font-light mb-4">RESUME</h2>
        <h3 className="text-base font-semibold">
          Download my resume by clicking the button below
        </h3>
        <a href={resumePDF} download="resume.pdf">
          <button className="border-white border-[1px] rounded-full p-3 absolute right-8 bottom-7">
            <TbDownload size={20} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
