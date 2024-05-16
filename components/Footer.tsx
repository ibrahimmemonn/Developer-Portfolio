"use client";
import React, { useEffect } from "react";
import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC<{}> = () => {
  useEffect(() => {
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = process.env.NEXT_PUBLIC_TAWK_TO_ID ?? "";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, []);

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
                alt={social.alt}
                sizes="100vw"
                className="mx-5"
              />
            </Link>
          );
        })}
      </div>
      <p className="text-gray-300 text-center text-sm">
        Created with ❤️ using Next.js
      </p>
    </div>
  );
};

export default Footer;
