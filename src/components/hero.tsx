import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='lg:w-[1344px] lg:h-[977px] flex justify-center mt-3 ml-12 items-center'>
      <div className='flex flex-col justify-center items-center text-center'>
        <div>
          <Image
            src={"/images/shoes.png"}
            alt='shoes image'
            width={1344}
            height={700}
            className='object-cover'
          />
        </div>

        <div className='lg:w-[1008px] lg:h-[299px] flex flex-col justify-center items-center space-y-2'>
          <h1 className='w-[70px] h-[24px] text-xs font-semibold'>
            First Look
          </h1>
          <h1 className='w-[574px] h-[60px] font-medium text-5xl'>
            NIKE AIR MAX PULSE
          </h1>
          <p className='w-[511px] h-[48px] text-center text-xs'>
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
            —designed to push you past your limits and help you go to the max.
          </p>
          <div className='lg:w-[1008px] lg:h-[45px] space-x-2'>
            <button className='bg-black rounded-full text-[#FFFFFF] lg:w-[110px] lg:h-[39px] text-sm hover:bg-[#F5F5F5] hover:text-black'>Notify Me</button>
            <button className='bg-black rounded-full text-[#FFFFFF] lg:w-[138px] lg:h-[39px] text-sm hover:bg-[#F5F5F5] hover:text-black '>Shop Air Max</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
