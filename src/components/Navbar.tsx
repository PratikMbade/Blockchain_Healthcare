"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useWeb3Modal } from "@web3modal/ethers5/react";




interface NavItem {
  title: string;
  link: string;
}

const navList: NavItem[] = [
  {
    title: "Home",
    link: "/",
  },

  
  {
    title: "How it works",
    link: "/howitwork",
  },
  {
    title: "About",
    link: "/howitworks",
  },

  {
    title: "Contact",
    link: "/howitworks",
  },
  {
    title: "FAQ",
    link: "#faq",
  },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState<String>("#home");

  const router = useRouter(); // Add this line
  // const { open } = useWeb3Modal();
  // const { address, isConnected } = useWeb3ModalAccount();
  const { open } = useWeb3Modal()










  return (
    <div className="w-full  h-[70px] fixed top-0 bg-transparent shadow-lg backdrop-blur-md z-50 px-4 md:px-10 border-b border-b-gray-700">
      <div className="w-full h-full flex flex-row items-center justify-between text-xs font-semibold">
       <div className="flex items-center">
       <div className="flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-xl">
            Blockchain
          </h1>
          in Healthcare

        </div>

        {/* Hamburger Icon */}

     
        {/* Navigation Links and additional options */}
        <div
          className={`gap-y-4  hidden lg:flex   py-2 items-start md:flex-row md:items-start absolute md:static md:bg-transparent md:text-[15px] bg-indigo-950  w-fit px-10  rounded-tl-md rounded-bl-md right-[0%] top-[97%] md:top-0 md:w-auto `}
        >
          {navList.map((NavRoute, index) => (
            <div
              key={index}
              className={`px-3  ${
                activeNav === NavRoute.link ? "text-yellow-400" : ""
              } md:mx-2 text-[14px]`}
            >
              <Link
                href={NavRoute.link}
                onClick={() => {
                  setActiveNav(NavRoute.link);
                }}
              >
                {NavRoute.title}
              </Link>
            </div>
          ))}
          {/* Wallet Connect Button */}
        </div>
       </div>

       <div
          className="lg:hidden border border-zinc-600 p-1 rounded-md bg-zinc-800 mr-4"
          
        >
      
        </div>

  


        {/* Wallet and Language Selection for Desktop */}
        <div className="lg:flex items-center gap-5">

          <Link href='/Registration'>
          <div>
            <button className="rounded-3xl border border-zinc-600 p-1  bg-zinc-800 mr-4 py-2 text-lg px-3" >Registration</button>
           </div>
          </Link>
     <w3m-button balance="show"/>
          <div className="">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;