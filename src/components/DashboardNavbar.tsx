"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

import { useRecoilState } from "recoil";

import { GoSidebarCollapse } from "react-icons/go";
import { hamaburgerAtom } from "@/store/atoms/dasbboardHamburger";
import { sidebarOpen } from "@/store/atoms/sidebar";

const DashboardNavbar = () => {


  const [isOpen,setOpen] = useRecoilState(hamaburgerAtom);
  const[isMenuOpen,setMenuOpen] = useRecoilState(sidebarOpen)
 
  const toogleBtn = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="relative  flex items-center justify-between   h-16 border-b-[.5px] border-b-stone-700">
      <div className="block lg:hidden">
        <Image src="/BELIEVE-LOGO-07.png" alt="BNSymbol" height={70} width={70} />
      </div>
      
      <div className="flex items-center gap-x-3 pr-6 md:pl-4 ">
      <div  className={`hidden ${isMenuOpen? 'lg:hidden':'lg:block'}`} onClick={()=>setMenuOpen(!isMenuOpen)}><GoSidebarCollapse  className="text-xl"/></div>
     
      </div>

      <div className="hidden lg:flex gap-x-5 mr-10">
   
      
      </div>

      {/* hamaburger menu */}

      <div
        className="lg:hidden border border-zinc-600 p-1 rounded-md bg-zinc-800 mr-4"
        onClick={toogleBtn}
      >
        {isOpen ? (
          <IoCloseSharp className="text-xl text-stone-400" />
        ) : (
          <IoMenu className="text-xl text-stone-400" />
        )}
      </div>

    
    </div>
  );
};

export default DashboardNavbar;