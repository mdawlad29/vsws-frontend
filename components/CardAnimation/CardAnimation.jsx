import Image from 'next/image';
import React from 'react'

const CardAnimation = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
      {/* Zoom card */}
      <div class="relative bg-red-300 px-6 py-4 w-[400px] group">
        <Image
          class="object-cover w-full h-auto transition-transform duration-1000 ease-in-out transform group-hover:scale-105 "
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="Image"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default CardAnimation