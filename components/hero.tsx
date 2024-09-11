"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroImage1 from "@/public/hero.jpg";
import HeroImage2 from "@/public/hero2.jpg";
import HeroImage3 from "@/public/hero3.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Slider Data
const slides = [
  {
    id: 1,
    title: "Delivering Unmatched Industrial Solutions",
    description:
      "Committed to exceeding expectations through quality craftsmanship and innovative technology. We build lasting partnerships that drive success.",
    imageUrl: HeroImage1,
  },
  {
    id: 2,
    title: "Building Relationships That Last",
    description:
      "Our focus on customer satisfaction and trust sets us apart. Through integrity and innovation, we shape the future of industrial fabrication.",
    imageUrl: HeroImage2,
  },
  {
    id: 3,
    title: "Expanding Our Reach, Elevating Industry Standards",
    description:
      "Pioneering growth in fabrication by building strong foundations with key partners. Together, we are shaping the industrial landscape of tomorrow.",
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
    <div className="relative h-[90vh] w-full overflow-hidden">
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
            objectFit="cover"
            quality={80}
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Slide Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-2xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            {/* 3D Animated Button */}
            <motion.a
              href="#contact"
              className="bg-orange-500 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{
                scale: 1.05,
                translateY: -5,
                boxShadow: "0px 10px 10px rgba(0,0,0,0.5)",
              }}
              whileTap={{
                scale: 0.95,
                translateY: 2,
                boxShadow: "0px 5px 5px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows for Manual Slide Control */}
      <button
        onClick={() => changeSlide(-1)}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 mt-40 sm:mt-0 bg-black/40 p-2 md:left-5 text-white hover:bg-black/50 rounded-full"
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        onClick={() => changeSlide(1)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 mt-40 sm:mt-0 bg-black/40 p-2 md:right-5 text-white hover:bg-black/50 rounded-full"
      >
        <IoIosArrowForward size={30} />
      </button>
    </div>
  );
};

export default HeroSlider;
