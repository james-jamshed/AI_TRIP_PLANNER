import React from "react";
import imagescursoel from "../../../src/imagescursosel";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Typewriter } from "react-simple-typewriter";

function Section2() {
  return (
   <div className="bg-black">
    
     <div className="text-2xl md:text-4xl bg-black  text-white font-sans text-center  ">
      <div className="w-full border-t-4 border-white mb-10"></div>
     <span className="text-2xl md:text-4xl">
  <span className="text-pink-500 font-[cursive]">Historical</span>{' '}
  <Typewriter
    words={[' places In India']}
    loop={false}
    cursor
    cursorStyle="|"
    typeSpeed={50}
    deleteSpeed={0}
    delaySpeed={1000}
  />
</span>

</div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
        className="w-full bg-black py-9 "
      >
        <CarouselContent>
          {imagescursoel.map(({ name, id, path ,link}) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/4">
                 <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={path}
                  alt={name}
                 
                  className="h-25 rounded-lg cursor-pointer  text-white sm:h-`14 object-contain"
                >
                   
                </img>
                 <p className="mt-2 text-center  text-2xl md:text-2xl  text-white font-sans">{name}</p>
                </a>
              </CarouselItem>
              
            );
          })}
        </CarouselContent>
      </Carousel>
    
  
   </div>
  );
}

export default Section2;
