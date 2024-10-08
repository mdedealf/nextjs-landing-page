import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const GalleryItems: FC<Gallery> = ({ image, alt, link }) => {
  return (
    <>
      <div className="relative group flex items-center justify-center bg-light-gray h-[306px] w-[444px] rounded-[4px] transition-all hover:drop-shadow-2xl">
        <Image
          className="w-[348px] h-[194px] object-cover blur-none group-hover:blur-sm"
          src={image}
          priority
          width={348}
          height={194}
          alt={alt}
        />
        <div className="absolute flex justify-center items-center bg-white rounded-[4px] gap-[8px] cursor-pointer">
          <Link
            className="hidden py-[12px] px-[16px] group-hover:block text-[16px] font-500px"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the website ↗
          </Link>
        </div>
      </div>
    </>
  );
};

export default GalleryItems;
