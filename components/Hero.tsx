import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Left Text Section */}
        <div className="flex-1 flex flex-col items-start justify-center text-left max-w-xl">
          <p className="uppercase tracking-widest text-xs text-blue-100 mb-2">
            Have a look at some of my work, or say hi! 👋
          </p>

          <TextGenerateEffect
            words="Driven by my desire to learn, I use Software Engineering as a tool to solve problems"
            className="text-left text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-left md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Advitya, a Computer Engineering student @ Union
            College.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-end items-start pl-4">
          <img
            src="/heroimage.png"
            alt="Advitya Developer Portrait"
            className="w-[500px] h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
