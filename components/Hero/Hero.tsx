import React, { useEffect, useRef } from 'react'
import { FloatingDockDemo } from '@/components/ui/floating-dock'
import './Hero.css'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'

// Import ScrollTrigger this way to avoid SSR issues
let ScrollTrigger
if (typeof window !== 'undefined') {
  ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)
}

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    })

    // Connect lenis to RAF (request animation frame)
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    if (ScrollTrigger) {
      // Parallax effect for the hero background
      gsap.fromTo(
        heroRef.current,
        {
          backgroundPosition: '50% 0px'
        },
        {
          backgroundPosition: '50% 200px',
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        }
      )
    }

    // Fade in animation for text
    gsap.from(textRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power4.out'
    })

    // Cleanup
    return () => {
      lenis.destroy()
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className='h-screen flex flex-col justify-center items-center px-4 hero text-neutral-300'
    >
      <div ref={textRef}>
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
      </div>
      <FloatingDockDemo/>
    </section>
  )
}

export default Hero
