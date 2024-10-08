"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLightbulb, FaCogs, FaHandsHelping } from "react-icons/fa";

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      backgroundColor: "#FF6600",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative py-20 bg-white" id="about" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12"
          initial="hidden"
          animate={controls}
          variants={headingVariant}
        >
          About Us
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-12"
          initial="hidden"
          animate={controls}
          variants={textVariant}
          transition={{ delay: 0.2 }}
        >
          <strong>Global Industrial Services (GIS)</strong> {" "}is a Supplies cum services firm operating in Pakistan for
          over one decade. the company deals in product sales and related
          services for Automation, HVAC Controls, Combustion Solutions, Pipe
          Looping , Steel Structure Fabrications etc. GIS is incorporated in
          Karachi-Pakistan since 2010 as a sole proprietorship company. Mr.
          Muhammad Jawaid khan is the Founder, Owner and CEO of the company. GIS
          operates in Pakistan and is registered with Federal Board of Revenue.
          The primary business activities of GIS include Fabrication (Parts and
          Machine spares) and Services for Engineering Installation. GIS
          expanded its scope of products over the years and has very
          successfully established the market for the its brands over the
          business journey. Today, GIS maintains a diverse product portfolio and
          strong technical presence to help its customers make informed
          decisions and generate maximum value on their investments.
        </motion.p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out text-center h-80 w-[20rem] mx-auto"
            whileHover={{ scale: 1.02 }}
            initial="hidden"
            animate={controls}
            variants={cardVariant}
          >
            <div className="text-black mb-4 flex justify-center">
              <FaLightbulb size={40} />
            </div>
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Vision</h3>
            <p className="text-gray-600">
              Our vision is to deliver high-quality services that consistently
              exceed customer expectations by maintaining reliability,
              innovation, and customer satisfaction.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out text-center h-80 w-[20rem] mx-auto"
            whileHover={{ scale: 1.02 }}
            initial="hidden"
            animate={controls}
            variants={cardVariant}
            transition={{ delay: 0.1 }}
          >
            <div className="text-black mb-4 flex justify-center">
              <FaCogs size={40} />
            </div>
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Mission</h3>
            <p className="text-gray-600">
              We are dedicated to building long-term relationships with clients
              by delivering exceptional services driven by technology and
              innovative engineering.
            </p>
          </motion.div>

          {/* Core Values Card */}
          <motion.div
            className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out text-center h-80 w-[20rem] mx-auto"
            whileHover={{ scale: 1.02 }}
            initial="hidden"
            animate={controls}
            variants={cardVariant}
            transition={{ delay: 0.2 }}
          >
            <div className="text-black mb-4 flex justify-center">
              <FaHandsHelping size={40} />
            </div>
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              Core Values
            </h3>
            <p className="text-gray-600">
              We uphold integrity, respect, and honesty in everything we do,
              ensuring ethical practices, innovation, and creativity in every
              project.
            </p>
          </motion.div>
        </div>

        {/* Button */}
        <motion.a
          href="#contact"
          className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg mt-12"
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
};

export default AboutSection;
