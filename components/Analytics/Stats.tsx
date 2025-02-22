/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Sector } from 'recharts'
import { ContentType } from 'recharts/types/component/DefaultLegendContent'
import { PieSectorDataItem } from 'recharts/types/polar/Pie'
import { ActiveShape } from 'recharts/types/util/types'

const Stats = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Data for Indian Ports
  const portData = [
    { name: 'Chennai', value: 40 }
  ]

  // Data for Countries
  const countryData = [
    { name: 'Malaysia', value: 29 },
    { name: 'Belgium', value: 3 },
    { name: 'Japan', value: 3 },
    { name: 'Mozambique', value: 1 },
    { name: 'Italy', value: 1 }
  ]

  const COLORS = ['#4299E1', '#48BB78', '#F56565', '#ECC94B', '#4FD1C5']

  // Calculate totals for percentage calculations
  const portTotal = portData.reduce((sum, item) => sum + item.value, 0)
  const countryTotal = countryData.reduce((sum, item) => sum + item.value, 0)

  // Add total to each data point for percentage calculation
  const portDataWithTotal = portData.map(item => ({ ...item, total: portTotal }))
  const countryDataWithTotal = countryData.map(item => ({ ...item, total: countryTotal }))

  const renderActiveShape = (props: {
    cx: number;
    cy: number;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    fill: string;
    payload: { name: string; value: number };
    percent: number;
    value: number;
  }) => {
    const {
      cx, cy, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value
    } = props;

    return (
      <g>
        <text 
          x={cx} 
          y={cy - 10} 
          dy={8} 
          textAnchor="middle" 
          fill={fill} 
          className="text-lg font-semibold"
          style={{ opacity: 1, transition: 'opacity 0.3s ease-in-out' }}
        >
          {payload.name}
        </text>
        <text 
          x={cx} 
          y={cy + 10} 
          dy={8} 
          textAnchor="middle" 
          fill={fill} 
          className="text-base"
          style={{ opacity: 1, transition: 'opacity 0.3s ease-in-out' }}
        >
          {value} ({(percent * 100).toFixed(1)}%)
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 8}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          style={{ transition: 'all 0.3s ease-in-out' }}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 8}
          outerRadius={outerRadius + 10}
          fill={fill}
          style={{ transition: 'all 0.3s ease-in-out' }}
        />
      </g>
    );
  };

  interface TooltipProps {
    active?: boolean;
    payload?: Array<{
      payload: {
        name: string;
        value: number;
        total: number;
      };
    }>;
  }

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border transform transition-all duration-200 ease-in-out">
          <p className="font-semibold text-gray-800">{data.name}</p>
          <p className="text-blue-500 font-medium">
            Count: {data.value}
          </p>
          <p className="text-gray-600">
            Share: {((data.value / data.total) * 100).toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  interface LegendProps {
    payload: Array<{
      value: string;
      color: string;
    }>;
  }

  const renderLegend = (props: LegendProps) => {
    const { payload } = props;
    return (
      <ul className="flex justify-center gap-4 mt-4">
        {payload.map((entry, index) => (
          <li 
            key={`item-${index}`}
            className="flex items-center gap-2 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:opacity-80"
            onClick={() => setActiveIndex(index)}
          >
            <div 
              className="w-3 h-3 rounded-full transition-all duration-200"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className='flex justify-between mx-[15%] mt-10     gap-8 mb-10'>
      <section className='w-full bg-white rounded-xl shadow-sm p-6'>
        <h1 className='text-2xl font-circular-web mb-6 text-gray-800'>
          Top Trading Indian Ports
        </h1>
        <div>
          <div className='grid grid-cols-2 bg-blue-500 p-4 rounded-t-lg text-white'>
            <h1>Indian Port</h1>
            <h1>Total</h1>
          </div>
          <div className='grid grid-cols-2 bg-gray-50 min-h-[15rem] rounded-b-xl border border-gray-100'>
            <h1 className='p-3 border-r border-gray-200'>Chennai</h1>
            <h1 className='p-3'>40</h1>
          </div>
        </div>
        <div className='h-[300px] mt-8'>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                activeIndex={activeIndex !== null ? activeIndex : undefined}
                activeShape={renderActiveShape as ActiveShape<PieSectorDataItem>}
                data={portDataWithTotal}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                onMouseEnter={onPieEnter}
                isAnimationActive={true}
                animationBegin={0}
                animationDuration={1000}
                animationEasing="ease-out"
              >
                {portData.map((_, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    style={{ transition: 'all 0.5s ease-in-out' }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend content={renderLegend as any} />
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
        <div className='h-[300px] mt-8'>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                activeIndex={activeIndex ?? undefined}
                activeShape={renderActiveShape as ActiveShape<PieSectorDataItem> | undefined}
                data={countryDataWithTotal}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                onMouseEnter={onPieEnter}
                isAnimationActive={true}
                animationBegin={0}
                animationDuration={1000}
                animationEasing="ease-out"
              >
                {countryData.map((_, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    style={{ transition: 'all 0.5s ease-in-out' }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend content={renderLegend as ContentType} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
    </section>
  )
}

export default Stats
