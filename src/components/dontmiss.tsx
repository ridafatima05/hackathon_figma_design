import Image from 'next/image'
import React from 'react'

const DontMiss = () => {
  return (
    <div className="lg:w-[1344px] lg:h-[977px] ml-[48px] flex justify-center items-center">
    <div>
      {/**top div */}
      <div className="w-[96.26px] h-[27px] text-black font-medium text-base">
        <h1>Featured</h1>
      </div>
      {/**image div */}
      <div className="lg:w-[1344px] lg:h-[700] mt-2">
        <Image
          src={"/images/dontmiss.png"}
          alt="runing men in comfortable shoes"
          width={1344}
          height={700}
        />
      </div>

      {/**text div */}

      <div className="lg:w-[1008px] lg:h-[177px] bg-[#FFFFFF] text-black flex flex-col  space-y-3 justify-center text-center items-center">
        <h1 className="lg:w-[512px] lg:h-[60px] font-medium text-5xl flex justify-center items-center mt-9 ml-80 ">
        FLIGHT ESSENTIALS
        </h1>
        <p className="w-[531px] h-[21px] font-normal text-xs flex items-center text-center ml-96">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>
        
      </div>
      <div className="flex justify-center mr-7">
      <button className="w-[80px] h-[39px] bg-black text-[#FFFFFF]  mt- mb-0 hover:bg-[#F5F5F5]  hover:text-black text-sm rounded-full">
          Shop
        </button>
    </div>
    </div>
  </div>
  )
}

export default DontMiss
