import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="lg:w-[1440px] lg:h-[60px] bg-[#FFFFFF] text-black">
      <div className="flex justify-between items-center">
        {/**left side logo icon div */}
        <div className="">
          <Image
            src={"/images/Vector.png"}
            alt="nike logo icon"
            width={58.85}
            height={20.54}
            className="ml-16 "
          />
        </div>

        {/**center side div */}
        <div className="">
          <ul className="flex space-x-6 ml-28 font-semibold text-black">
            <li>
              <Link href={"/"}>New & Featured</Link>
            </li>
            <li>
              <Link href={"/"}>Men</Link>
            </li>
            <li>
              <Link href={"/"}>Kids</Link>
            </li>
            <li>
              <Link href={"/"}>Women</Link>
            </li>
            <li>
              <Link href={"/"}>Sale</Link>
            </li>
            <li>
              <Link href={"/"}>SNKRS</Link>
            </li>
          </ul>
        </div>

        {/**right side div */}
        <div className="flex items-center space-x-4 mr-16">
  {/* Search Form */}
  <form className="flex items-center space-x-2 ">
    <div className="relative">
      {/* Input field */}
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 pl-10  w-[180px] h-[40px] border border-gray-300 bg-[#F5F5F5] rounded-full focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Search Icon */}
      <div className="w-[40px] h-[36px] absolute left-2 mt-2 ml-2 top-1/2 transform -translate-y-1/2">
        <Image
        src={"/images/search.png"}
        alt="search"
        width={16.72}
        height={16.72}/>
      </div>
    </div>
  </form>



      {/* Heart Icon */}
      <div className="w-[84px] h-[60px] flex justify-center items-center space-x-6">
        <Image
        src={"/images/heart.png"}
        alt="heart vector"
        width={30}
        height={30}
        className=""/>
      

      {/* Shopping Bag Icon */}
      
        <Image
          src={"/images/shopping.png"}
          alt="shopping bag vector"
          width={24}
          height={24}
        />
      </div>
    </div>


      </div>


    </div>
  );
};

export default Header;
