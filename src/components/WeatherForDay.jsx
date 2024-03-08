import React from 'react'
import WeatherDay from './WeatherDay'

function WeatherForDay() {
  return (
    <div className=' text-white bg-[#1E1E1E] rounded-lg p-8'>

      <div className='flex flex-col gap-4'>
        <h4 className='font-bold text-2xl'>Proximos dias</h4>

        <section className='flex gap-2'>
         <WeatherDay/>
          <WeatherDay/>
          <WeatherDay/>
          <WeatherDay/>
          <WeatherDay/>
          <WeatherDay/>
          <WeatherDay/>
       </section>

      </div>
  
    </div>
  )
}

export default WeatherForDay