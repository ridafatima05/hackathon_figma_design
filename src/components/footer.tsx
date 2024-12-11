import { MdLocationOn } from "react-icons/md";

import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='lg:w-[1440px] lg:h-[331px] bg-black text-[#FFFFFF] '>
      <div>
        {/** */}
        <div className='w-[1372px] h-[213px] flex flex-row '>
        <div className='w-[1029px] h-[213px] flex flex-row ml-12 '>
            <div className='w-[244px] h-[166px] flex flex-col space-y-5 text-xs font-extralight text-white  mt-9'>
                       <p>FIND A STORE</p>
                       <p>BECOME A MEMBER</p>
                       <p>SIGN UP FOR EMAIL</p>
                       <p>SEND US FEEDBACK</p>
                       <p>STUDENT DISCOUNTS</p>
            </div>
            <div className='w-[245px] h-[213px] flex flex-col text-xs mt-9 space-y-3 '>
              <p className='text-[#FFFFFF]'>Get Help</p>
              <p className='text-[#7E7E7E]'>Order Status</p>
              <p className='text-[#7E7E7E]'>Delivery</p>
              <p className='text-[#7E7E7E]'>Returns</p>
              <p className='text-[#7E7E7E]'>Payment Options</p>
              <p className='text-[#7E7E7E]'>Contact Us On Nike.com Inquiries</p>
              <p className='text-[#7E7E7E]'>Contact Us On All Other Inquiries</p>
            </div>
            <div className='w-[245px] h-[151px] flex flex-col text-xs mt-9 space-y-3  '>
              <p className='text-[#FFFFFF]'>ABOUT NIKE</p>
              <p className='text-[#7E7E7E]'>News</p>
              <p className='text-[#7E7E7E]'>Careers</p>
              <p className='text-[#7E7E7E]'>Investors</p>
              <p className='text-[#7E7E7E]'>Sustainability</p>
            </div>
        </div>    
        
 {/**top right side div */}
<div className='w-[337px] h-[37px] flex flex-row space-x-2 justify-end mt-9'>
<Image
src={"/images/twitter.png"}
alt='twitter icon'
width={30}
height={30}/>
<Image
src={"/images/fb.png"}
alt='fb icon'
width={30}
height={30}/>
<Image
src={"/images/youtube.png"}
alt='youtube icon'
width={30}
height={30}/>
<Image
src={"/images/insta.png"}
alt='insta icon'
width={30}
height={30}/>
</div>

</div>




<div className='w-[1440px] h-[62px] flex justify-between mt-14   '>
     <div className='w-[672px] h-[32px] flex flex-row ml-12 items-center mt-4  '>
        <div className='w-[60px] h-[15px] flex flex-row space-x-2 items-center'>
        <MdLocationOn />
            <p className='text-xs font-normal text-[#FFFFFF]'>India</p>
        </div>
        <div className='w-[250px] h-[14px] text-xs font-normal text-[#7E7E7E]'>
            <p>&copy; 2023 Nike&#44; Inc. All Rights Reserved</p>
        </div>
     </div>


     <div className="w-[680px] h-[46px] flex flex-row space-x-4 justify-end mr-12 items-center mt-2 text-xs font-normal" >
     <p className='text-[#7E7E7E]'>Guides</p>
              <p className='text-[#7E7E7E]'>Terms of Sale</p>
              <p className='text-[#7E7E7E]'>Terms of Use</p>
              <p className='text-[#7E7E7E]'>Nike Privacy Policy</p>
     </div>
</div>

    </div>
    </div>
  )
}

export default Footer
