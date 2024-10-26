"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import profileImage from "@/app/assets/profile/p1.png"
import { TypewriterEffectSmoothDemo } from "@/app/components/typeEffect/typeEffect";

const  Cv: React.FC =()=> {
  return (
    <div className="h-screen rounded-md bg-neutral-900 flex justify-center relative w-full">
    <div className="flex h-fit items-center p-5">
        <Image
            width={200}
            alt="NextUI hero Image"
            src={profileImage.src}
            className="rounded-full my-6"
        />
        <div className="px-10">
            <h1 className="text-5xl   font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Aditya Bhojane
            </h1>
            <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
                {/* <span>Software Developer</span> */}
                <TypewriterEffectSmoothDemo />
            </h2>
        </div>
    </div>
</div>
  )
}

export default Cv;