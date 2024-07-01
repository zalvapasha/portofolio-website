import React from "react";
import logo from "../../assets/govnor.png";

const Quote = () => {
  return (
    <div className="w-full h-full p-8 relative">
      <div className="text-left ">
        <img src={logo} className="absolute right-4 bottom-6 " />
        <h2 className="text-lg font-semibold">
          Design is a funny word. Some people think design means how it looks.
          But of course, if you dig deeper, it’s really how it works.
        </h2>
        <h3 className="text-base font-light">- Steve Jobs</h3>
      </div>
    </div>
  );
};

export default Quote;
