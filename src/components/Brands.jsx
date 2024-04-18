import React from "react";
import { brands } from "./common/Helper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="px-4">
      <div className="p-1 auto_pilot_bg container xl:max-w-[1340px] mx-auto rounded-[32px] shadow-[0px_0px_57.6px_0px_#0BB89D]">
        <div className="bg-white lg:py-[106px] sm:py-20 py-14  xl:px-[100px] md:px-14 px-8 rounded-[32px]">
          <h2 className="font-lulo font-bold lg:text-[36px] sm:text-[28px] text-2xl  text-black text-center leading-snug">
            Brands That Trust Us
          </h2>
          <Slider {...settings} className="pt-[40px] w-full -mx-3">
            {brands.map((value, index) => {
              return (
                <div className="px-3">
                  <div
                    key={index}
                    className="w-full border border-black border-opacity-20 shadow-[0px_0px_23.3px_0px_#0000001F] hover:border-green h-[167px] !flex justify-center items-center group rounded-md"
                  >
                    <img
                      className="group-hover:scale-105 duration-300 lg:max-w-max max-w-[80px] lg:max-h-max max-h-[60px] "
                      src={value.image}
                      alt={value.title}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Brands;
