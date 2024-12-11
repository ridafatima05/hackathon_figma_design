import Image from "next/image";
import React from "react";

const HeroSec = () => {
  return (
    <div className="lg:w-[1344px] lg:h-[52px] ml-12 flex justify-between bg-[#FFFFFF] items-center">
      {/**left side div */}
      <div className="">
        <h1 className="font-medium text-black w-[161px] h-[27px]">
          Best of Air Max
        </h1>
      </div>
      {/**right side div */}
      <div className="lg:w-[164px] lg:h-[48px] flex items-center justify-center space-x-2">
        <p className="font-medium text-black text-sm mr-2">Shop</p>

        <button className="w-12 h-12 bg-[#F5F5F5] rounded-full">
          <span className="text-xl font-normal text-[#CCCCCC] w-[6px] h-[13px] ">
            {"<"}
          </span>
        </button>

        <button className="w-12 h-12 bg-[#E5E5E5] rounded-full">
          <span className="text-xl font-normal text-black w-[6px] h-[13px]">
            {">"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSec;
