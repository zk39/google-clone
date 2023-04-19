import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOption from "./SearchHeaderOption";
export default function SearchHeader() {
  return (
    <header className="bg-white  sticky top-0">
      <div className="flex items-center w-full justify-between p-6 ">
        <Link href={"/"}>
          <Image
            width="120"
            height="40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt="googleImg"
         />
        </Link>

        <div className="flex-1">
          <SearchBox />
        </div>
        {/* Icons  */}
        <div className=" hidden md:inline-flex space-x-2">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button
          className="bg-blue-500 text-white
        font-medium hover:brightness-105 rounded-md
        shadow-md transition-all px-6 py-2 
        "
        >
          Sign In
        </button>
      </div>
      <SearchHeaderOption/>
    </header>
  );
}
