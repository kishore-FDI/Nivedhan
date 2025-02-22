import React, { useRef } from 'react'
import { FloatingDockDemo } from '@/components/ui/floating-dock'
import './Hero.css'
const Hero = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center px-4 hero text-neutral-300' >
      <p className='text-4xl md:text-6xl lg:text-8xl font-bold font-montserrat text-center'>
        <span className='text-background'>SRI BOOMAIL STEELS</span>
      </p>
      <p className='text-xl md:text-2xl lg:text-4xl font-montserrat text-center mt-4'>
        <span>We are a leading Retailer of Steel Products</span>
      </p>
      <p className='text-sm md:text-base lg:text-md font-montserrat text-center mt-4'>
        32/20, Kalingarayan Main St, NN Garden,
      </p>
      <p className='text-sm md:text-base lg:text-md font-montserrat text-center -mt-1'>
        Washermanpet, Chennai, Tamil Nadu 600021
      </p>
      <FloatingDockDemo/>
    </section>
  )
}

export default Hero
