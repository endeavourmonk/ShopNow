import React from 'react'
import Announcements from '../Components/Announcements'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Newsletter } from '../Components/Newsletter'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home