import React from "react";
import imagescursoel from "../../../src/imagescursosel";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Typewriter } from "react-simple-typewriter";

function Section2() {
  return (
   <div className="bg-black">
     <div className="text-2xl md:text-4xl bg-black  text-white font-bold text-center  ">
      <Typewriter
        words={["Recommended   of The Month"]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={0}
        delaySpeed={1000}
      />
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
          {imagescursoel.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/4">
                <img
                  src={path}
                  alt={name}
                  className="h-25 rounded-lg sm:h-`14 object-contain"
                ></img>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    
  
   </div>
  );
}

export default Section2;
