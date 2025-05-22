

import React from 'react'

import Slider from 'react-slick';

const images = [
  {
    name: "Madrid",
    url: "https://img.freepik.com/premium-vector/madrid-street-cityscape_250484-338.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/Madrid",
  },
  {
    name: "Moscow",
    url: "https://img.freepik.com/free-vector/moscow-city-emblem_98292-5190.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/Moscow",
  },
  {
    name: "Toronto",
    url: "https://img.freepik.com/free-vector/red-toronto-skyline_23-2147765688.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/Toronto",
  },
  {
    name: "Phuket",
    url: "https://img.freepik.com/free-vector/phuket-thailand-skyline-silhouette-with-panorama-sky-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings_596401-255.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/Phuket",
  },
  {
    name: "London",
    url: "https://img.freepik.com/free-vector/red-skyline-london_23-2147777055.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/London",
  },
];



const Section3 = () => {
  // Click handler for images
 return (
    <section className="max-w-8xl bg-black mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-white text-center text-3xl md:text-4xl font-sans  mb-10 ">
      <span className='text-pink-500'>✈️Explore</span> This Country
      </h2>

      {/* Grid of clickable images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map(({ name, url, link }, idx) => (
          <a
            href={link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative overflow-hidden rounded-lg h-64 w-full transition-transform duration-500 transform group-hover:scale-105 group-hover:shadow-2xl">
              <img
                src={url}
                alt={name}
                className="object-cover h-full w-full rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-500 rounded-lg"></div>
            </div>
            <p className="mt-2 text-center  text-2xl md:text-3xl  text-white font-sans">{name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};


export default Section3
