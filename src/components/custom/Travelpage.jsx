// TravelPlaces.jsx
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const places = [
  {
    name: "Taj Mahal, Agra",
    image:
      "https://img.freepik.com/premium-photo/gate-india-famous-monument-new-delhi_400112-203.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/Taj_Mahal",
  },
  {
    name: "Jaipur, Rajasthan",
    image:
      "https://img.freepik.com/free-photo/building-decorated-indian-republic-day_23-2151142425.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/Jaipur",
  },
  {
    name: "Kerala Backwaters",
    image:
      "https://img.freepik.com/free-photo/asian-woman-wearing-chinese-traditional-dress-ban-rak-thai-village-mae-hong-son-province-thailand_335224-1169.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/Backwaters_of_Kerala",
  },
  {
    name: "Varanasi, Uttar Pradesh",
    image:
      "https://img.freepik.com/premium-photo/scenic-view-river-against-clear-sky-sunset_1048944-25202485.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/Varanasi",
  },
  {
    name: "Rann of Kutch, Gujarat",
    image:
      "https://img.freepik.com/premium-photo/jama-masjid-jumah-mosque-ahmedabad_78361-15393.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/Rann_of_Kutch",
  },
  {
    name: "Kolkata City of Joy",
    image:
      "https://img.freepik.com/premium-photo/victoria-memorial-historical-white-marble-monument-museum-kolkata_1048944-7500969.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740",
    link: "https://en.wikipedia.org/wiki/Kolkata",
  },
];

export default function TravelPlaces() {
  return (
    <div className="relative py-20 px-5 bg-black">
      <div className="absolute inset-0 bg-black backdrop-blur-md" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Divider Line */}
        <div className="w-full border-t-4 border-white mb-10"></div>

        {/* Heading with Hover Effect */}
        <div className="text-2xl md:text-4xl  text-white font-sans text-center mt-10 m-4">
               <span className="text-pink-500 font-sans">Most</span>{' '}
                 <Typewriter
                   words={[' Popular Tour  City of India']}
                   loop={false}
                   cursor
                   cursorStyle="|"
                   typeSpeed={50}
                   deleteSpeed={0}
                   delaySpeed={1000}
                 />
             
              </div>
        

        {/* Grid of Places */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <motion.a
              key={index}
              href={place.link}
              className="bg-white  cursor-pointer rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
              <div className="p-2">
                <h3 className="text-xl font-semibold">{place.name}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
