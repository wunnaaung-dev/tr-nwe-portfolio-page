"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { outstanding_students } from "@/data/data";
import Students from "./Students";
const Outstanding = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="my-8" id="testimonials">
      <h1 className="text-center text-5xl md:text-6xl lg:text-7xl text-[#FFC94A] font-bold">
        My Outstanding Students
      </h1>
      <p className="w-full md:w-1/2 text-center mx-auto my-2">
        Your dedication and hard work have not gone <span className="text-red-500">unnoticed</span>. It is my greate
        pleasure to reward the outstanding students in the exams.
      </p>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-72 md:w-1/2 md:h-96"
      >
        {outstanding_students.map((student) => (
          <SwiperSlide key={student.id}>
            <Students imgSrc={student.imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={1}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full md:w-1/2"
      >
        {outstanding_students.map((student) => (
          <SwiperSlide key={student.id}>
            <img
              className=" w-28 md:w-44 h-12"
              src={student.imgSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Outstanding;
