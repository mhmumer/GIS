// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md text-black">
      <div className=" mx-auto sm:px-6  py-3 flex justify-between items-center">
        {/* Logo on the Left */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Global Industrial Services Logo"
              className="h-[7rem] w-[10rem]"
            />
          </Link>
        </div>

        {/* Navigation Links in the Center */}
        <div className="flex-1  text-center">
          <div className="sm:hidden ml-40">
            <Sheet>
              <SheetTrigger>
                <IoMenu className="h-8 w-8" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-blue-950 pt-24 text-4xl tracking-wide font-sans leading-relaxed">
                    <Link href="#about">
                      <p
                        className=" font-semibold 
                 cursor-pointer transition-all duration-700 active:underline active:underline-offset-2"
                      >
                        About Us
                      </p>
                    </Link>
                    <Link href="#about-us">
                      <p
                        className=" font-semibold 
                 cursor-pointer transition-all duration-700 active:underline active:underline-offset-2"
                      >
                        Supplies
                      </p>
                    </Link>
                    <Link href="#about-us">
                      <p
                        className=" font-semibold 
                 cursor-pointer transition-all duration-700 active:underline active:underline-offset-2"
                      >
                        Reviews
                      </p>
                    </Link>
                    <Link href="#about-us">
                      <p
                        className=" font-semibold 
                 cursor-pointer transition-all duration-700 active:underline active:underline-offset-2"
                      >
                        Contact
                      </p>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <ul className="pr-16 justify-center space-x-10 text-lg font-sans hidden sm:flex">
            <li>
              <Link href="#about">
                <p
                  className="hover:text-[#003385] font-semibold 
                 cursor-pointer transition-all duration-700 active:underline active:underline-offset-2"
                >
                  About Us
                </p>
              </Link>
            </li>
            <li>
              <Link href="#supplies">
                <p
                  className="hover:text-[#003385] font-semibold 
                 cursor-pointer transition-all duration-700 active:underline active:underline-offset-2"
                >
                  Supplies
                </p>
              </Link>
            </li>
            <li>
              <Link href="#reviews">
                <p
                  className="hover:text-[#003385] font-semibold 
                 cursor-pointer transition-all duration-700 active:underline active:underline-offset-2"
                >
                  Reviews
                </p>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <p
                  className="hover:text-[#003385] font-semibold 
                 cursor-pointer transition-all duration-700 active:underline active:underline-offset-2"
                >
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons on the Right */}
        <div className=" items-center space-x-4 hidden sm:flex">
          <a
            href="https://www.facebook.com" // Replace with actual Facebook URL
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-[#003380] transition-all duration-700"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com" // Replace with actual Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-[#003380] transition-all duration-700"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
