import AboutSection from '@/components/about'
import Banner from '@/components/banner'
import Navbar from '@/components/header'
import Slider from '@/components/hero'
import OurClients from '@/components/scrolling'
import ReviewsSection from '@/components/reviews'
import { Contact } from '@/components/contact'

import React from 'react'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Slider />
      <OurClients/>
      <AboutSection />
      <ReviewsSection />
      <Contact />
      <Footer/>
    </div>
  );
}

export default page