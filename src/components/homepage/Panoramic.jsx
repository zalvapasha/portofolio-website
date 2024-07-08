import React from "react";
import Photo from "../../assets/photocollection/panoramic.webp";
const Panoramic = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <img src={Photo} className="object-cover rounded-3xl" />
    </div>
  );
};

export default Panoramic;
