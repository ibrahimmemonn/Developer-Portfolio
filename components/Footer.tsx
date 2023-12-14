import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <div className="pb-10 justify-center flex ">
        {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1]"
            >
              <Image
                src={social.image}
                height={30}
                width={30}
                className="mx-5"
                alt={social.alt}
              />
            </Link>
          );
        })}
      </div>
      <p className="text-gray-300 text-center text-sm">
        Loosely designed in Figma and coded in Visual Studio Code by yours
        truly. Built with Next.js
        <br />
        and Tailwind CSS, deployed with Vercel. All text is set in the Inter
        typeface.
      </p>
    </div>
  );
};

export default Footer;
