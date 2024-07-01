import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import stacksData from "../../data.json";

const SkillsAndTools = () => {
  const settings = {
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    infinite: true,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="w-full h-full flex flex-col justify-center relative p-8">
      <h2 className="text-white text-left text-3xl w-11/12 ml-2 mb-12 z-10">
        Stacks I use
      </h2>
      <div className="w-full h-16 mx-auto">
        <Slider {...settings}>
          {stacksData.stacks.map((stack, index) => (
            <div key={index} className="flex">
              <div className="flex justify-center items-center bg-box rounded-md p-3 flex-shrink-0">
                <img src={stack.logo} alt={stack.name} className="w-10 h-10" />
              </div>
            </div>
          ))}
        </Slider>
        <div className="w-11 h-48 bottom-5 left-6 absolute bg-gradient-to-r from-card from-30% via-transparent to-transparent"></div>
        <div className="w-11 h-48 bottom-5 right-6 absolute bg-gradient-to-l from-card from-30% via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default SkillsAndTools;
