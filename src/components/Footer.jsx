import React from "react";
import linkedin from "../../src/assets/images/footer/linkedin.png";
import google from "../../src/assets/images/footer/google.png";
import microsoft from "../../src/assets/images/footer/microsoft.png";
import aws from "../../src/assets/images/footer/aws.png";

const Footer = () => {
  return (
    <div className="relative">
      <div className="container xl:max-w-[1140px] px-4 xl:px-0 mx-auto lg:pt-[100px] pt-20 md:pb-[60px] pb-10 flex lg:flex-row flex-col justify-between relative z-10">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="font-lulo font-bold lg:text-[36px] sm:text-[28px] text-2xl text-white leading-snug max-w-[321px] lg:text-start text-center">
            Stay in the Know
          </h2>
          <p className="font-proxima font-semibold text-2xl text-white pt-[32px] pb-4">
            Join the waiting list
          </p>
          <div className="flex border border-white border-opacity-[24%] max-w-[450px] justify-between rounded border-r-0">
            <input
              type="text"
              placeholder="Enter your business email"
              className="bg-transparent font-proxima p-4 sm:w-[300px] block text-white outline-none"
            />
            <button className="py-4 font-proxima px-[29px] text-nowrap sm:w-[150px] my-[-1px] bg-green hover:bg-transparent -me-0.5 hover:border-green border border-transparent duration-300 rounded-lg font-normal text-base text-white relative z-[1]">
              Sign Up
            </button>
          </div>
        </div>
        <div className="lg:pt-0 pt-6 flex flex-col lg:items-start items-center">
          <h3 className="font-proxima font-semibold text-2xl text-white pb-3">
            Follow Us
          </h3>
          <a href="/">
            <img className="w-[80px]" src={linkedin} alt="linkedIn" />
          </a>
          <h3 className="font-proxima font-semibold text-2xl text-white pb-[15px] pt-[32px]">
            Backed by
          </h3>
          <div className="flex gap-4">
            <a
              href="/"
              className="sm:px-4 px-2 py-3  border border-white border-opacity-25 rounded-lg hover:border-green duration-200 flex-wrap"
            >
              <img className="w-[69px]" src={google} alt="google" />
            </a>
            <a
              href="/"
              className="sm:px-4 px-2 py-3  border border-white border-opacity-25 rounded-lg hover:border-green duration-200"
            >
              <img className="w-[99px]" src={microsoft} alt="microsoft" />
            </a>
            <a
              href="/"
              className="sm:px-4 px-2 py-3  border border-white border-opacity-25 rounded-lg hover:border-green duration-200"
            >
              <img className="w-[151px]" src={aws} alt="aws" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white border-opacity-[24%] py-4">
        <p className="text-center font-proxima font-normal sm:text-lg text-base text-white opacity-70">
          © All Rights Reserved 2024 | Mintel AI
        </p>
      </div>
      <span className="w-[192px] h-[192px] bg-green rounded-full blur-[120px] absolute top-1/2 right-0 translate-x-3/4 -translate-y-1/2 z-[1]"></span>
    </div>
  );
};

export default Footer;
