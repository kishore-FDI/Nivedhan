import React from 'react'
import NavBar from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Loading from '@/components/Loading/Loading'
import BentoGrid  from '../components/BentoGrid/BentoGrid'
const index = () => {
  return (
    <>
    <Loading />
    <NavBar />
    <Hero />
    <BentoGrid />
    <Footer />
    </>
  )
}

export default index
