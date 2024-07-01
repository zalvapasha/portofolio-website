import React from "react";
import SkillsAndTools from "../components/homepage/SkillsAndTools";
import Portrait from "../components/homepage/Portrait";
import Introduction from "../components/homepage/Introduction";
import Resume from "../components/homepage/Resume";
import About from "../components/homepage/About";
import Quote from "../components/homepage/Quote";

const HomePage = () => {
  return (
    <div className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 lg:grid-rows-3 lg:grid-cols-4 text-white gap-4">
        <div className="h-60 bg-card rounded-3xl row-start-1 row-end-1 md:row-start-1 md:row-end-1 md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-3">
          <Introduction />
        </div>
        <div className="h-60 bg-card rounded-3xl row-start-3 row-end-3 md:row-start-3 md:row-end-3 md:col-start-3 md:col-end-3 lg:row-start-1 lg:row-end-1 lg:col-start-3 lg:col-end-3">
          Photo panoramic
        </div>
        <div className="h-60 bg-card rounded-3xl row-start-7 row-end-7 md:row-start-5 md:row-end-5 md:col-start-2 md:col-end-2 lg:row-start-1 lg:row-end-1 lg:col-start-4 lg:col-end-4">
          Switch Theme
        </div>
        <div className="h-60 hidden md:block bg-card rounded-3xl md:row-start-2 md:row-end-2 md:col-start-1 md:col-end-1 lg:row-start-2 lg:row-end-2 lg:col-start-1 lg:col-end-1">
          <Portrait />
        </div>
        <div className="h-60 bg-card rounded-3xl row-start-2 row-end-2 md:row-start-2  md:row-end-2 md:col-start-2 md:col-end-4 lg:row-start-2 lg:row-end-2 lg:col-start-2 lg:col-end-4">
          <About />
        </div>
        <div className="h-60 bg-card rounded-3xl row-start-6 row-end-6 md:row-start-4 md:row-end-4 md:col-start-1 md-end-1 lg:row-start-2 lg:row-end-2 lg:col-start-4 lg:col-end-4">
          <Resume />
        </div>
        <div className="h-60 bg-card rounded-3xl row-start-5 row-end-5 md:row-start-4 md:row-end-4 md:col-start-2 md:col-end-4 lg:row-start-3 lg:row-end-3 lg:col-start-1 lg:col-end-3">
          <Quote />
        </div>
        <div className="h-60 bg-card rounded-3xl row-start-4 row-end-4 md:row-start-3 md:row-end-3 md:col-start-1 md:col-end-3 lg:row-start-3 lg:row-end-3 lg:col-start-3 lg:col-end-5">
          <SkillsAndTools />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
