import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
  "We, SRI BOOMAIL STEELS, are an Indian importer and buyer of waste and scrap of cast iron.",
  "We primarily deal with HS codes 72041000, 72042190, 72042910, 72044900, and 72045000.",
  "Our major trading partners are based in Malaysia, Belgium, Japan, Mozambique, and Italy.",
  "Our trade reports mainly contain market analysis, price analysis, port analysis, and trading partner insights.",
  "By subscribing to our reports, you can access data on product types, HS codes, Indian ports, prices, and trading partners.",
  "We have compiled data from over 80 countries to provide a comprehensive market overview."
];

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className='sm:flex min-h-[20rem]'>
    <section className="space-y-1 p-4 sm:ml-10 font-circular-web flex flex-col justify-center">
      {sections.map((text, sectionIndex) => (
        <motion.p 
          key={sectionIndex} 
          className="text-lg overflow-hidden will-change-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
        >
          {Array.from(text).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: 50, skewY: -5 }, 
                visible: { y: 0, skewY: 0 } 
              }}
              transition={{
                duration: isMobile ? 0.5 : 0.3, // Slower duration on mobile
                ease: "easeOut",
                delay: isMobile ? charIndex * 0.002 : charIndex * 0.005, // Much smaller delay on mobile
              }}
            >
              {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
            </motion.span>
          ))}
        </motion.p>
      ))}
    </section>
    {/* <section className='font-circular-web text-xl rounded-full min-w-[30vw] mt-4 text-white flex flex-col justify-center'>
        <div className='grid grid-cols-2 bg-blue-700 rounded-t-xl p-3.5 font-semibold '>
            <h1 className='grid-cols-1'>
                COUNTRY
            </h1>
            <h1 className='grid-cols-1 '>
                TOTAL
            </h1>
        </div>
        <div className='grid grid-cols-2 bg-gray-100 rounded-b-xl h-[70%] pl-4 text-gray-700 mt-2'>
            <h1>
            MALAYASIA
            </h1>
            <h1>
                29
            </h1>
        </div>
    </section> */}
    </div>
  )
}

export default About
