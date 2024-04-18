import React from "react";
import { findBuyer } from "./common/Helper";
import { GreenArrow } from "./common/Icons";

const AutoPilot = () => {
  return (
    <div className="px-4">
      <div className="p-1 auto_pilot_bg container xl:max-w-[1340px] mx-auto rounded-[32px] shadow-[0px_0px_57.6px_0px_#0BB89D]">
        <div className="bg-white md:py-20 py-10 xl:px-[100px] mdl:px-14 px-8 rounded-[32px]">
          <div className="max-w-[487px] mx-auto">
            <h2 className="font-lulo font-bold lg:text-[36px] sm:text-[28px] text-2xl  text-black text-center leading-snug">
              Prospecting on auto-pilot
            </h2>
            <p className="font-proxima font-bold lg:text-2xl sm:text-xl text-lg text-black pt-3.5 text-center">
              Find buyers while you sleep
            </p>
          </div>
          <div className="flex lg:justify-between justify-center md:pt-[60px] pt-10 flex-wrap gap-x-[24px] lg:gap-x-0 sm:gap-y-10 gap-y-20 w-full">
            {findBuyer.map((value, index) => {
              return (
                <div
                  data-aos="fade-right"
                  data-aos-delay={`${index}00`}
                  key={index}
                  className="lg:w-[33%] sm:w-[calc(50%-12px)] w-full max-w-[400px] flex flex-col items-center px-4 relative"
                >
                  {value.icon}
                  <p className="text-black font-proxima font-semibold text-center lg:text-2xl sm:text-xl text-lg max-w-[297px] lg:pt-[38px] pt-5 opacity-70">
                    {value.title}
                  </p>
                  {index === findBuyer.length - 1 ? (
                    ""
                  ) : (
                    <span className="absolute sm:top-[55px] -bottom-6 sm:right-0 right-1/2 translate-x-5 sm:translate-y-0 translate-y-full lg:block sm:hidden sm:rotate-0 rotate-90">
                      <GreenArrow />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPilot;
