import React from 'react'
import ImportShipment from './ImportShipment'
import Stats from './Stats'

const Layout = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <h1 className='text-2xl sm:text-3xl text-gray-700 font-montserrat text-center py-6 sm:py-8'>
        Import Shipment Overview
      </h1>
      <section className='mt-4 sm:mt-10 flex justify-center items-center'>
        <ImportShipment/>
      </section>
      <Stats/>
    </div>
  )
}

export default Layout
