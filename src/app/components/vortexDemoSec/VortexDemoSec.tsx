import React from "react";
import { Vortex } from "../ui/vortex";
import { TabsDemo } from "../Tabs/TabsDemo";

export function VortexDemoSecond() {
  return (
    <div className="max-w-full mx-auto rounded-md h-[125vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center max-w-full h-full relative max-[950px]:bottom-20"
      >
       <div className="w-full h-full max-[950px]:h-screen p-5 rounded-md flex justify-center relative">
        <div className="w-[80vw] h-full m-auto">
        <h1 className="text-3xl py-2 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Projects
        </h1>
          <TabsDemo />
        </div>
      </div> 
      </Vortex>
    </div>
  );
}
