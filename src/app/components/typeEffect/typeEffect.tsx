"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    // {
    //   text: "hi",
    //   className: "text-[2.5rem]"
    // },
    // {
    //   text: "i am",
    //   className: "text-[2.5rem]"
    // },
    // {
    //   text: "a",
    //   className: "text-[2.5rem]"
    // },
    {
      text: "Software",
      className: "text-[2rem]"
    },
    {
      text: "Developer.",
      className: "text-[2rem] dark:text-yellow-500",
    },
  ];
  return (
    <div className="flex flex-col items-center relative bottom-5">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
