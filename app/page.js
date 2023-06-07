"use client";
import CardAnimation from "@/components/CardAnimation/CardAnimation";
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
      <CardAnimation />

      {/* 
.wrapper{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image{
  width: 500px;
  position: relative;
}
img{
  width: 100%;
  display: flex;
  margin: auto;
}
.content{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: 0.6s;
}

.content:hover{
  opacity: 1;
}
.content h1{
  font-size: 45px;
  color: #ffe100;
  margin-bottom: 15px;
}
.content p{
  font-size: 19px;
  color: #fff;
}

.content>*{
  transform: translateY(25px);
  transition: transform 0.6s;
}
.content:hover>*{
  transform: translateY(0px);
}
 */}
      {/* <div class="flex justify-center items-center h-screen">
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
      </div> */}
    </>
  );
}
