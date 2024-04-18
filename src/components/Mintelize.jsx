import React from "react";
import { Clock, TimeInHand } from "./common/Icons";
import { MinelizeCards } from "./common/Helper";

const Mintelize = () => {
  return (
    <div className="relative">
      <div className="container xl:max-w-[1140px] px-4 xl:px-0 mx-auto relative z-10">
        <h2 className="font-lulo font-bold lg:text-[36px] sm:text-[28px] text-2xl text-white text-center leading-snug">
          Mintelize It
        </h2>
        <div className="md:pt-[60px] pt-10 flex justify-between gap-6 flex-wrap xl:flex-nowrap">
          <div
            data-aos="fade-up"
            className="xl:w-[calc(25%-18px] sm:w-[calc(50%-12px)] w-full px-5  flex flex-col items-center border border-green border-opacity-20 rounded-xl py-[32px] hover:bg-lightGreen duration-300 shadow-[0px_0px_22.9px_0px_#0BB89D1F] cards_sales group hover:border-opacity-100 relative after:absolute after:bottom-0 after:left-0 hover:after:h-1.5 after:h-0 after:duration-300  after:w-full after:bg-green overflow-hidden group"
          >
            <span className="w-[70px] h-[70px] flex justify-center items-center bg-green bg-opacity-10 rounded-full">
              <TimeInHand />
            </span>
            <h3 className="text-white font-proxima font-semibold text-center text-[26px] pb-3.5 max-w-[262px] pt-6">
              Save Time on Prospecting
            </h3>
            <div className="flex items-center gap-[22px] justify-center border border-white border-opacity-[32%] w-full rounded-xl max-w-[209px] mx-auto py-[17.5px]">
              <Clock />{" "}
              <div className="h-[50px] overflow-y-scroll timer_scrollbar">
                <p className="font-proxima font-semibold text-white text-[32px]">
                  100 h
                </p>
                <p className="font-proxima font-semibold text-white text-[32px]">
                  60 h
                </p>
                <p className="font-proxima font-semibold text-white text-[32px]">
                  30 h
                </p>
              </div>
            </div>
          </div>
          {MinelizeCards.map((value, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${index + 1}00`}
                key={index}
                className="xl:w-[calc(25%-18px] sm:w-[calc(50%-12px)] w-full px-5 flex flex-col items-center border border-green border-opacity-20 rounded-xl py-[32px] hover:bg-lightGreen duration-300 shadow-[0px_0px_22.9px_0px_#0BB89D1F] cards_sales group hover:border-opacity-100 relative after:absolute after:bottom-0 after:left-0 hover:after:h-1.5 after:h-0 after:duration-300 after:w-full after:bg-green overflow-hidden group"
              >
                <span className="w-[70px] h-[70px] flex justify-center items-center bg-green bg-opacity-10 rounded-full">
                  {value.icon}
                </span>
                <h3 className="text-white font-proxima font-semibold text-center text-[26px] pb-3.5 max-w-[262px] pt-6">
                  {value.title}
                </h3>
                <p className="font-proxima font-normal text-2xl  text-lightGray text-center">
                  {value.description}
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

export default Mintelize;
