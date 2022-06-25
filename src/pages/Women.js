import React from 'react'
import Announcement from '../components/Announcement'
import Discover from '../components/Discover'
import HowWorks from '../components/HowWorks'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import SliderTitle from '../components/SliderTitle'
import Brands from '../components/Brands'
import People from '../components/People'
import LikeOrDislike from '../components/LikeOrDislike'
import Service from '../components/Service'
import GetStarted from '../components/GetStarted'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import FooterEnd from '../components/FooterEnd'

const Women = () => {
  
  return (
    <div style={{overflow: 'hidden'}}>
      <Navbar />
      <Announcement />
      <Discover />
      <HowWorks />
      <SliderTitle />
      <Slider />
      <Brands />
      <People />
      <LikeOrDislike />
      <Service />
      <GetStarted />
      <Faqs />
      <Footer />
      <FooterEnd />
    </div>
  )
}

export default Women