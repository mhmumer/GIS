import AboutSection from '@/components/about'
import Banner from '@/components/banner'
import Navbar from '@/components/header'
import Hero from '@/components/hero'

import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <AboutSection/>
    </div>
  );
}

export default page