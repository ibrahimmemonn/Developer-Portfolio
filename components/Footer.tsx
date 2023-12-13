import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <div className="pb-10 justify-center flex ">
        <Image
          src="/Github.svg"
          height={30}
          width={30}
          className="mx-5"
          alt="Picture of the author"
        />
        <Image
          src="/Instagram.svg"
          height={30}
          width={30}
          className="mx-5"
          alt="Picture of the author"
        />
        <Image
          src="/LinkedIn.svg"
          height={30}
          width={30}
          className="mx-5"
          alt="Picture of the author"
        />
        <Image
          src="/Twitter.svg"
          height={30}
          width={30}
          className="mx-5"
          alt="Picture of the author"
        />
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
