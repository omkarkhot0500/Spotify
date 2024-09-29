import React from "react";
import { assets } from "../assets/assets"; // Assuming you have an image in assets
import { useNavigate } from "react-router-dom";
import image from "./op.png"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl"
            src={assets.arrow_left}
            alt="Back"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl"
            src={assets.arrow_right}
            alt="Forward"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>

          {/* GitHub Profile Image */}
          <a
            href="https://github.com/omkarkhot0500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image}
              alt="GitHub Profile"
              className="w-7 h-7 rounded-full"
            />
          </a>
        </div>
      </div>

      <div className="flex items-center g-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
