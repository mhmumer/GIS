"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroImage1 from "@/public/hero.jpg";
import HeroImage2 from "@/public/hero2.jpg";
import HeroImage3 from "@/public/hero3.png";
import HeroImage4 from "@/public/hero4.jpg";
import HeroImage5 from "@/public/hero5.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  style: "normal",
  subsets: ["latin"], // Choose subsets based on your project
});

// Slider Data
const slides = [
  {
    id: 1,
    title: "We're here to support your projects every step of the way.",

    imageUrl: HeroImage5,
  },
  {
    id: 2,
    title:
      "Trust us for reliable, committed support whenever you need it.",
    imageUrl: HeroImage4,
  },
  {
    id: 3,
    title: "Fabrication ",
    description:
      "Providing high-quality, custom fabrication services for industrial projects.",
    imageUrl: HeroImage2,
  },
  {
    id: 4,
    title: "Pipe Looping  ",
    description:
      "Expert pipe looping solutions designed for efficiency and durability.",
    imageUrl: HeroImage2,
  },
  {
    id: 5,
    title: "HVAC Controls",
    description:
      "Advanced HVAC control systems for optimized environmental management.",
    imageUrl: HeroImage3,
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [slideCount]);

  // Handle manual slide control
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  };

  const [direction, setDirection] = useState(1);

  const changeSlide = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <section className={poppins.className} >
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          {/* Framer Motion Animation for Slide */}
          <motion.div
            key={currentSlide}
            custom={direction}
            className="absolute inset-0 w-full h-full"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Background Image */}
            <Image
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].title}
              layout="fill"
              className="h-screen w-screen"
              objectFit="cover"
              quality={80}
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Slide Content */}
            <div className="relative z-10 flex flex-col items-left justify-center h-full text-left text-white sm:pr-20 sm:pl-0 pl-4 max-w-6xl mx-auto">
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              {/* 3D Animated Button */}
              <motion.a
                href="#contact"
                className="bg-orange-500 text-white font-semibold py-2 px-2 md:py-3 md:px-1 flex items-center justify-center group hover:bg-orange-600 w-40 mt-4"
                whileTap={{
                  scale: 0.95,
                  translateY: 2,
                  boxShadow: "0px 5px 5px rgba(0,0,0,0.2)",
                }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1,  x:0 }}
                transition={{ duration: 0.7, delay: 1.5 }}
                
              >
                Contact Us{" "}
                <IoIosArrowForward className="pl-2 h-6 w-7 group-hover:translate-x-1 font-black transition-all duration-500" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows for Manual Slide Control */}
        <button
          onClick={() => changeSlide(-1)}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 hidden sm:flex bg-black/40 p-2 md:left-5 text-white hover:bg-black/50 rounded-full "
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          onClick={() => changeSlide(1)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 hidden sm:flex bg-black/40 p-2 md:right-5 text-white hover:bg-black/50 rounded-full"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
