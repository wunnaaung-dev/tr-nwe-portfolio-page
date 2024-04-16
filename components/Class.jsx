"use client";
import { classes } from "@/data/data";
import ClassCard from "./ClassCard";
import Heading from "./Heading";
import UseInView from "./UseInView";
import { motion } from "framer-motion";

const Class = () => {
  return (
    <section id="classes" className="mt-4">
      <UseInView>
        <Heading>Available Classes</Heading>
        <p className="w-full md:w-1/2 text-center mx-auto mt-2">
          Choose how you want to learn:{" "}
          <span className="text-green-400 italic font-semibold">online</span> or{" "}
          <span className="text-green-400 italic font-semibold">in-person</span>
          . I have lots of classes at different times. Come learn with us and
          find new ways to grow and explore!
        </p>
        <div className="flex justify-center items-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {classes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateX: -50, translateY: -10 }}
                whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 1.2, delay: index * 0.8 }}
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <ClassCard
                  key={item.id}
                  classification={item.classification}
                  level={item.level}
                  subjects={item.subjects}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </UseInView>
    </section>
  );
};

export default Class;
