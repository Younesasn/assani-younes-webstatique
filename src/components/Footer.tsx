import { Facebook, Instagram, Send } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const Footer = () => {
  return (
    <footer className="px-4 py-15 md:px-20 bg-teal-600 text-white flex flex-col gap-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
        <div className="space-y-8">
          <p className="w-[400px]">
            Travaillez plus intelligemment, collaborez plus efficacement.
            Essayez WorkSphere maintenant !
          </p>
          <Button href="/" text="Démarrer" />
        </div>
        <div className="flex justify-between gap-30">
          <div className="space-y-10">
            <h2 className={`${poppins.variable} text-teal-500 text-xs`}>Pages</h2>
            <ul>
              <li>
                <Link href={"/"} className="hover:underline transition-all active:text-teal-700">HOME</Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline transition-all active:text-teal-700">ABOUT</Link>
              </li>
              <li>
                <Link href={"/tarifs"} className="hover:underline transition-all active:text-teal-700">SERVICES</Link>
              </li>
              <li>
                <Link href={"/"} className="hover:underline transition-all active:text-teal-700">COMMUNITY</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-10">
            <h2 className={`${poppins.variable} text-teal-500 text-xs`}>Contacts</h2>
            <ul>
              <li>hello@logoipsum.com</li>
              <li className="w-40">190 Lorem Ipsum, Lyon 69000</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="">© 2023 -- Copyright</div>
        <div className="flex gap-4">
          <Facebook />
          <Instagram />
          <Send />
        </div>
      </div>
    </footer>
  );
};
