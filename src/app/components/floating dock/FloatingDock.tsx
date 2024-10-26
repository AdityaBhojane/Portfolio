"use client";

import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin ,
  IconHome,
  IconFileCv,
  IconBulb,
  IconUserCircle
} from "@tabler/icons-react";


export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/pages/Projects",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/pages/Cv",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/aditya-bhojane-2b0412257/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Bhojane_Adi",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/AdityaBhojane",
    },
    {
      title: "Contact",
      icon: (
        <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "/pages/Contact",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center sticky bottom-10 ">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
