import React from "react";
import { OneClickInstall } from "./common/Helper";

const OneClick = () => {
  return (
    <div className="lg:py-[140px] py-20 container xl:max-w-[1140px] px-4 xl:px-0 mx-auto">
      <h2 className="font-lulo font-bold lg:text-[36px] sm:text-[28px] text-2xl text-white text-center leading-snug max-w-[706px] mx-auto">
        One-click install on any crm & sep
      </h2>
      <div className="flex xl:justify-between justify-center items-center md:pt-[60px] pt-10 gap-5 mx-auto flex-wrap pb-11 xl:max-w-[1140px] max-w-[800px]">
        {OneClickInstall.map((value, index) => {
          return (
            <a
              data-aos="zoom-in"
              data-aos-delay={`${index}00`}
              key={index}
              className="flex md:text-xl text-base text-white font-bold gap-1 items-center sm:w-[170px] w-[140px] sm:h-20 h-16 justify-center border border-green border-opacity-20 rounded-full bg-darkGray shadow-[0px_0px_30px_0px_#0BB89D4D] hover:bg-opacity-50 duration-300"
              href="/"
            >
              <img src={value.icon} alt={value.title} /> {value.title}
            </a>
          );
        })}
      </div>
      <p className="font-proxima font-bold text-2xl text-white text-center">
        +25 other GTM systems
      </p>
    </div>
  );
};

export default OneClick;
