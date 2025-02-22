import React from 'react'
import NavBar from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Loading from '@/components/Loading/Loading'
import BentoGrid  from '../components/BentoGrid/BentoGrid'
import About from '@/components/about/About'
import Layout from '@/components/Analytics/Layout'
const index = () => {
  const defaultItems= [
    {
        title: "GI WIRE COIL",
        description: "High-quality galvanized iron wire coils for industrial applications",
        image: "/imgs/GIWIRECOIL.avif",
        span: "sm:col-span-1 sm:row-span-2",
        link: "/products/gi-wire-coil"
    },
    {
        title: "TIN SHEET",
        description: "Premium tin sheets with excellent corrosion resistance",
        image: "/imgs/THINSHEET.webp",
        span: "sm:col-span-1 sm:row-span-2",
        link: "/products/tin-sheet"
    },
    {
        title: "MS BRIGHT BAR",
        description: "Precision-engineered mild steel bright bars",
        image: "/imgs/MSBRIGHTBAR.webp",
        span: "sm:col-span-1 sm:row-span-2",
        link: "/products/ms-bright-bar"
    },
    {
        title: "MS WIRE ROPE",
        description: "Durable mild steel wire ropes for heavy-duty applications",
        image: "https://images.jdmagicbox.com/quickquotes/images_main/recyclable-ms-wire-rope-scrap-2224394871-0vgjzydo.jpg",
        span: "sm:col-span-1 sm:row-span-2",
        link: "/products/ms-wire-rope"
    },
    {
        title: "TIN CIRCLE",
        description: "Precision-cut tin circles for various industrial uses",
        image: "/imgs/TINCIRCLE.jpg",
        span: "sm:col-span-2 sm:row-span-2",
        link: "/products/tin-circle"
    }
];
  return (
    <>
    <Loading />
    <NavBar />
    <Hero />
    <About/>
    <BentoGrid items={defaultItems} />
    <Layout/>
    <Footer />
    </>
  )
}

export default index
