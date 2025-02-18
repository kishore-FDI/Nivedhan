import React from 'react'
import NavBar from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Loading from '@/components/Loading/Loading'
const index = () => {
  return (
    <>
    <Loading />
    <NavBar />
    <Hero />
    <Footer />
    </>
  )
}

export default index
