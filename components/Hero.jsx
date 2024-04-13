import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="mt-8" id="Home">
      <div className="flex flex-col justify-center items-center">
        <h1
          className={`${poppins.className} text-center text-5xl md:text-6xl lg:text-7xl text-[#FFC94A] font-bold`}
        >
          Boost Exam Grades :)
        </h1>
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
        <p className="mt-2 font-semibold text-[#C08B5C]">Are You Interested!</p>
        <Link href="https://www.facebook.com/DrThetThetNwe" target="new">
          <button className="bg-[#FFC94A] rounded-full shadow-md px-6 py-3 mt-3">
            Join Now
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Image src="/hero.jpg" alt="tr-nwe-img" width={400} height={500} />
      </div>
    </section>
  );
};

export default Hero;
