"use client";
import Image from "next/image";
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
      {/* -----------Card animation ------------*/}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-400 shadow-md rounded-md">
          <div className="">
            <div className="relative max-w-lg	">
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt=""
                className="w-full flex m-auto"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-gray-900 flex items-center justify-center opacity-0 flex-col	duration-700 hover:opacity-80 ">
                <h1 className="text-xl text-yellow-400 mb-10">
                  image hover effect
                </h1>
                <p className="text-base text-white">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div className="py-3">Lorem ipsum dolor sit.</div>
        </div>
        <div class="flex justify-center items-center h-screen">
          <div class="relative w-500">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt=""
              class="w-full mx-auto"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center flex-col opacity-0 transition duration-1000 ease-in-out hover:opacity-100">
              <h1 class="text-4xl text-yellow-300 ">image hover effect</h1>
              <p class="text-lg text-white">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        {/* <div className="card">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            className="card-img"
            alt=""
          />
        </div> */}
      </div>
      {/* <div className="w-full h-full bg-cyan-100 rounded-10 outline-solid outline-1 outline-white bg-opacity-5 shadow-md relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700"
          alt=""
        />
      </div> */}
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
          <img
            class="object-cover w-full h-64"
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="Image"
          />
          <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div class="opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
              <img
                class="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="Image"
              />
            </div>
          </div>
        </div>
        <div class="px-4 py-2">
          <h3 class="text-xl font-semibold text-gray-800">Card Title</h3>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
     
    </>
  );
}
