import Image from 'next/image';
import React from 'react';

const Essential = () => {
  return (
    <div className="w-[1344px] h-[1000px] ml-12 flex flex-col">
      <div className=''>
        {/** top div */}
        <div className="w-[157px] h-[27px] text-black font-medium">
          <h1>The Essentials</h1>
        </div>

        {/** bottom div */}
        <div className="w-[1356px] h-[540px] flex flex-row space-x-3 mt-2 justify-between">
          {/* Box 1 */}
          <div className="w-[440px] h-[550px] relative">
            <Image
              src={"/images/pantshirt.png"}
              alt="mens"
              width={440}
              height={550}
            />
            {/* Button below image */}
            <button className="absolute bottom-10 left-[48px] w-[85.19px] h-[39px] py-[7.5px] px-[20.69px] gap-0 rounded-tl-[30px] rounded-tr-none rounded-br-none rounded-bl-none opacity-0">
              Men's
            </button>
          </div>

          {/* Box 2 */}
          <div className="w-[440px] h-[550px] relative">
            <Image
              src={"/images/hoodie.png"}
              alt="mens"
              width={440}
              height={550}
            />
            {/* Button below image */}
            <button className="absolute mb-10 left-[48px] bg-[#FFFFFF] text-black w-[85.19px] h-[39px] py-[7.5px] px-[20.69px] gap-0 rounded-tl-[30px] rounded-tr-none rounded-br-none rounded-bl-none opacity-0">
              Men's
            </button>
          </div>

          {/* Box 3 */}
          <div className="w-[440px] h-[550px] relative">
            <Image
              src={"/images/bag.png"}
              alt="mens"
              width={440}
              height={550}
              className='i'
            />
            {/* Button below image */}
            <button className="absolute bottom-10 left-1/2 w-[85.19px] h-[39px] py-[7.5px] px-[20.69px] gap-0 rounded-tl-[30px] rounded-tr-none rounded-br-none rounded-bl-none opacity-0">
              Men's
            </button>
          </div>
        </div>




        <div className='w-[880px] h-[192px] ml-[280px] mt-32 flex flex-row'>
          <div className='flex flex-col space-y-3'>
            <h1 className='font-medium text-black'>Icons</h1>
            <div className='w-[184px] h-[144px] space-y-2 text-[#757575] text-sm'>
                <p>Air Force 1</p>
                <p>Huarache</p>
                <p>Air Max 90</p>
                <p>Air Max 95</p>
            </div>
          </div>
          <div className='flex flex-col space-y-3'>
            <h1 className='font-medium text-black'>Shoes</h1>
            <div className='w-[184px] h-[144px] space-y-2 text-[#757575] text-sm'>
                <p>All Shoes</p>
                <p>Custom Shoes</p>
                <p>Jordan Shoes</p>
                <p>Running Shoes</p>
            </div>
          </div>
          <div className='flex flex-col space-y-3'>
            <h1 className='font-medium text-black'>Clothing</h1>
            <div className='w-[184px] h-[144px] space-y-2 text-[#757575] text-sm'>
                <p>All Clothing</p>
                <p>Modest Wear</p>
                <p>Hoodies & Pullovers</p>
                <p>Shirts & Tops</p>
            </div>
          </div>
          <div className='flex flex-col space-y-3'>
            <h1 className='font-medium text-black'>Kids&apos;</h1>
            <div className='w-[184px] h-[144px] space-y-2 text-[#757575] text-sm'>
                <p>Infant & Toddler Shoes</p>
                <p>Kids' Shoes</p>
                <p>Kids' Jordan Shoes</p>
                <p>Kids' Basketball Shoes</p>
            </div>
          </div>
          </div>












      </div>
    </div>
  );
};

export default Essential;
