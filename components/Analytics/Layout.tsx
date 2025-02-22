import React from 'react'
import ImportShipment from './ImportShipment'
import Stats from './Stats'
const Layout = () => {
  return (
    <>
        <h1 className='sm:text-3xl text-gray-700 font-montserrat text-center'>
            Import Shipment Overview
        </h1>
        <section className='mt-10  flex justify-center items-center'>
                <ImportShipment/>
        </section>
        <Stats/>
    </>
  )
}

export default Layout
