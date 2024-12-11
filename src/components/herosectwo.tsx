import Image from "next/image";
import React from "react";

const HeroSecTwo = () => {
  return (
    <div className="lg:w-[1344px] lg:h-[540px] flex flex-col">
      <div className="flex flex-row bg-[#FFFFFF]">
        {/**1st product div */}
        <div className="w-[441px] h-[510px] ml-[48px]">
          <Image
            src={"/images/shoe1.png"}
            alt="shoes1"
            width={441}
            height={441}
          />

          {/**text div */}
          <div className="w-[425px] h-[48px] flex flex-row justify-between mt-2 ">
            <div className="w-[134px] h-[48px] flex flex-col  ">
              <h1 className="w-[131px] h-[21px] text-black font-semibold text-sm">
                Nike Air Max Pulse
              </h1>
              <p className="w-[109px] h-[24px] text-sm text-[#757575]">
                Women&apos;s Shoes
              </p>
            </div>
            <div className="w-[61.58] h-[17px]">
              <p>₹ 13 995</p>
            </div>
          </div>
        </div>
        {/**2nd shoe div */}
        <div className="w-[441px] h-[510px] ml-[48px]">
          <Image
            src={"/images/shoe2.png"}
            alt="shoes1"
            width={441}
            height={441}
          />

          {/**text div */}
          <div className="w-[425px] h-[48px] flex flex-row justify-between mt-2 ">
            <div className="w-[134px] h-[48px] flex flex-col  ">
              <h1 className="w-[131px] h-[21px] text-black font-semibold text-sm">
                Nike Air Max Pulse
              </h1>
              <p className="w-[109px] h-[24px] text-sm text-[#757575]">
                Men&apos;s Shoes
              </p>
            </div>
            <div className="w-[61.58] h-[17px]">
              <p>₹ 13 995</p>
            </div>
          </div>
        </div>
        {/**last product div */}
        <div className="w-[441px] h-[510px] ml-[48px]">
          <Image
            src={"/images/shoe3.png"}
            alt="shoes1"
            width={441}
            height={441}
          />

          {/**text div */}
          <div className="w-[425px] h-[48px] flex flex-row justify-between mt-2 ">
            <div className="w-[134px] h-[48px] flex flex-col  ">
              <h1 className="w-[131px] h-[21px] text-black font-semibold text-sm">
              Nike Air Max 97 SE
              </h1>
              <p className="w-[109px] h-[24px] text-sm text-[#757575]">
                Men&apos;s Shoes
              </p>
            </div>
            <div className="w-[61.58] h-[17px]">
              <p>₹ 16 995</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecTwo;
