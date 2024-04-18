import React from "react";
import { MintelLogo } from "./common/Icons";
import hero_gif from "../assets/images/header/hero.gif";

const Header = () => {
  return (
    <div className="min-h-screen relative">
      <div className="container xl:max-w-[1140px] px-4 xl:px-0 mx-auto pt-[31px]">
        <a href="/" className="text-red-500 ">
          <MintelLogo />
        </a>
        <div className="md:pt-[93px] pt-14 max-w-[854px] mx-auto flex flex-col justify-center items-center">
          <h1 className="text-center font-bold lg:text-[64px] md:text-5xl sm:text-4xl text-2xl text-white uppercase font-lulo leading-[120%]">
            Stop searching start closing
          </h1>
          <p className="font-proxima font-bold lg:text-2xl sm:text-xl text-lg text-white text-center py-8">
            Helping salespeople connect to their key decision makers,
            automatically.
          </p>
          <button className="py-4 font-proxima px-[29px] bg-green hover:bg-transparent hover:border-green border border-transparent duration-300 rounded-lg font-normal text-base text-white relative z-[2]">
            Early Access
          </button>
          <div className="md:max-w-[600px] sm:max-w-[400px] max-w-[300px] md:h-[632px] sm:h-[400px] h-[300px] overflow-hidden bg-darkGreen md:-mt-[50px] relative z-0 w-full">
            <img
              className="w-full object-cover object-top mix_blend_luminosity"
              src={hero_gif}
              alt="gif"
            />
          </div>
        </div>
      </div>
      <span className="w-[192px] h-[192px] bg-green rounded-full blur-[120px] absolute top-1/4 right-0 translate-x-3/4 z-[1]"></span>
      <span className="w-[192px] h-[192px] bg-green rounded-full blur-[120px] absolute bottom-1/4 left-0 -translate-x-3/4 z-[1]"></span>
    </div>
  );
};

export default Header;
