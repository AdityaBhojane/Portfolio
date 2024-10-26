"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { BentoGridDemo } from "../projectContainer/GridDemo";

export function TabsDemo() {
  const tabs = [
    {
      title: "Frontend Projects",
      value: "Frontend Projects",
      content: (
        <div className="w-full overflow-y-scroll overflow-x-hidden relative h-full rounded-2xl text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="sticky py-2 px-5 top-0 left-0 bg-gradient-to-br from-purple-600 to-violet-900">Frontend Projects</p>
          <BentoGridDemo/>
        </div>
      ),
    },
    {
      title: "Full Stack Projects",
      value: "Full Stack Projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Full Stack Projects</p>
        </div>
      ),
    },
    {
      title: "Mini Projects",
      value: "Mini Projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Mini Projects</p>
          
        </div>
      ),
    },
    {
      title: "Other Projects",
      value: "Other Projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Other Projects</p>
          
        </div>
      ),
    },
    {
      title: "Web 3",
      value: "Web 3",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Web 3 Projects</p>
          
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[45rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-2">
      <Tabs tabs={tabs} />
    </div>
  );
}


