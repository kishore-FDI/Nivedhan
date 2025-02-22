import React from 'react'
import NavBar from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Loading from '@/components/Loading/Loading'
import BentoGrid  from '../components/BentoGrid/BentoGrid'
import About from '@/components/about/About'
const index = () => {
  return (
    <>
    <Loading />
    <NavBar />
    <Hero />
    <About/>
    <BentoGrid />
    <Footer />
    </>
  )
}

export default index
