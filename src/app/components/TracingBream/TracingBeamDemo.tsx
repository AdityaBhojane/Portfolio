"use client";
import React from "react";
import profileImage from "@/app/assets/profile/p1.png"
// import Image from "next/image";
import { TracingBeam } from "../ui/tracing-bream";
import { TypewriterEffectSmoothDemo } from "../typeEffect/typeEffect";
import { Image } from "@nextui-org/react";
// import { TextGenerateEffectDemo } from "../textEffec/TextEffect";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 w-[40vw] max-2xl:w-[60vw] max-xl:w-[80vw] ">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <div className="content-1 flex h-full items-center py-5">
          <Image
            width={150}
            alt="NextUI hero Image"
            src={profileImage.src}
            className="rounded-full relative bottom-5 min-w-[100px]"
          />
          <div className="px-10">
            <h1 className="text-4xl max-sm:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 max-xl:mb-5 max-sm:mb-8">
              Aditya Bhojane
            </h1>
            <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
              <TypewriterEffectSmoothDemo />
            </h2>
          </div>
        </div>
        <div className="mb-8 content-2">
          <h2 className="text-[#ccc] font-semibold text-lg">Profile -</h2>
          <p className="dark:text-[#ccc] text-black text-sm font-normal leading-snug tracking-wide">Front-End Developer with experience building responsive, dynamic web applications using React, TailwindCSS, andJavaScript. Skilled in state management and API integration to enhance user experiences. Passionate about exploring new technologies and diving deep into learning</p>
        </div>
        <div className="mb-14 content-3">
          <h2 className="text-[#ccc] font-semibold text-lg">Skills -</h2>
          <p className="dark:text-[#ccc] text-black text-sm font-normal leading-snug tracking-wide">React, JavaScript, TypeScript, Tailwind, Git, GitHub</p>
        </div>
        <div className="mb-14 content-4">
          <h2 className="text-[#ccc] font-semibold text-lg">Projects -</h2>
          <h3 className="text-[#cfa9a9] my-2 text-sm font-semibold">1. End-to-End Shopping Website (Frontend) :</h3>
          <p className="dark:text-[#99b9cd] text-black text-sm font-normal leading-snug tracking-wide my-2">Tech Stack: React, TailwindCSS, Zustand, Tenstack Query</p>
          <ul className="list-disc ml-5 dark:text-[#ccc] text-black text-sm font-normal leading-snug tracking-wide">
            <li>Built a fully responsive shopping platform with features like pagination, search, filters (category, price range), admin panel, and order history.</li>
            <br />
            <li>Integrated skeleton loaders and delivery status tracking to enhance UX.</li>
            <br />
            <li>Implemented checkout functionality and utilized state management with Zustand for a seamless user experience.</li>
          </ul>
        </div>
        <div className="mb-14 content-5">
          <h3 className="text-[#cfa9a9] my-2 text-sm font-semibold">2. AI Chatting App</h3>
          <p className="dark:text-[#99b9cd] text-black text-sm font-normal leading-snug tracking-wide my-2">Tech Stack: React, TailwindCSS
          </p>
          <ul className="list-disc ml-5 dark:text-[#ccc] text-black text-sm font-normal leading-snug tracking-wide">
            <li>Built a chat interface powered by an AI API, allowing users to chat with AI-generated responses.
            </li>
            <br />
            <li>Designed with loading skeletons for a polished feel, fully optimized for mobile responsiveness.</li>
            <br />
            <li>Integrated chat history storage to allow users to revisit previous conversations.
            </li>
          </ul>
        </div>
        <div className="mb-14 content-6">
          <h3 className="text-[#cfa9a9] my-2 text-sm font-semibold">3. CryptoTracker - Real-Time Cryptocurrency Tracker</h3>
          <p className="dark:text-[#99b9cd] text-black text-sm font-normal leading-snug tracking-wide my-2">Tech Stack: React, TailwindCSS
          </p>
          <ul className="list-disc ml-5 dark:text-[#ccc] text-black text-sm font-normal leading-snug tracking-wide">
            <li>Offers real-time data on cryptocurrency prices, market trends, and historical charts, allowing users to make informed investment decisions effortlessly.
            </li>
            <br />
            <li>Utilizes TanStack Query for efficient data fetching and state management, ensuring smooth updates and minimal loading times across the app.</li>
            <br />
            <li>Features an intuitive user interface with easy navigation, enabling users to track their favorite cryptocurrencies and access detailed information seamlessly.
            </li>
          </ul>
        </div>
        <div className="mb-14 content-7">
          <h3 className="text-[#cfa9a9] my-2 text-sm font-semibold">4.Brain Wave AI Quiz App</h3>
          <p className="dark:text-[#99b9cd] text-black text-sm font-normal leading-snug tracking-wide my-2">Tech Stack: React, TailwindCSS
          </p>
          <ul className="list-disc ml-5 dark:text-[#ccc] text-black text-sm font-normal leading-snug tracking-wide">
            <li>Developed an AI-powered quiz generator using an API that creates quizzes on user-defined topics
            </li>
            <br />
            <li>Features include customizable questions, a 90-second timer for answers, and a background color indicator for
              correct/incorrect answers.</li>
            <br />
            <li>Integrated an explanation pop-up for better learning after each question, fully responsive UI.
            </li>
          </ul>
        </div>
        <div className="mb-10 content-8">
          <h3 className="text-[#cfa9a9] my-2 text-sm font-semibold">5. Hangman - Classic Word Guessing Game</h3>
          <p className="dark:text-[#99b9cd] text-black text-sm font-normal leading-snug tracking-wide my-2">Tech Stack: React, TailwindCSS
          </p>
          <ul className="list-disc ml-5 dark:text-[#ccc] text-black text-sm font-normal leading-snug tracking-wide">
            <li>Engages players with a classic word-guessing experience where they can challenge themselves by guessing letters to complete words.
            </li>
            <br />
            <li>Incorporates fun animations and sound effects to enhance gameplay, creating an enjoyable and immersive environment for users of all ages.</li>
            <br />
            <li>Allows users to play solo or compete against friends, fostering friendly competition while improving vocabulary and spelling skills.
            </li>
          </ul>
        </div>
        <div className="mb-5 content-9">
          <h2 className="text-[#ccc] font-semibold text-lg mb-2">Certifications-</h2>
          <p className="dark:text-[#ccc] text-black text-sm font-normal leading-snug tracking-wide">
            • Full Stack Developer Certification <br />
            • Frontend Hackathon Round 2 <br />
            • Master Class Certifications in different tech domains (DevOps, Frontend, etc.)</p>
        </div>
        <div className="mb-14 content-100">
          <h2 className="text-[#ccc] font-semibold text-lg mb-2">Education -</h2>
          <p className="dark:text-[#ccc] text-black text-sm font-normal leading-snug tracking-wide">
          Bachelor&apos;s Degree : Kavi Kulguru Sanskrit University, Graduation: 2025
          </p>
        </div>
      </div>
    </TracingBeam>
  );
}

