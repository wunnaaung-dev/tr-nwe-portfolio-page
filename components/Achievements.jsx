"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";
import Heading from "./Heading";
const imageSources = [
  "/achievements/Ach1.jpg",
  "/achievements/Ach2.jpg",
  "/achievements/Ach3.jpg",
  "/achievements/Ach4.jpg",
  "/achievements/Ach5.jpg",
  "/achievements/Ach6.jpg",
  "/achievements/Ach7.jpg",
  "/achievements/Ach8.jpg",
  "/achievements/Ach9.jpg",
  "/achievements/Ach10.jpg",
  "/achievements/Ach11.jpg",
];
const Achievements = () => {
  return (
    <section>
      <Heading>Achievements</Heading>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="my-5 bg-none w-[300px] flex justify-center items-center  p-2"
      >
        {imageSources.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`achievement${index + 1}`}
              width={300}
              height={400}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Achievements;
