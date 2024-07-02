import React from "react";
import logo from "../../assets/govnor.png";

const Quote = () => {
  return (
    <div className="w-full h-full p-8 relative">
      <div className="">
        {/* <img src={logo} className="absolute right-4 bottom-6 " /> */}
        <div className="text-left font-sans">
          <h2 className="text-textLight1 dark:text-textDark1 text-2xl sm:text-3xl mb-2">
            The most complete gift of God is a life based on knowledge.
          </h2>
          <h3 className="text-textLight3 dark:text-textDark3 text-base sm:text-lg font-light">
            - Ali Bin Abi Thalib
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Quote;
