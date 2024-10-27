'use client'

import React from "react";
import { Vortex } from "../ui/vortex";
import { SpotlightPreview } from "../mainPage/mainpage";


export function VortexDemo() {
  return (
    <div className="w-full mx-auto rounded-md h-full overflow-hidden relative">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center md:px-10 w-full h-full "
      >
      </Vortex>
      <div className="w-full h-full p-5 rounded-md flex justify-center">
        <SpotlightPreview />
      </div>
    </div>
  );
}
