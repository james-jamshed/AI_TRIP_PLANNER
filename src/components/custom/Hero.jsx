import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative  min-h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="../../../hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-10" />

      {/* Content */}
      <div className="z-20 text-white px-4">
        <h1 className="font-extrabold text-[50px] text-center mt-30 ">
          <span className="text-[#f56551] ">
            AI Trip Planner
            <br />
          </span>
        </h1>

        <div className="text-3xl md:text-5xl font-bold text-center mt-10 mx-10">
          <Typewriter
            words={["Plan less. Explore more. AI handles the details."]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </div>

        <Link to={"/create-trip"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-500 m-20 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Get Started, It's free
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
