import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='lg:w-[1440px] lg:h-[36px] bg-[#F5F5F5]'>
        <div>
      <div className=' flex justify-between ml-16 items-center '>
        {/**left side div*/}  
           <div>
            <Image
            src={"/images/Frame.png"}
            alt='logo'
            width={24}
            height={24}
            className='mt-1'/>
           </div>
      
      {/**right side div */}
      <div className='lg:flex lg:flex-row lg:space-x-4 space-x-2  mr-16'>
        <ul className='flex space-x-6 text-black mt-1 '>
            <li className='font-medium'><Link href={"/"}>Find a Store</Link></li>
            <div className=' w-[3px] h-[14px]'>|</div>
            <li className='font-medium'><Link href={"/"}>Help</Link></li>
            <div className=' w-[3px] h-[14px]'>|</div>
            <li className='font-medium'><Link href={"/"}>Join Us</Link></li>
            <div className=' w-[3px] h-[14px]'>|</div>
            <li className='font-medium'><Link href={"/login"}>Sign In</Link></li>
            
        </ul>
      </div>
      </div>
    </div>
    </div>
  )
}

export default TopHeader
