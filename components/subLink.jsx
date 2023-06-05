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
const SubLink = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <div>
      {" "}
      <h1
        className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
        // onClick={() => {
        //   heading !== link.name ? setHeading(link.name) : setHeading("");
        //   setSubHeading("");
        // }}
      >
        open
        {/* <span className="text-xl md:hidden inline">
          {heading ? <MdArrowDropUp /> : <MdArrowDropDown />}
        </span> */}
        <span className="text-xl md:ml-2 md:block hidden group-hover:rotate-180">
          <MdArrowDropDown />
        </span>
      </h1>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            {link.submenu && (
              <dv>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-6">
                    <div className="w-4 h-4 left-3 absolute mt-4 bg-gray-400 rotate-45"></div>
                  </div>
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
                {/*--------- Mobile menus ---------*/}
                <div
                  className={`
                ${heading === link.name ? "md:hidden" : "hidden"}
                `}
                >
                  {/* subLinks */}
                  {link.subLink?.map((slink, i) => (
                    <div key={i}>
                      <div>
                        <h1
                          onClick={() =>
                            subHeading !== slink.Head
                              ? setSubHeading(slink.Head)
                              : setSubHeading("")
                          }
                          className="py-4 pl-7 font-semibold md:pr-0 -pr-5 flex justify-between items-center"
                        >
                          {slink.Head}
                          <span className="text-xl md:mt-1 md:ml-2 inline">
                            {subHeading === slink?.Head ? (
                              <MdArrowDropUp />
                            ) : (
                              <MdArrowDropDown />
                            )}
                          </span>
                        </h1>
                        <div
                          className={`${
                            subHeading === slink?.Head ? "md:hidden" : "hidden"
                          }`}
                        >
                          {slink.mySubLink?.map((slink, i) => (
                            <li key={i} className="py-3 pl-14">
                              <Link
                                href={slink.link}
                                className="hover:text-red-500"
                              >
                                {slink?.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </dv>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubLink;
