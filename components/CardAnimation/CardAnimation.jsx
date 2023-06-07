import Image from "next/image";
import React from "react";

const CardAnimation = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mx-16">
        {/* Zoom card */}
        <div class="rounded-md shadow-md relative bg-white px-4 py-2 border border-red-600 group">
          <div className="p-4 rounded-md w-64 h-64">
            <Image
              class="object-cover rounded-md w-full h-full transition-transform duration-1000 ease-in-out transform group-hover:scale-105"
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="Image"
              width={200}
              height={200}
            />
          </div>
          <div className="space-y-2 my-2">
            <h2 className="text-xl text-purple-700 font-semibold">
              Image Zoom Effect
            </h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              distinctio!
            </p>
          </div>
        </div>
        {/* Card hover to other card show */}
        {/* <div class="relative border border-red-600">
        <Image
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
          width={200}
          height={200}
          class="w-full mx-auto"
        />
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center flex-col opacity-0 transition duration-1000 ease-in-out hover:opacity-100">
          <h1 class="text-4xl text-yellow-300 ">image hover effect</h1>
          <p class="text-lg text-white">Lorem ipsum dolor sit.</p>
        </div>
      </div> */}
        {/* Card hover to background disable */}
        <div className="bg-gray-400 shadow-md rounded-md border border-red-600">
          <div className="">
            <div className="relative max-w-lg	">
              <Image
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt=""
                width={200}
                height={200}
                className="w-full flex m-auto"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-gray-900 flex items-center justify-center opacity-0 flex-col	duration-700 hover:opacity-80 transform translate-y-6 transition-transform hover:translate-y-0">
                <h1 className="text-xl text-yellow-400 mb-10">
                  image hover effect
                </h1>
                <p className="text-base text-white">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div className="py-3">Lorem ipsum dolor sit.</div>
        </div>
      </div>
      {/* <div class="relative border border-red-600">
        <Image
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
          width={200}
          height={200}
          class="w-full mx-auto"
        />
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center flex-col opacity-0 transition duration-1000 ease-in-out hover:opacity-100">
          <h1 class="text-4xl text-yellow-300 ">image hover effect</h1>
          <p class="text-lg text-white">Lorem ipsum dolor sit.</p>
        </div>
      </div> */}
    </>
  );
};

export default CardAnimation;
{
  /* <div className="card">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            className="card-img"
            alt=""
          />
        </div> */
}
