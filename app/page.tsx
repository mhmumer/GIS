import AboutSection from '@/components/about'
import Banner from '@/components/banner'
import Navbar from '@/components/header'
import Slider from '@/components/hero'
import OurClients from '@/components/scrolling'
import ReviewsSection from '@/components/reviews'
import { Contact } from '@/components/contact'

import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Slider />
      <OurClients/>
      <AboutSection />
      <ReviewsSection />
      <Contact/>
    </div>
  );
}

export default page