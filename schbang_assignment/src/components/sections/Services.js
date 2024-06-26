import Image from "next/image";
import React from "react";
import guide from "./../../../public/guide.png";
import easybooking from "./../../../public/easybooking.png";
import FramerMagnetic from './../sections/util/FramerMagnetic';

const Services = () => {
  return (
    <div className="flex flex-col sm:flex-row  w-auto  mt-12 mx-auto gap-5 overflow-hidden">
      <div className="flex flex-col w-72 h-72 md:w-96 md:h-96 bg-white justify-center m-auto gap-4 rounded-3xl  px-8 hover:scale-105 hover:bg-red-100">
        <span className="uppercase text-[#F85E9F]">Services</span>
        <span className="text-4xl font-semibold">
          Our top value <br /> categories for you
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 m-4">
        <div className=" w-72 h-72 md:w-96 md:h-96 flex flex-col text-center  p-10 md:p-16 w-[350px] h-[400px] m-auto  bg-white rounded-3xl hover:scale-105 hover:bg-red-100">
          <FramerMagnetic>
            <div className="w-full h-2/6">
              <Image className="mx-auto" src={guide} alt="" />
            </div>
          </FramerMagnetic>
          <h2 className="h-2/6 font-semibold text-2xl p-3 ">Best Tour Guide</h2>
          <span className=" h-2/6">
            What looked like a small patch of purple grass, above five feet.
          </span>
        </div>
        <div className=" w-72 h-72 md:w-96 md:h-96 flex flex-col text-center  p-10 md:p-16 w-[350px] h-[400px] m-auto md:h-full bg-white rounded-3xl hover:scale-105 hover:bg-red-100">
          <FramerMagnetic>
            <div className="w-full h-2/6">
              <Image className="mx-auto" src={easybooking} alt="" />
            </div>
          </FramerMagnetic>
          <h2 className="h-2/6 font-semibold text-2xl p-3">Easy Booking</h2>
          <span className=" h-2/6">
            Square, was moving across the sand in their direction.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
