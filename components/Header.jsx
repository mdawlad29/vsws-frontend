"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import mainLogo from "../public/assets/images/vsws_logo.jpg";
import NavLinks from "./NavLinks";
import Button from "./shared/Button";
import { GrMenu, GrClose } from "react-icons/gr";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h2>Veduria Union Social Welfare Organization</h2>
      <nav className="bg-gray-400">
        <div className="flex items-center font-medium justify-around">
          {/*------ Logo ------*/}
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <Image
              width={50}
              height={50}
              objectFit="cover"
              className="md:cursor-pointer"
              src={mainLogo}
              alt="logo"
            />
            <div
              className={`text-3xl md:hidden`}
              onClick={() => setOpen(!open)}
            >
              {open ? <GrClose /> : <GrMenu />}
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8">
            <li>
              <Link href={"/"} className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <Button />
          </div>
          {/* Mobile nav */}
          <ul
            className={`
    md:hidden bg-white absolute w-full md:w-80 top-0 left-0 py-24 pl-4 duration-700 ${
      open ? "translate-x-0" : "-translate-x-full"
    }
`}
          >
            <li>
              <Link href={"/"} className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <div className="py-5">
              <Button />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
