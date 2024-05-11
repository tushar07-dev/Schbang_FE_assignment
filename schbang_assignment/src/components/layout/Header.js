import React from "react";
import logo from "./../../../public/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex mx-auto items-center justify-between max-w-[1440px] h-[113px] px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Image
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          src={logo}
          alt="logo"
        />
        <div className="ml-2 font-bold text-lg sm:text-xl md:text-2xl">
          Travlog
        </div>
      </div>
      <ul className="hidden sm:flex gap-3 text-sm lg:text-base">
        <li className="cursor-pointer hover:bg-red-100 rounded-md py-2 px-3">
          Home
        </li>
        <li className="cursor-pointer hover:bg-red-100 rounded-md py-2 px-3">
          Discover
        </li>
        <li className="cursor-pointer hover:bg-red-100 rounded-md py-2 px-3">
          Special Deals
        </li>
        <li className="cursor-pointer hover:bg-red-100 rounded-md py-2 px-3">
          Contact
        </li>
      </ul>
      <div className="flex items-center">
        <button className="hidden sm:block py-2 px-4 rounded-md text-sm lg:text-base text-gray-700 hover:bg-red-100">
          Log In
        </button>
        <button className="hidden sm:block py-2 px-4 bg-[#5D50C6] text-white rounded-md text-sm lg:text-base hover:bg-blue-400 ml-2">
          Sign Up
        </button>
        <button className="sm:hidden py-2 px-4 rounded-full text-sm bg-[#5D50C6] text-white hover:bg-blue-400">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
