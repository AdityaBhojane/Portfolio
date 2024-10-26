// import type { NextPage } from 'next'
'use client'
import { TabsDemo } from "@/app/components/Tabs/TabsDemo";


const Project: React.FC = () => {
  return (
    <>
      <div className="w-full h-[90vh]">
        <div className="w-[80vw] m-auto">
        <h1 className="text-3xl py-5 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Projects
        </h1>
          <TabsDemo />
        </div>
      </div>
    </>
  )
}

export default Project;