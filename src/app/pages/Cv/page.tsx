"use client";

import React from "react";

import { TracingBeamDemo } from "@/app/components/TracingBream/TracingBeamDemo";

const Cv: React.FC = () => {
    return (
        <div className="w-full h-full p-10 rounded-md bg-neutral-900 flex justify-center relative">
            {/* <div className="w-[50vw] m-16 border overflow-y-auto border-white rounded-xl p-6">
            </div> */}
            <TracingBeamDemo />
        </div>
    )
}

export default Cv;