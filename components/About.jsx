"use client";
import { delay, motion } from "framer-motion";
import { about_us_data, education_histories, experiences } from "@/data/data";
import Image from "next/image";
import Card from "./Card";
import UseInView from "./UseInView";
import Heading from "./Heading";
const About = () => {
  return (
    <section className="mt-5 bg-[#a491d3] py-8 relative" id="about">
      <UseInView>
        <Heading>About Me</Heading>
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
                {education_histories.map((history, index) => (
                  <motion.li
                    key={history.id}
                    initial={{ opacity: 0, translateX: 50 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.8 }}
                    viewport={{
                      once: true,
                    }}
                    custom={history.id}
                  >
                    <span className="font-bold underline">
                      {history.degree}
                    </span>{" "}
                    {history.university}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-white shadow-lg py-3 pe-2 rounded-lg h-fit mt-1">
              <h3 className="text-center font-bold text-lg">
                Working Experience
              </h3>
              <ul className="list-disc list-inside text-sm text-slate-600 mt-2 leading-8">
                {experiences.map((exp, index) => (
                  <motion.li
                    initial={{ opacity: 0, translateX: 50 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.8 }}
                    viewport={{
                      once: true,
                    }}
                    custom={history.id}
                    key={index}
                    className="font-bold"
                  >
                    {exp.year}
                    <p className="text-wrap ms-9 font-normal">
                      {exp.careerer}
                      <span className="font-semibold italic">
                        {exp.type}
                      </span>{" "}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </UseInView>
    </section>
  );
};

export default About;
