import Image from 'next/image'
import React from 'react'

const GearUp = () => {
  return (
    <div className="lg:w-[1344px] lg:h-[561px] bg-[#FFFFFF] ml-12 mt-5">
      <div>
        {/**top */}
        <div className='w-[90px] h-[27] text-black font-medium'>Gear Up</div>
        <div className='w-[1344px] h-[48px] flex justify-between items-center mr-12 ml-12'>
        <div className="lg:w-[211px] lg:h-[48px] flex items-center justify-center ml-[407px] space-x-2 mb-2">
              <p className="font-medium text-black text-sm mr-2">Men&apos;s Shop</p>
              <button className="w-12 h-12 bg-[#F5F5F5] rounded-full">
                <span className="text-xl font-normal text-[#CCCCCC] w-[6px] h-[13px]">
                  {"<"}
                </span>
              </button>
              <button className="w-12 h-12 bg-[#E5E5E5] rounded-full">
                <span className="text-xl font-normal text-black w-[6px] h-[13px]">
                  {">"}
                </span>
              </button>
            </div>
            <div className="lg:w-[211px] lg:h-[48px] flex items-center space-x-2 mb-2  ml-[383px]">
              <p className="font-medium text-black text-sm mr-2">Women&apos;s Shop</p>
              <button className="w-12 h-12 bg-[#F5F5F5] rounded-full">
                <span className="text-xl font-normal text-[#CCCCCC] w-[6px] h-[13px]">
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
        
        {/**bottom */}
        <div className='lg:w-[1356px] lg:h-[463px] flex flex-col lg:flex-row flex-wrap justify-between  lg:space-y-0'>

          {/** Box 1 */}
          <div className='w-[300px] h-[399px] flex flex-col items-center  bg-white'>
            <div className='w-[300px] h-[300px] flex items-center justify-center'>
              <Image
                src={"/images/men.png"}
                alt="men"
                width={300}
                height={300}
              />
            </div>
            <div className="w-[284px] h-[72px] flex flex-col justify-between mt-2">
              <div className="flex justify-between items-center mt-3">
                <h1 className="text-black font-semibold text-xs">Nike Dri-FIT ADV TechKnit Ultra</h1>
                <p className="text-black font-bold text-sm">₹ 3 895</p>
              </div>
              <p className="text-xs text-[#757575]">Men&apos;s Short-Sleeve <br /> Running Top</p>
            </div>
          </div>

          {/** Box 2 */}
          <div className='w-[300px] h-[399px] flex flex-col items-center  bg-white'>
            {/* "Shop" button above the image (in a separate div) */}


            {/* Image div */}
            <div className='w-[300px] h-[300px] flex items-center justify-center'>
              <Image
                src={"/images/short.png"}
                alt="men"
                width={300}
                height={300}
              />
            </div>

            <div className="w-[284px] h-[72px] flex flex-col justify-between mt-2">
              <div className="flex justify-between items-center mt-3">
                <h1 className="text-black font-semibold text-xs">Nike Dri-FIT Challenger</h1>
                <p className="text-black font-bold text-sm">₹ 2 495</p>
              </div>
              <p className="text-xs text-[#757575]">Men's 18cm (approx.) 2 <br /> -in-1 Versatile Shorts</p>
            </div>
          </div>

          {/** Box 3 */}
          <div className='w-[300px] h-[399px] flex flex-col items-center bg-white'>
            <div className='w-[300px] h-[300px] flex items-center justify-center'>
              <Image
                src={"/images/girl.png"}
                alt="women"
                width={300}
                height={300}
              />
            </div>
            <div className="w-[284px] h-[72px] flex flex-col justify-between mt-2">
              <div className="flex justify-between items-center mt-3">
                <h1 className="text-black font-semibold text-xs">Nike Dri-FIT ADV Run Division</h1>
                <p className="text-black font-bold text-sm">₹ 5 295</p>
              </div>
              <p className="text-xs text-[#757575]">Women's Long-Sleeve<br /> Running Top</p>
            </div>
          </div>

          {/** Box 4 */}
          <div className='w-[300px] h-[399px] flex flex-col items-center  bg-white '>
            {/* "Shop" button above the image (in a separate div) */}
            

            {/* Image div */}
            <div className='w-[300px] h-[300px] flex items-center justify-center'>
              <Image
                src={"/images/trouser.png"}
                alt="women"
                width={300}
                height={300}
              />
            </div>

            <div className="w-[284px] h-[72px] flex flex-col justify-between mt-2">
              <div className="flex justify-between items-center mt-3">
                <h1 className="text-black font-semibold text-xs">Nike Fast</h1>
                <p className="text-black font-bold text-sm">₹ 3 795</p>
              </div>
              <p className="text-xs text-[#757575]">Women's Mid-Rise 7/8 Running<br /> Leggings with Pockets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GearUp
