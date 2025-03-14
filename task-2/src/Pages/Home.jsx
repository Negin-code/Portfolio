import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import profileImage from "../assets/profileF.png";

const Home = () => {
  return (
    <main className="grid grid-cols-12 gap-2 min-h-screen relative w-full pt-25">
      {/* Left vertical line */}
      <div className="absolute left-20 top-0 h-[85vh] w-[3px] bg-[#493b32]">
        <span className="absolute -left-9 top-[90vh] -translate-y-1/2 rotate-[-90deg] text-3xl text-[#493B32] font-serif">
          2025
        </span>
      </div>

      {/* Right vertical line */}
      <div className="absolute right-10 top-0 h-[70vh] w-[3px] bg-[#493b32]">
        {/* Social links */}
        <div className="absolute -right-5 top-[83vh] -translate-y-1/2 flex flex-col items-center gap-6 z-20">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            <FaLinkedin className="text-3xl text-[#493B32] hover:text-white" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="w-10 h-10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            <MdEmail className="text-3xl text-[#493B32] hover:text-white" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            <FaGithub className="text-3xl text-[#493B32] hover:text-white" />
          </a>
        </div>
      </div>

      {/* Content container */}
      <div className="col-span-12 col-start-1 grid grid-cols-12 gap-4 items-center">
        {/* Text section */}
        <div className="col-span-11 col-start-1 text-right">
          <h1 className="text-right">Hi, I'm Negin</h1>
        </div>
        {/* Image section */}

        <div className="relative w-full h-full col-span-10 col-start-2 flex">
          <img
            src={profileImage}
            alt="Negin's Profile Picture"
            className="scale-75 col-span-6 col-start-1 row-span-1 row-start-2 flex translate-y-[-50px] mb-[-142px]"
          />

          <h2 className="text-4xl text-[#493B32] md:text-xl col-start-7 col-span-3 absolute top-0 right-0 text-right">
            A Designer & Developer <br />
            Crafting User-Centric <br />
            Experiences!
          </h2>
          <div className="text-secondary animate-bounce absolute top-60 right-0">
            <IoIosArrowDropdownCircle size={64} color="#5E3F27" />
          </div>
        </div>

        {/* About Section */}
        <section className="grid grid-cols-12 col-span-12 col-start-1 bg-[#493B32] flex items-center justify-center py-12 mx-0">
          {/* Title on the Left */}
          <div className="col-span-2 col-start-2 mt-[-150px] flex items-center">
            <div className="w-[9vh] h-[2px] bg-[#FFF7F2] "></div>
            <h2 className="text-5xl font-serif text-[#FFF7F2] mx-2">About</h2>
          </div>

          {/* Description on the Right */}
          <div className="col-start-8 col-end-12 text-xl leading-relaxed text-right md:text-right text-[#FFF7F2] my-[20px]">
            <br />
            <p>
              I am a passionate UI/UX designer and front-end developer based in
              Vancouver. With a strong background in design thinking and
              user-centered design, I thrive on crafting digital experiences
              that connect with people on a meaningful level. I love blending
              creativity, empathy, and technical skills to build solutions that
              are not only visually appealing but also intuitive and accessible.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="grid grid-cols-12 col-span-12 col-start-1 py-16 px-10 text-[#493B32]">

        </section>
      </div>
    </main>
  );
};

export default Home;
