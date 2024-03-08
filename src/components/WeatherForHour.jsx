import React from 'react'

import WeatherHour from './WeatherHour'

const WeatherForHour = () => {
  return (
    <div className=' text-white bg-[#1E1E1E] rounded-lg p-8'>
        <div className='flex flex-col gap-4'>
            
            <h4 className='font-bold text-2xl'>Proximas horas</h4>

            <section className='flex gap-2'>
                <WeatherHour/>
                <WeatherHour/>
                <WeatherHour/>
                <WeatherHour/>
                <WeatherHour/>
                <WeatherHour/>
                <WeatherHour/>
            </section>

      </div>
    </div>
  )
}

export default WeatherForHour