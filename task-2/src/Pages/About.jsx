import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import NeginImage1 from "../assets/malahat.png";
import NeginImage2 from "../assets/merchies.png";
import NeginImage3 from "../assets/malahat.png";
import NeginImage4 from "../assets/malahat.png";
import NeginImage5 from "../assets/malahat.png";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    { src: NeginImage1, alt: "Negin 1" },
    { src: NeginImage2, alt: "Negin 2" },
    { src: NeginImage3, alt: "Negin 3" },
    { src: NeginImage4, alt: "Negin 4" },
    { src: NeginImage5, alt: "Negin 5" },
  ];

  return (
    <main className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 min-h-screen bg-[#FFF7F2] pt-20 lg:pt-40 px-4 md:px-8 lg:px-16 relative">
      {/* Left vertical line */}
      <div className="absolute left-17 md:left-20 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Right border line */}
      <div className="absolute right-10 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Main content grid */}
      <section className="col-span-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
        {/* Profile Image Gallery */}
        <div className="col-span-3 col-start-1 md:col-span-3 md:col-start-3 lg:col-span-3 lg:col-start-3 overflow-visible h-[500px] relative">
          <PhotoProvider>
            {images.map((image, index) => (
              <div 
                key={index}
                className={`absolute transition-all duration-500 ease-in-out cursor-pointer overflow-hidden shadow-lg
                  ${index === activeIndex ? 'z-10 scale-100 rotate-0 opacity-100' : 
                    index < activeIndex ? `z-${5-Math.abs(activeIndex-index)} scale-${90-Math.abs(activeIndex-index)*5} -rotate-${Math.abs(activeIndex-index)*8} opacity-${80-Math.abs(activeIndex-index)*15} -translate-y-${Math.abs(activeIndex-index)*10}` : 
                    `z-${5-Math.abs(activeIndex-index)} scale-${90-Math.abs(activeIndex-index)*5} rotate-${Math.abs(activeIndex-index)*8} opacity-${80-Math.abs(activeIndex-index)*15} translate-y-${Math.abs(activeIndex-index)*10}`
                  }`}
                onClick={() => setActiveIndex(index)}
                style={{
                  transform: `
                    scale(${index === activeIndex ? 1 : 0.9 - Math.abs(activeIndex-index) * 0.05})
                    rotate(${index === activeIndex ? 0 : (index < activeIndex ? -1 : 1) * Math.abs(activeIndex-index) * 8}deg)
                    translateY(${index === activeIndex ? 0 : (index < activeIndex ? -1 : 1) * Math.abs(activeIndex-index) * 10}px)
                  `,
                  opacity: index === activeIndex ? 1 : 0.8 - Math.abs(activeIndex-index) * 0.15,
                  zIndex: index === activeIndex ? 10 : 5 - Math.abs(activeIndex-index)
                }}
              >
                <PhotoView src={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full md:w-[400px] lg:w-full h-auto object-cover block"
                  />
                </PhotoView>
              </div>
            ))}
          </PhotoProvider>
          
          {/* Image navigation dots */}
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#493B32] scale-125' : 'bg-[#493B32] opacity-50'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* About Text Content */}
        <div className="col-span-4 col-start-2 md:col-span-3 md:col-start-2 lg:col-span-3 lg:col-start-9 flex flex-col gap-4 md:gap-6 translate-x-[-50px] px-10 lg:px-0 lg:translate-x-0">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-tan text-[#493B32] pb-2 w-full">
            About me
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#493B32]">
            Hello!
          </h2>

          <p className="text-[#493B32] leading-relaxed text-sm md:text-base">
            My journey into programming began during my Bachelor's in Software
            Engineering, where I discovered the power of code to bring
            innovative concepts to life. Now, I'm sharpening my design and
            development skills through a New Media Design program —bridging
            creativity with technology to craft solutions that truly connect
            with people.
          </p>

          <p className="text-[#493B32] leading-relaxed w-full text-sm md:text-base">
            I love problem-solving and bridging design with development. From
            ideating UX flows in Figma to implementing them with HTML, CSS,
            JavaScript, and modern frameworks, I'm passionate about building
            experiences that look beautiful and work seamlessly. This blend of
            creative and technical skills has become my specialty in crafting
            impactful solutions throughout my studies and collaborations.
          </p>
        </div>

        {/* Full width paragraph */}
        <div className="col-span-4 col-start-2 md:col-span-4 md:col-start-2 lg:col-span-10 lg:col-start-2 flex flex-col gap-6 px-10 translate-x-[-50px] lg:px-0 lg:translate-x-0">
          <p className="text-[#493B32] leading-relaxed text-sm md:text-base">
            I love reading books because it fuels my curiosity and broadens my
            perspective, often sparking fresh ideas in unexpected ways. It
            fosters my ongoing commitment to stay curious and seek fresh
            insights, helping me grow both personally and professionally. In the
            same spirit, spending time with friends—both old and new—keeps me
            open to different viewpoints and encourages me to stay curious about
            the world around me.
          </p>

          <div className="w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
            <Link
              to="/resume"
              className="col-start-1 col-span-2 md:col-start-4 md:col-span-2 lg:col-start-8 lg:col-span-3 flex items-center justify-center md:justify-end gap-2 text-[#493B32] font-semibold text-lg md:text-xl mt-4 hover:underline"
            >
              Resume <IoArrowForward size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="col-span-4 col-start-2 md:col-span-4 md:col-start-2 lg:col-span-10 lg:col-start-2 mt-16 md:mt-24 translate-x-[-50px] px-10 lg:px-0 lg:translate-x-0">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-tan text-[#493B32] flex items-center gap-4 mb-8 md:mb-12">
          <span className="w-8 md:w-12 h-[2px] bg-[#493B32]"></span>
          My Core Values
        </h2>

        <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Row 1: Empty Right Column */}
          <div className="hidden md:block"></div>
          {/* Row 1: Left Column (Empathy), Right Column (Empty) */}
          <div className="md:col-span-1">
            <h3 className="text-lg md:text-2xl font-tan text-[#493B32] flex items-center gap-4 mb-3 md:mb-4">
              <span className="w-6 md:w-8 h-[2px] bg-[#493B32]"></span>
              Empathy
            </h3>
            <p className="text-[#493B32] leading-relaxed text-sm md:text-base">
              I start every project by listening—carefully understanding the
              needs, emotions, and behaviors of the people I'm designing for.
              This user-first mindset underpins all of my work and ensures
              inclusivity, accessibility, and meaningful interactions.
            </p>
          </div>

          {/* Row 2: Right Column (Continuous Learning) */}
          <div className="md:col-span-1">
            <h3 className="text-sm md:text-2xl font-tan text-[#493B32] flex items-center gap-4 mb-3 md:mb-4">
              <span className="w-6 md:w-8 h-[2px] bg-[#493B32]"></span>
              Continuous Learning
            </h3>
            <p className="text-[#493B32] leading-relaxed text-sm md:text-base">
              The tech and design landscapes are always shifting. That's why I
              thrive on exploring the latest tools, methodologies, and
              frameworks to push creative boundaries. By staying curious, I
              remain ready to innovate and evolve my craft.
            </p>
          </div>

          {/* Row 2: Empty Left Column */}
          <div className="hidden md:block"></div>

          {/* Row 3: Empty Right Column */}
          <div className="hidden md:block"></div>

          {/* Row 3: Left Column (Collaboration & Adaptability) */}
          <div className="md:col-span-1">
            <h3 className="text-sm md:text-2xl font-tan text-[#493B32] flex items-center gap-4 mb-3 md:mb-4">
              <span className="w-6 md:w-8 h-[2px] bg-[#493B32]"></span>
              Collaboration & Adaptability
            </h3>
            <p className="text-[#493B32] leading-relaxed text-sm md:text-base">
              Great solutions emerge when diverse perspectives meet. I value an
              environment of open communication, constructive feedback, and
              continuous iteration. I embrace new challenges and pivot swiftly
              when needed, keeping the project's goals and the user's needs at
              the forefront.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Projects Link */}
      <div className="col-span-8 md:col-span-10 lg:col-start-2 col-start-1 flex justify-between items-center mt-8">
        <div className="flex items-center gap-2 mx-20 lg:mx-10 lg:my-20 lg:mb-20">
          <IoIosArrowRoundBack size={48} color="#493B32" className="my-4" />
          <p className="font-open font-semibold text-xl lg:text-2xl text-[#493B32]">Projects</p>
        </div>
        <div>
          <IoIosArrowDropupCircle
            size={48}
            color="#493B32"
            className="mx-20 my-10 mb-10 lg:mx-10 lg:my-20 lg:mb-20"
          >
            <a href=""></a>
          </IoIosArrowDropupCircle>
        </div>
      </div>
    </main>
  );
};

export default About;
