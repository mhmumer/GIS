"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Example company logos (replace with actual logos)
import ClientLogo1 from "@/public/comp1.png";
import ClientLogo2 from "@/public/comp2.png";
import ClientLogo3 from "@/public/comp3.png";
import ClientLogo4 from "@/public/comp4.png";
import ClientLogo5 from "@/public/comp5.png";

const OurClients: React.FC = () => {
  const logos = [
    ClientLogo1,
    ClientLogo2,
    ClientLogo3,
    ClientLogo4,
    ClientLogo5,
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto text-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Clients</h2>
        <p className="text-gray-600 mt-2">
          We are proud to have worked with some of the biggest companies.
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-16 items-center justify-center"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20, // Adjust speed of scrolling
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Display logos twice for a seamless loop */}
          {[...logos, ...logos, ...logos, ...logos, ...logos].map(
            (logo, index) => (
              <div
                key={index}
                className="w-28 h-auto my-auto items-center justify-center flex-shrink-0"
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                  width={128}
                  height={128}
                />
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
