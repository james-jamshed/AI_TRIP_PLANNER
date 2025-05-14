import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import imagescursoel from "../../../src/imagescursosel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Hero() {

  const indianPlaces = [
  {
    name: 'Taj Mahal, Agra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQa7MdEIHS6ez9suP1uqn68kJSF47WhG3W4g&s',
  },
  {
    name: 'Leh-Ladakh',
    image: 'https://source.unsplash.com/1600x900/?leh-ladakh',
  },
  {
    name: 'Kerala Backwaters',
    image: 'https://source.unsplash.com/1600x900/?kerala',
  },
  {
    name: 'Rajasthan',
    image: 'https://source.unsplash.com/1600x900/?rajasthan',
  },
  {
    name: 'Varanasi',
    image: 'https://source.unsplash.com/1600x900/?varanasi',
  },
  {
    name: 'Goa Beach',
    image: 'https://source.unsplash.com/1600x900/?goa',
  },
];
  return (
    <div 
     style={{
    backgroundImage: `url('https://img.freepik.com/free-photo/majestic-mausoleum-ancient-god-spiritual-journey-generated-by-ai_188544-11114.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740')`,
  }}
    className="min-h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center text-center ">
       
      <h1 className="font-extrabold text-[50px] text-center mt-20">
        <span className="text-[#f56551]">
          AI Trip Planner
          <br></br>
        </span>
      </h1>
      <div className="text-3xl md:text-5xl text-white font-bold text-center mt-10 mx-10">
        <Typewriter
          words={["Plan less. Explore More . AI Handle The Details"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </div>

      {/* <p className="text-xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p> */}

      <Link to={"/create-trip"}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 hover:bg-yellow-500 m-20 text-black font-semibold py-3 px-6 rounded-full  shadow-lg transition-all duration-300">Get Started, It's free</motion.button>
      </Link>

     
      {/* <img src="/landing.png" alt="" className='w-[750px]' /> */}
    </div>
   
  );
}

export default Hero;
