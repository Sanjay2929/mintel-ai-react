import React from "react";
import { LinkedIn } from "./common/Icons";

const Compatible = () => {
  return (
    <div className="relative">
      <div className="lg:py-[140px] py-20 container xl:max-w-[1140px] px-4 xl:px-0 mx-auto">
        <h2 className="font-lulo font-bold lg:text-[36px] sm:text-[28px] text-2xl text-white text-center leading-snug">
          COMPATIBLE WITH
        </h2>
        <div className="flex sm:justify-between justify-center items-center max-w-[829px] md:pt-[60px] pt-10 mx-auto sm:gap-10 gap-y-6 flex-wrap">
          <a
            className="flex lg:text-[34px] sm:text-2xl text-xl text-white font-bold gap-1 items-center sm:w-auto w-1/2 justify-center"
            href="/"
          >
            <LinkedIn /> Recruiter
          </a>
          <a
            className="flex lg:text-[34px] sm:text-2xl text-xl text-white font-bold gap-1 items-center sm:w-auto w-1/2 justify-center"
            href="/"
          >
            Linked
            <LinkedIn />
          </a>
          <a
            className="flex lg:text-[34px] sm:text-2xl text-xl text-white font-bold gap-1 items-center sm:w-auto w-1/2 justify-center"
            href="/"
          >
            <LinkedIn /> Sales Navigator
          </a>
        </div>
      </div>
      <span className="w-[192px] h-[192px] bg-green rounded-full blur-[120px] absolute top-1/3 left-0 -translate-x-3/4 z-[1]"></span>
    </div>
  );
};

export default Compatible;
