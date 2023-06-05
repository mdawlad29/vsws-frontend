"use client";
import Link from "next/link";
import { useState } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const links = [
  {
    name: "Men",
    sub_name: "sub-men",
    link: "https://www.awlad.xyz/",
    submenu: true,
    subLink: [
      {
        Head: "Topwear",
        mySubLink: [
          { name: "T-shirt", link: "https://www.awlad.xyz/" },
          { name: "Causal shirts", link: "/" },
          { name: "Formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottowear",
        mySubLink: [
          { name: "T-shirt", link: "/" },
          { name: "Causal shirts", link: "/" },
          { name: "Formal shirts", link: "/" },
        ],
      },
      {
        Head: "Innerwear",
        mySubLink: [
          { name: "T-shirt", link: "/" },
          { name: "Causal shirts", link: "/" },
          { name: "Formal shirts", link: "/" },
        ],
      },
      {
        Head: "Footwear",
        mySubLink: [
          { name: "T-shirt", link: "/" },
          { name: "Causal shirts", link: "/" },
          { name: "Formal shirts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Women",
    sub_name: "sub-women",
    link: "https://marhaba.com.bd/",
    submenu: true,
  },
  {
    name: "Kid's",
    sub_name: "sub-kids",
    link: "https://awlad.xyz/",
    submenu: true,
    subLink: [
      {
        Head: "a",
        mySubLink: [
          { name: "T-shirt", link: "/" },
          { name: "Causal shirts", link: "/" },
          { name: "Formal shirts", link: "/" },
        ],
      },
      {
        Head: "b",
        mySubLink: [
          { name: "T-shirt", link: "/" },
          { name: "Causal shirts", link: "/" },
          { name: "Formal shirts", link: "/" },
        ],
      },
      {
        Head: "c",
        mySubLink: [
          { name: "T-shirt", link: "/" },
          { name: "Causal shirts", link: "/" },
          { name: "Formal shirts", link: "/" },
        ],
      },
      {
        Head: "d",
        mySubLink: [
          { name: "T-shirt", link: "/" },
          { name: "Causal shirts", link: "/" },
          { name: "Formal shirts", link: "/" },
        ],
      },
    ],
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h2>This is Home Page</h2>
      <div className="">
        <button
          onMouseMove={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="px-6 py-2 bg-sky-500 border border-gray-500 inline-flex items-center"
        >
          open
          {open ? <MdArrowDropUp className="" /> : <MdArrowDropDown />}
        </button>
        {links.map((link, index) => (
          <div key={index}>
            <div className="px-3 text-left md:cursor-pointer group ">
              {open && (
                <h1
                  onMouseMove={() => setOpen(true)}
                  className="py-7 md:pr-0 pr-5 bg-red-400 w-60 "
                >
                  <Link href="">{link.name}</Link>
                  <Link href={link?.link} target="_blank">
                    {link?.sub_name}
                  </Link>
                </h1>
              )}
              {link.submenu && (
                <dv>
                  <div className="absolute top-40 left-60 hidden group-hover:md:block hover:md:block">
                    <div className="bg-gray-400 p-5 grid grid-cols-3 gap-10">
                      {link.subLink?.map((mysublink, index) => (
                        <div key={index}>
                          <h1 className="text-lg font-semibold">
                            {mysublink.Head}
                          </h1>
                          {mysublink.mySubLink?.map((slink, index) => (
                            <li
                              key={index}
                              className="text-sm text-red-400 my-2.5"
                            >
                              <Link
                                href={slink.link}
                                className="hover:text-red-600"
                              >
                                {slink?.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </dv>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
