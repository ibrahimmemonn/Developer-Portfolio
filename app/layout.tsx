import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ibiimemon.com/"),
  title: "Ibrahim Memon - SWE | IXD | UX",
  description:
    "Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Ibrahim Memon",
    "Next.js",
    "React",
    "ReactNative",
    "Android",
  ],
  openGraph: {
    title: "Ibrahim Memon - SWE | IXD | UX",
    description:
      "Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://ibiimemon.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
