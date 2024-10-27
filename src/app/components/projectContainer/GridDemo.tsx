
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { StaticImageData } from "next/image";

interface Item {
  title: string;
  description: string;
  link: string;
  image: string | StaticImageData;
}

interface BentoGridDemoProps {
  items: Item[]; // An array of items
}



export function BentoGridDemo({items}:BentoGridDemoProps) {
  return (
    <BentoGrid className="max-w-4xl mx-auto py-5 relative -z-0">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          link={item.link}
          image={item.image}
        />
      ))}
    </BentoGrid>
  );
}



