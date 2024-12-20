"use client";

import { Tabs } from "../ui/tabs";
import { BentoGridDemo } from "../projectContainer/GridDemo";
import { advise,coins,Gemini,hangmann,news,shopping,tic,todo,weather } from "@/app/assets/Frontend";



const Frontend = [
  {
    title: "Shopping Frontend with admin panel",
    description: "Developed a shopping website with a complete end-to-end checkout process and an admin panel for managing orders and products",
    link: 'https://github.com/AdityaBhojane/EveryHuman-au-Frontend',
    image: shopping
  },
  {
    title: "Ai chatting app with history storage",
    description: "Built a mobile-friendly AI chat interface with loading skeletons and chat history storage for revisiting past conversations",
    link: 'https://github.com/AdityaBhojane/Ai-Chat-App',
    image: Gemini
  },
  {
    title: "Crypto-Tracker with ShadCn CoinGeeko API",
    description: "Built a crypto tracker with shadcn and the CoinGecko API, featuring pagination and filters for easy navigation and sorting of crypto data",
    link: 'https://github.com/AdityaBhojane/Crypto-Tracker-SCN',
    image: coins
  },
  {
    title: "BrainWave AI Quiz Creation with Gemini AI",
    description:
      "BrainWave AI Quiz uses the Gemini AI API to let users create, customize, and solve quizzes interactively for dynamic learning experiences.",
    link: 'https://github.com/AdityaBhojane/BrainWave_Ai-Quiz',
    image: Gemini
  },
  {
    title: "WeatherWise - Modern Weather App with React",
    description: "WeatherWise is a sleek, modern app that provides real-time weather updates and forecasts with an intuitive user interface.",
    link: 'https://github.com/AdityaBhojane/Weather-React-App',
    image: weather
  },
  {
    title: "GlobalNews Hub - Worldwide News with Country Filters",
    description: "GlobalNews Hub is a news app that offers the latest headlines, featuring global coverage with filters for country-specific news updates.",
    link: 'https://github.com/AdityaBhojane/News-App-ReactJS',
    image: news
  },
  {
    title: "React Hangman - Classic Word Guessing Game",
    description: "React Hangman is an interactive word guessing game built with React, featuring fun animations and challenging gameplay for all ages.",
    link: 'https://github.com/AdityaBhojane/HangMan-React',
    image: hangmann
  },
  {
    title: "Tic-Tac-Toe Showdown - Classic Game in React",
    description: "Tic-Tac-Toe Showdown is a React-based game offering a classic, competitive tic-tac-toe experience with a clean and responsive UI.",
    link: 'https://github.com/AdityaBhojane/Tic-Tac-Toe-in-React-js',
    image: tic
  },
  {
    title: "TaskMaster - Simple and Efficient To-Do App",
    description: "TaskMaster is a streamlined to-do app designed for organizing tasks efficiently, featuring an intuitive interface for easy task management.",
    link: 'https://github.com/AdityaBhojane/Todo-with-React',
    image: todo
  },
  {
    title: "WiseWords - Random Advice Generator",
    description: "WiseWords is an advice app that provides users with random, insightful suggestions using an API, promoting positivity and inspiration with every refresh.",
    link: 'https://github.com/AdityaBhojane/Give-Me-Advice-App-',
    image: advise
  },
];

export function TabsDemo() {
  const tabs = [
    {
      title: "Frontend ",
      value: "Frontend ",
      content: (
        <div className="max-w-full h-full max-sm:max-h-[30rem]  max-[950px]:h-[35rem] px-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent  relative rounded-2xl text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="sticky z-10  py-2 px-5 top-0 left-0 bg-gradient-to-br from-purple-600 to-violet-900">Frontend Projects</p>
          <BentoGridDemo items={Frontend} />
        </div>
      ),
    },
    {
      title: "Full Stack ",
      value: "Full Stack ",
      content: (
        <div className="w-full h-full max-sm:max-h-[30rem]  max-[950px]:h-[35rem] px-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent  relative rounded-2xl text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="sticky py-2 px-5 top-0 left-0 bg-gradient-to-br from-purple-600 to-violet-900">Full Stack Projects</p>
        </div>
      ),
    },
    {
      title: "Mini Projects",
      value: "Mini Projects",
      content: (
        <div className="w-full h-full max-sm:max-h-[30rem]  max-[950px]:h-[35rem] px-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent  relative rounded-2xl text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="sticky py-2 px-5 top-0 left-0 bg-gradient-to-br from-purple-600 to-violet-900">Mini Projects</p>

        </div>
      ),
    },
    {
      title: "Extra",
      value: "Extra",
      content: (
        <div className="w-full h-full max-sm:max-h-[30rem]  max-[950px]:h-[35rem] px-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent  relative rounded-2xl text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="sticky py-2 px-5 top-0 left-0 bg-gradient-to-br from-purple-600 to-violet-900">Other Projects</p>

        </div>
      ),
    },
    {
      title: "Web 3",
      value: "Web 3",
      content: (
        <div className="w-full h-full max-sm:max-h-[30rem]  max-[950px]:h-[35rem] px-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent  relative rounded-2xl text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="sticky py-2 px-5 top-0 left-0 bg-gradient-to-br from-purple-600 to-violet-900">Web 3 Projects</p>

        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[45rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-2">
      <Tabs tabs={tabs} />
    </div>
  );
};




