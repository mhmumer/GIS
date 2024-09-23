"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';

const reviews = [
  {
    name: "Ravi Sharma",
    role: "Project Manager",
    review:
      "Global Industrial Services exceeded our expectations with their professionalism and expertise. Highly recommended!",
  },
  {
    name: "Emily Johnson",
    role: "Operations Supervisor",
    review:
      "The team was reliable and delivered on time. The quality of their work is top-notch!",
  },
  {
    name: "Ahmed Khan",
    role: "HVAC Specialist",
    review:
      "They went above and beyond in helping us with our project needs. Their experience shows in their work.",
  },
  {
    name: "Samantha Lee",
    role: "Engineer",
    review:
      "Very pleased with their fabrication services. We'll definitely be working with them again in the future.",
  },
  {
    name: "Arif Sheikh",
    role: "CEO",
    review:
      "The best industrial services provider we've worked with. Their attention to detail is unmatched.",
  },
  {
    name: "Neha",
    role: "Maintenance Manager",
    review:
      "Excellent pipe looping and HVAC control solutions. Professional and dependable team.",
  },
  {
    name: "Fatima Rahman",
    role: "Operations Director",
    review:
      "They truly understand industrial needs and deliver high-quality services on time. Fantastic team!",
  },
  {
    name: "Michael Rodriguez",
    role: "Site Supervisor",
    review:
      "Exceptional services and attention to detail. Global Industrial Services is a pleasure to work with.",
  },
];

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const previousReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-4xl font-bold font-sans tracking-wider mb-16">What Our Clients Say</h2>
      <div className="w-full max-w-4xl p-4 ">
        <motion.div
          key={currentReview}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <p className="text-lg font-bold">
              "{reviews[currentReview].review}"
            </p>
            <p className="mt-4 text-sm text-gray-400">
              - {reviews[currentReview].name}, {reviews[currentReview].role}
            </p>
          </div>
        </motion.div>

        <div className="flex justify-between mt-6">
          <button
            onClick={previousReview}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Previous
          </button>
          <button
            onClick={nextReview}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
