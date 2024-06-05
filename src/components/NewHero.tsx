"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";

export function ImagesSliderDemo() {

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
  const images = [
    "https://plus.unsplash.com/premium_photo-1682130277144-423d6b582e56?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
  ];
  return (
    <ImagesSlider className="h-[40rem] mt-16" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
             <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
             <p className="text-neutral-300 font-semibold  text-sm md:text-xl  ">
    Empowering Healthcare with Blockchain
    </p>
    <TypewriterEffectSmooth words={words} />
        </motion.p>
        <Link href='/dashboard'>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Get Started →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
    </Link>
      </motion.div>
    </ImagesSlider>
  );
}
