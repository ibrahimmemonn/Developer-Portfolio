import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="flex flex-row gap-5">
          <div className="bg-transparent  padding-10 cursor-pointer hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5  border border-[#111] hover:border-transparent ">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
