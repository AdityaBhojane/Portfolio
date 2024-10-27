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
      className: "text-[1.5rem] max-sm:text-[1rem]"
    },
    {
      text: "Developer.",
      className: "text-[1.5rem] dark:text-yellow-500 max-sm:text-[1rem]",
    },
  ];
  return (
    <div className="flex items-center relative bottom-8 ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
