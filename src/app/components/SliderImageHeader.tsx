"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { ImagesSlider } from "./ui/images-slider";
import { DATA_IMAGE_SLIDER } from "../Data/constant";

export default function ImagesSliderDemo() {
 
  return (
    <ImagesSlider className="h-[40rem]" images={DATA_IMAGE_SLIDER.img}>
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
         {DATA_IMAGE_SLIDER.p1}<br /> {DATA_IMAGE_SLIDER.p2}
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-yellow-300/20 border-yellow-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <Link href="/contact">
          <span>{DATA_IMAGE_SLIDER.span}</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
          </Link>
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
