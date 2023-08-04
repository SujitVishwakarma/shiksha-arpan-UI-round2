import React from 'react'
import Header from './Header'
import Body from '../categories/category/Body'
import Profile from '../profile/Profile'
import Footer from '../footer/Footer'
import Hero from '../categories/hero/Hero'
import Banner from '../banner/Banner'
import CourseHome from '../allcourses/CourseHome'
const Home = () => {
  return (
    <>
      <Hero/>
      <Banner/>
      <CourseHome/>
      <Footer/>
    </>
  )
}

export default Home
