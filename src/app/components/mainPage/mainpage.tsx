'use client';

import React from "react";
import { LensDemo } from "../ProjectPin/ProjectPin";
import aiImage from "@/app/assets/projects/Ai.jpg";
import ctImage from "@/app/assets/projects/ct.jpg";
import shImage from "@/app/assets/projects/shopping.svg";

export function SpotlightPreview() {
  return (
    <div className="h-full w-full pt-10 max-md:pt-2 z-0 rounded-md flex md:justify-center  antialiased  relative">
      <div className="w-full h-full">
        <div className="p-4 max-w-7xl mx-auto relative z-10 h-full w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Aditya Bhojane
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            I&apos;m a Full-stack web developer passionate about building responsive, engaging applications and creating impactful user experiences. I would like to explore new tech.
          </p>
        </div>
        <div className="w-[80vw] h-full mx-auto grid gap-5 p-10 max-sm:p-3 grid-cols-3 max-2xl:w-full max-xl:grid-cols-2 max-md:grid-cols-1">
          <LensDemo
            link="https://github.com/AdityaBhojane/EveryHuman-au-Frontend"
            image={shImage.src}
            title={"Shopping Frontend with Admin Panel"}
            para={"Developed a shopping website with a complete end-to-end checkout process and an admin panel for managing orders and products"}
          />
          <LensDemo
            link="https://github.com/AdityaBhojane/Ai-Chat-App"
            image={aiImage.src}
            title={"Ai chatting app"}
            para={"Built a mobile-friendly AI chat interface with loading skeletons and chat history storage for revisiting past conversations"}
          />
          <LensDemo
            link="https://github.com/AdityaBhojane/Crypto-Tracker-SCN"
            image={ctImage.src}
            title={"Crypto-Tracker"}
            para={"Built a crypto tracker with shadcn and the CoinGecko API, featuring pagination and filters for easy navigation and sorting of crypto data"}
          />
        </div>
      </div>
    </div>
  );
}
