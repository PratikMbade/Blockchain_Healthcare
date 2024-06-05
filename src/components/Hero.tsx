import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {

    const words = [
        {
          text: "Your",
        },
        {
          text: "Health,",
        },
        {
          text: "Your",
        },
        {
          text: "Data,",
        },
        {
          text: "Our Blockchain.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
   
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
    <p className="text-neutral-300   text-sm md:text-xl  ">
    Empowering Healthcare with Blockchain
    </p>
 
   
    <div className='flex items-center justify-center'>
        <p className='mb-4 font-semibold text-neutral-400 max-w-lg text-center mx-auto text-xs md:text-lg '>Unlock a New Level of Healthcare. With Blockchain, We Secure Your Data, Ensure Transparency, and Empower You to Take Control of Your Health Information Like Never Before.</p>
    </div>
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
    <Link href='/dashboard'>
    <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
        Get Started
      </button>
    </Link>
     
    </div>
  </div>
  )
}

export default Hero