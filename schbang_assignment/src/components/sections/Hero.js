'use client';
import useMousePosition from './util/useMousePosition';
import Image from "next/image";
import styles from './hero.module.scss';
import React, { useEffect, useState } from "react";
import explore from "./../../../public/explore.png";
import demo from "./../../../public/demo.png";
import mask from "./../../../public/mask.svg";
import backgroundimg from "./../../../public/backgroundimg.png";
import rect1 from "./../../../public/rectangle1.png";
import rect2 from "./../../../public/rectangle2.png";
import rect3 from "./../../../public/rectangle3.png";
import heroimg from "./../../../public/heroimg.png";
import { Borel } from "next/font/google";
import {motion} from 'framer-motion';
import MaskedComponent from './util/MaskedComponent';

const Hero = () => {
  const [isHovered, setisHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 260 : 0;
  
  useEffect(() => {
    console.log('Mouse position:', x, y, isHovered, size);
}, [x, y]);
  return (
    <motion.div animate={{
      WebkitMaskPosition: `${x-size}px ${y-size}px`,
      webKitMaskSize: `${size}px`,
    }} className={`max-w-[1199px]  m-10 md:mt-28  mx-auto  ${styles.main}`}>
      <div className="md:flex-row md:items-center gap-6  md:gap-20 flex flex-col items-center">
        {/* Left */}

        <div className="w-[100vw] md:w-[427px] h-[548px] px-8 relative">
          <div className="flex flex-col">
            <button className="bg-red-100 w-fit flex py-3 px-10 rounded-full text-center gap-2 hover:bg-red-200 hover:scale-105">
              <span className="text-[#F85E9F]  h-[17px]">
                Explore the world
              </span>
              <Image src={explore} alt="explore.png" />
            </button>
            <motion.h1
              onMouseEnter={()=> {setisHovered(true)}}
              onMouseLeave={()=> {setisHovered(false)}}
              animate={{
                // mask: isHovered ? 'none' 
                WebkitMaskPosition: `${x-size}px ${y-size - 60}px`,
                webKitMaskSize: `${size}px`
              }}
              transition={{
                type: 'spring',
                duration: `${isHovered ? 0.2 : 3}`,
                ease: 'easeInOut',
              }}

              className={`continersss w-full text-5xl sm:text-6xl font-semibold my-8 leading-snug ${styles.mask} test-one`}>
              Travel <span className="text-[#F85E9F]">top destinations </span>
              of the world
            </motion.h1>
            <h1
              className={`continersss w-full text-5xl sm:text-6xl font-semibold my-8 leading-snug ${styles.body} test-two`}>
              Travel <span className="text-[#F85E9F]">top destinations </span>
              of the world
            </h1>
            <p className="">
              We always make our customer happy by providing as many choices as
              possible{" "}
            </p>
          </div>
          <div className="flex gap-4 absolute bottom-14 md:bottom-0">
            <button className=" bg-[#5D50C6]  rounded-full text-white py-2 px-4 hover:bg-blue-400  hover:scale-105">
              Get Started
            </button>
            <button className="flex gap-2 border border-gray-400 py-2 px-4 rounded-full hover:bg-blue-100  hover:scale-105">
              <Image src={demo} alt="demo.png" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
        <div className="cursor-pointer">
          <Image src={heroimg} alt="hero.png" />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
