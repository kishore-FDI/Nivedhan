/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const Stats = () => {
  const countryData = [
    { name: 'Malaysia', value: 29 },
    { name: 'Belgium', value: 3 },
    { name: 'Japan', value: 3 },
    { name: 'Mozambique', value: 1 },
    { name: 'Italy', value: 1 }
  ]

  // Colors matching the image
  const COLORS = ['#64B5F6', '#424242', '#1E88E5', '#81C784', '#E57373']

  return (
    <section className='sm:flex sm:flex-row-reverse justify-between sm:mx-[15%] mt-10 gap-8 mb-10'>
      <section className='w-full bg-white rounded-xl shadow-sm p-6'>
        <h1 className='text-2xl font-circular-web mb-6 text-gray-800'>
          Trading Countries Distribution
        </h1>
        <div className='h-[300px]'>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={countryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={({ name }) => name}
                labelLine={true}
              >
                {countryData.map((_, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className='w-full bg-white rounded-xl shadow-sm p-6'>
        <h1 className='text-2xl font-circular-web mb-6 text-gray-800'>
          Top Trading Countries
        </h1>
        <div>
          <div className='grid grid-cols-2 bg-blue-500 p-4 rounded-t-lg text-white'>
            <h1>Country</h1>
            <h1>Total</h1>
          </div>
          <div className='min-h-[15rem] rounded-b-xl border border-gray-100'>
            {countryData.map((country, index) => (
              <div 
                key={country.name} 
                className={`grid grid-cols-2 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } ${index === countryData.length - 1 ? 'rounded-b-xl' : ''}`}
              >
                <h1 className='p-3 border-r border-gray-200'>{country.name}</h1>
                <h1 className='p-3'>{country.value}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default Stats
