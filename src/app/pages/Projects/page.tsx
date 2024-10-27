// import type { NextPage } from 'next'
'use client'
// import { TabsDemo } from "@/app/components/Tabs/TabsDemo";
import { VortexDemoSecond } from "@/app/components/vortexDemoSec/VortexDemoSec";


const Project: React.FC = () => {
  return (
    <>
      {/* <div className="w-full h-full max-[950px]:h-screen p-5 rounded-md flex justify-center relative">
        <div className="w-[80vw] h-full m-auto">
        <h1 className="text-3xl py-2 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Projects
        </h1>
          <TabsDemo />
        </div>
      </div> */}
      <VortexDemoSecond/>
    </>
  )
}

export default Project;