"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const BlinkingButton = () => {

  return (
    <motion.button
      className="bg-[#FFC94A] rounded-full shadow-md px-6 py-3 mt-3"
      initial={{opacity: 0, scaleY: 1}}
      animate={{opacity: 1,}}
      transition={{repeat: 3,  delay: 0.7, duration: 0.5, ease: "easeInOut" }}
    >
      Join Now
    </motion.button>
  );
};

export default BlinkingButton;
