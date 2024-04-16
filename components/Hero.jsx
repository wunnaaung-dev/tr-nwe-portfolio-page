"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BlinkingButton from "./BlinkingButton";
import Heading from "./Heading";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });
const Hero = () => {
  return (
    <section className=" mt-14" id="Home">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center relative"
      >
        <div className="relative">
          <Heading>Boost Exam Grades :)</Heading>
          <motion.div
            initial={{ opacity: 0, x: 200, y: -120, rotate: 38 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "linear" }}
          >
            <Image
              className="absolute -top-16 rotate-12 right-0 -z-20"
              src="/Exam.png"
              alt="exam"
              width={200}
              height={300}
            />
          </motion.div>
        </div>
        <h2
          className={`${poppins.className} font-semibold text-md md:text-2xl text-[#453F78]`}
        >
          Try Diverse Questions with Time Limits!
        </h2>
        <p className="w-full md:max-w-lg text-center mt-3 text-slate-500">
          Assist your child in improving test scores by practicing a variety of
          question types under time limit. I will provide personalized guidance
          to help your child succeed.
        </p>
        <div className="flex justify-center">
          <p className="mt-2 font-semibold text-[#C08B5C]">
            Are You Interested!
          </p>
        </div>
        <Link href="https://www.facebook.com/DrThetThetNwe" target="new">
          <BlinkingButton />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center mt-5"
      >
        <Image src="/hero.jpg" alt="tr-nwe-img" width={400} height={500} />
      </motion.div>
    </section>
  );
};

export default Hero;
