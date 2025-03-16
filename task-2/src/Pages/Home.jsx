import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

import profileImage from "../assets/profileF.png";
import crimsonPlate from "../assets/CrimsonPlate.png";

const Home = () => {
  return (
    <main className="grid grid-cols-12 gap-2 min-h-screen relative w-full pt-50">
      {/* Left vertical line */}
      <div className="absolute left-20 top-0 h-[85vh] w-[3px] bg-[#493b32]">
        <span className="absolute -left-9 top-[92vh] -translate-y-1/2 rotate-[-90deg] text-2xl text-[#493B32] font-tan">
          2025
        </span>
      </div>

      {/* Right vertical line */}
      <div className="absolute right-10 top-0 h-[70vh] w-[3px] bg-[#493b32]">
        {/* Social links */}
        <div className="absolute -right-5 top-[85vh] -translate-y-1/2 flex flex-col items-center justify-evenly gap-7 z-20 text-[#493b32]">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
          >
            <FaLinkedin size={48} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
          >
            <MdEmail size={48}/>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
          >
            <FaGithub size={48} />
          </a>
        </div>
      </div>

      {/* Content container */}
      <section className="col-span-12 col-start-1 grid grid-cols-12 gap-4 items-center">
        {/* Text section */}
        <div className="col-span-11 col-start-1 text-right">
          <h1 className="text-right font-tan">Hi, I'm Negin</h1>
        </div>
        {/* Image section */}

        <div className="relative w-full h-full col-span-10 col-start-2 flex">
          <img
            src={profileImage}
            alt="Negin's Profile Picture"
            className="scale-75 col-span-6 col-start-1 row-span-1 row-start-2 flex translate-y-[-50px] mb-[-142px]"
          />

          <h2 className="text-3xl text-[#493B32] md:text-xl col-start-7 col-span-3 absolute top-0 right-0 text-right font-open">
            A Designer & Developer <br />
            Crafting User-Centric <br />
            Experiences!
          </h2>
          <div className="text-secondary animate-bounce absolute top-60 right-0">
            <IoIosArrowDropdownCircle size={64} color="#5E3F27" />
          </div>
        </div>

        {/* About Section */}
        <section className="grid grid-col-4 col-span-3 lg:grid-cols-12 lg:col-span-12 lg: col-start-1 md:grid-col-6 md:col-span-6  bg-[#493B32] flex items-center justify-center lg: py-12 lg:mx-0">
          {/* Title on the Left */}
          <div className="col-span-2 col-start-2 mt-[-150px] flex items-center">
            <div className="w-[5vh] lg:w-[9vh] h-[2px] bg-[#FFF7F2] "></div>
            <h2 className="text-lg lg:text-5xl font-tan text-[#FFF7F2] mx-2">About</h2>
          </div>

          {/* Description on the Right */}
          <div className="col-lg:col-start-8 lg:col-end-12 text-lg leading-7 text-right md:text-right text-[#FFF7F2] my-[20px]">
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
        <section className="grid grid-cols-12 col-span-12 col-start-1 py-16 px-0 text-[#493B32] relative">
          {/* Title on the Left */}
          <div className="col-span-3 col-start-2 mx-0 flex items-center">
            <div className="w-[9vh] h-[2px] bg-[#493B32]"></div>
            <h2 className="text-5xl font-tan text-[#493B32] text-right">
              Projects
            </h2>
          </div>

          <div className="col-span-4 col-start-2 md:grid-cols-3 gap-4">
            {/* Projects Grid */}
            <div className=" bg-[#FFF7F2] p-6">
              <img
                src={crimsonPlate}
                alt="Crimson Plate Website"
                className="w-full h-auto mb-2 mt-2"
              />
              </div>
              <span className="bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm px-4 py-1 mb-4 w-30 flex justify-start items-start">
                Front-end
              </span>
              <div className="col-start-2 col-span-5 w-full h-[1px] bg-[#493B32]"></div>
              <h3 className="text-2xl font-semibold mt-4 text-left">
                Crimson Plate Website
              </h3>
              <p className="text-md mt-2 text-left col-spans-4 col-start-2">
                The goal was to create a responsive, visually engaging, and
                user-friendly restaurant website that delivers an intuitive,
                interactive digital experience while accurately reflecting the
                restaurant's brand.
              </p>
              <div className="col-start-2 col-span-5 w-full h-[1px] bg-[#493B32] mb-[36px] mt-[36px]"></div>
              <div className="flex gap-2 mt-4">
            
                <span className="border border-[#493B32] px-3 py-1 text-base">
                  HTML
                </span>
                <span className="border border-[#493B32] px-3 py-1 text-base">
                  Tailwind CSS
                </span>
                <span className="border border-[#493B32] px-3 py-1 text-base">
                  JavaScript
                </span>
              </div>
              <div className="col-start-2 col-span-5 w-full h-[1px] bg-[#493B32] mt-[36px]"></div>
            </div>

          <div className="col-span-4 col-start-8 md:grid-cols-3 gap-4">
            {/* Projects Grid */}
            <div className=" bg-[#FFF7F2] p-6">
              <img
                src={crimsonPlate}
                alt="Crimson Plate Website"
                className="w-full h-auto mb-2 mt-2"
              />
              </div>
              <span className="bg-[#5E3F27] text-[#FFF7F2] text-lg font-medium rounded-sm px-4 py-1 mb-4 w-30 flex justify-start items-start">
                Front-end
              </span>
              <div className="col-start-2 col-span-5 w-full h-[1px] bg-[#493B32]"></div>
              <h3 className="text-2xl font-semibold mt-4 text-left">
                Crimson Plate Website
              </h3>
              <p className="text-md mt-2 text-left col-spans-4 col-start-2">
                The goal was to create a responsive, visually engaging, and
                user-friendly restaurant website that delivers an intuitive,
                interactive digital experience while accurately reflecting the
                restaurant's brand.
              </p>
              <div className="col-start-2 col-span-5 w-full h-[1px] bg-[#493B32] mb-[36px] mt-[36px]"></div>
              <div className="flex gap-2 mt-4">
            
                <span className="border border-[#493B32] px-3 py-1 text-base">
                  HTML
                </span>
                <span className="border border-[#493B32] px-3 py-1 text-base">
                  Tailwind CSS
                </span>
                <span className="border border-[#493B32] px-3 py-1 text-base">
                  JavaScript
                </span>
              </div>
              <div className="col-start-2 col-span-5 w-full h-[1px] bg-[#493B32] mt-[36px]"></div>
            </div>
            <div className="col-span-2 col-start-2 md:grid-cols-3 gap-4 py-4 flex items-center gap-2 py-4">
            <IoIosArrowRoundBack size={48} color="#493B32" className="my-4" />
              <p className="font-open font-semibold text-2xl">Projects</p>
            </div>
            <div className="col-span-1 col-start-11 md:grid-cols-3 gap-4 py-4">
            <IoIosArrowDropupCircle size={64} color="#493B32" className="my-8 mb-0 ">
              <a href=""></a>
            </IoIosArrowDropupCircle>
            </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
