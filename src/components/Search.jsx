import '@fontsource-variable/plus-jakarta-sans';
import { UilReact, UilSearch } from '@iconscout/react-unicons/'

import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-col pt-8 pb-4 md:flex-row md:justify-between '>

      <div className='flex items-center gap-1 mb-4 md:mb-0'>

        <img src="/WeatherLab.svg" alt="WeatherLab logo" />
        <h1 className='text-white font-bold text-2xl'>WeatherLab</h1>

      </div>

      <div className='md:ml-10 flex-grow flex relative items-center'>
        <input className='bg-[#353535] py-3 pl-6 pr-6 rounded-lg text-white w-full' placeholder='Buscar ciudad...' />
        <UilSearch className='absolute block cursor-pointer right-4 text-white'/>
      </div>

    </div>
  )
}

export default Search