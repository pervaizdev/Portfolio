"use client";
import React from "react";
import { HiSparkles } from "react-icons/hi2";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[100vh] overflow-hidden">
      {/* Background video animation */}
      <motion.div
        initial={{ y: -600 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 w-full z-[-10] top-[-380px] lg:top-[-550px]"
      >
        <video
          src="/blackhole.webm"
          autoPlay
          loop
          muted
          playsInline
          className="h-[900px] w-full lg:h-full object-cover"
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 container mx-auto min-h-[100vh] items-center lg:px-12">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-12 lg:py-0"
        >
          <div className="flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex text-white items-center mt-24 lg:mt-0 gap-2 py-2 h-9 w-[280px] rounded-3xl px-4 bg-black/60"
            >
              <HiSparkles className="text-[#b49bff]" />
              <p>Frontend Developer Portfolio</p>
            </motion.div>
          </div>

          <motion.div   
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-4xl mt-8"
          >
            <h1 className="text-white text-center lg:text-start">Providing</h1>
            <h3 className="text-center lg:text-start text-transparent bg-clip-text gradient-text mt-3">
              the best
            </h3>
            <h1 className="text-white mt-3 text-center lg:text-start">
              project experiences
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-md mt-8 text-center lg:text-start p-3 lg:p-0"
          >
            Frontend developer crafting modern, responsive websites with React,
            Next.js, Tailwind CSS, and a focus on clean UI and smooth user
            experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center lg:justify-start mt-8 "
          >
            <Link
              href="/cv.pdf"
              download="My_CV.pdf"
              className="px-4 py-3 hover-scale gradient-bg rounded-lg hover:bg-[#7264b7] transition duration-300 inline-block text-center"
            >
              Download CV
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-12 lg:mt-0"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="Hero Image"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
