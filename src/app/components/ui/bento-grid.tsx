import { cn } from "@/app/lib/utils/utils";
import Image from "next/image";
import { StaticImageData } from "next/image";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-3 max-xl:grid-cols-2 max-[950px]:grid-cols-1 max-2xl:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  link,
  image // Image should be of type string
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  link?: string;
  image?: string | StaticImageData; // Keep this as string
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl max-[950px]:mx-auto max-[950px]:max-w-[30rem] max-[950px]:min-h-[15rem] transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-1 w-full h-full min-h-[8rem] max-xl:min-h-[10rem]  max-h-[8rem] overflow-hidden rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        {image? <Image
          src={image}
          alt="project images"
          className="w-full h-full object-cover border border-[#696969] rounded-xl"
          layout="responsive"
          width={500} // Use appropriate width
          height={300} // Use appropriate height
        />: <></>}
      </div>
      <div onClick={handleClick} className="group-hover/bento:translate-x-2 relative bottom-4 transition cursor-pointer duration-200">
        <div className="font-sans text-lg font-bold leading-5 text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
