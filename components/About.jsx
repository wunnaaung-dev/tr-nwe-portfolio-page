import { about_us_data } from "@/data/data";
import Image from "next/image";
import Card from "./Card";
const About = () => {
  return (
    <section className="mt-5 bg-[#a491d3] py-8 relative" id="about">
      <h1 className="text-center text-5xl md:text-6xl lg:text-7xl text-[#FFC94A] font-bold">
        About Me
      </h1>
      <div className="flex flex-col px-1 gap-3 justify-center mt-6 md:flex-row indent-5 w-full md:w-3/4 mx-auto">
        <Card
          title="Dr.Thet Thet Nwe"
          imgSrc="/Tr-Nwe-About.jpg"
          description="Founder and CEO of Tr.Nwe IGCSE Class"
        />
        <div className="px-2">
          <div className="bg-white shadow-lg py-3 pe-2 rounded-lg h-fit">
            <h3 className="font-bold text-center text-lg">Education</h3>
            <ul className="list-disc list-inside text-sm text-slate-600 mt-2 leading-8">
              <li>
                <span className="font-bold underline">M.B.B.S</span> (University
                of Medicine 2, 2009)
              </li>
              <li>
                <span className="font-bold underline">M.Med.Sc</span>{" "}
                (Biochemistry, University of Medicine 2, 2009)
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-lg py-3 pe-2 rounded-lg h-fit mt-1">
            <h3 className="text-center font-bold text-lg">
              Working Experience
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-600 mt-2 leading-8">
              <li className="font-bold">
                2003 - 2019
                <p className="text-wrap ms-9 font-normal">
                  Teacher for Government High school students <span className="font-semibold italic">(Grade 10, 11, 12)</span>{" "}
                </p>
              </li>
              <li className="font-bold">
                2016 - 2019
                <p className="text-wrap ms-9 font-normal">
                  Demonstrator, Department of Biochemistry, <span className="font-semibold italic">(University of
                  Medicine 2,Yangon)</span> 
                </p>
              </li>
              <li className="font-bold">
                2019
                <p className="text-wrap ms-9 font-normal">
                  Assistant Lecturer, Department of Biochemistry,<span className="font-semibold italic">(University of
                  Medicine 2, Yangon{" "})</span> 
                </p>
              </li>
              <li className="font-bold">
                2020 - Now
                <p className="text-wrap ms-9 font-normal">
                  Teaching <span className="font-semibold">Biomedical Science</span> for Poland Medical Students
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const BulbSVG = ({ position }) => {
  return (
    <svg
      width="146"
      height="237"
      viewBox="0 0 146 237"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute hidden md:block ${position}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M119 165.901C117.932 164.971 116.599 164.631 115 164.901C115 168.231 115 171.571 115 174.901C112.126 194.801 101.126 207.961 82 214.401C43.642 220.871 28.642 205.041 37 166.901C26.418 167.541 15.918 168.871 5.49999 170.901C4.393 170.811 3.393 170.481 2.49999 169.901C2.046 167.861 1.21299 166.031 -9.80887e-06 164.401C11.019 142.391 25.686 123.061 44 106.401C47.748 103.781 51.581 101.281 55.5 98.9007C50.592 88.0107 53.759 80.1807 65 75.4007C69.006 74.2307 73.006 73.0707 77 71.9007C83.181 28.1507 90.014 -15.5193 97.5 -59.0993C100.947 -60.9493 102.78 -59.9493 103 -56.0993C95.961 -13.9093 89.961 28.4307 85 70.9007C92.695 70.5007 99.361 72.8407 105 77.9007C107.092 80.1907 107.426 82.6907 106 85.4007C105.052 85.8807 104.052 86.0507 103 85.9007C102.826 88.2607 102.493 90.5907 102 92.9007C112.404 97.1307 120.57 104.131 126.5 113.901C139.231 132.161 145.731 152.331 146 174.401C144.667 175.071 143.333 175.071 142 174.401C141.333 172.731 140.667 171.071 140 169.401C133.137 167.371 126.137 166.201 119 165.901Z"
        fill="#130A44"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M139 157.9C139 159.23 139 160.57 139 161.9C109.468 157.53 79.801 156.69 50 159.4C35.958 160.57 21.958 162.07 8 163.9C17.351 144.76 30.018 127.92 46 113.4C59.84 101.56 75.84 95.8996 94 96.3996C103.428 99.5396 111.261 105.04 117.5 112.9C127.388 126.67 134.555 141.67 139 157.9Z"
        fill="#FBFBFB"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M118 216.9C118.658 221.08 116.992 222.58 113 221.4C111.878 219.28 110.378 217.44 108.5 215.9C108.006 214.27 107.84 212.6 108 210.9C109.762 210.76 111.429 211.09 113 211.9C114.355 213.92 116.021 215.59 118 216.9Z"
        fill="#141414"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M119 165.9C118 165.9 117 165.9 116 165.9C116.31 169.11 115.977 172.11 115 174.9C115 171.57 115 168.23 115 164.9C116.599 164.63 117.932 164.97 119 165.9Z"
        fill="#8E8E8E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M109 164.9C108.019 192.38 93.853 207.38 66.5 209.9C49.071 209.97 40.571 201.3 41 183.9C40.843 178.02 41.843 172.35 44 166.9C65.609 164.32 87.275 163.65 109 164.9Z"
        fill="#FAFAFA"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M98 79.8996C97.567 82.5696 97.067 85.2296 96.5 87.8996C96.086 88.3596 95.586 88.6896 95 88.8996C91.529 87.3696 87.862 86.6996 84 86.8996C75.842 87.3296 67.842 88.6696 60 90.8996C60.396 84.6696 63.73 81.1696 70 80.3996C79.333 77.3496 88.667 77.1796 98 79.8996Z"
        fill="#F5F5F5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M73 225.9C73.165 229.25 72.998 232.58 72.5 235.9C71.112 236.95 69.612 237.12 68 236.4C66.878 232.99 66.711 229.49 67.5 225.9C69.328 224.65 71.161 224.65 73 225.9Z"
        fill="#130A44"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M62 118.9C61.756 121.66 60.423 123.83 58 125.4C51.333 129.73 44.667 134.07 38 138.4C32.245 138.48 31.578 136.48 36 132.4C43.308 127.17 50.808 122.34 58.5 117.9C59.756 118.05 60.923 118.38 62 118.9Z"
        fill="#130A44"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 215.9C28.364 220.18 26.864 224.18 24.5 227.9C19.844 230.93 18.177 229.6 19.5 223.9C20.833 221.23 22.167 218.57 23.5 215.9C25.328 214.65 27.161 214.65 29 215.9Z"
        fill="#130A44"
      />
    </svg>
  );
};

export default About;
