import React from "react";
import { salesSuffer } from "./common/Helper";

const SalesPersonSuffer = () => {
  return (
    <div className="relative">
      <div className="pt-[82px] container xl:max-w-[1140px] px-4 xl:px-0 mx-auto lg:pb-[120px] pb-20 relative z-10">
        <h2 className="font-lulo font-bold lg:text-[36px] sm:text-[28px] text-2xl text-white text-center leading-snug">
          Did you know?
        </h2>
        <p className="font-proxima font-bold lg:text-2xl sm:text-xl text-lg text-white pt-3.5 text-center">
          Salespeople suffer, instead of selling
        </p>
        <div className="flex sm:justify-between justify-center md:pt-[60px] pt-10 lg:items-center flex-wrap gap-y-[25px]">
          {salesSuffer.map((value, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index}00`}
                className="lg:w-[calc(33%-16px)] sm:w-[calc(50%-12px)] w-full   max-w-[400px] flex flex-col items-center border border-green border-opacity-20 rounded-xl py-[32px] px-4 hover:bg-lightGreen duration-300 shadow-[0px_0px_22.9px_0px_#0BB89D1F] cards_sales group"
              >
                <span className="p-4 bg-green bg-opacity-10 rounded-full">
                  {value.icon}
                </span>
                <p className="text-white font-proxima font-semibold text-center text-2xl max-w-[262px] pt-7">
                  {value.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <span className="w-[192px] h-[192px] bg-green rounded-full blur-[120px] absolute top-1/2 right-0 translate-x-3/4 z-[1]"></span>
    </div>
  );
};

export default SalesPersonSuffer;
