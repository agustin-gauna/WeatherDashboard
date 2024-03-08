import React from 'react'

import {UilSun} from '@iconscout/react-unicons'

const MaxMinTemperature = () => {
  return (
    <div className='bg-[#1E1E1E] rounded-lg px-4 py-8 text-white flex flex-col gap-2 lg:px-8'>

        <div className='flex gap-1 items-center '>
            <UilSun size={32}/>
            <p className='font-bold text-3xl'>15° Min</p>
        </div>

        <div className='flex gap-1 items-center '>
            <UilSun size={32}/>
            <p className='font-bold text-3xl'>24° Max</p>
        </div>
    </div>
  )
}

export default MaxMinTemperature