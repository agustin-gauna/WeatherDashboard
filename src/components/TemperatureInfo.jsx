
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons'

function TemperatureInfo() {
    return (
        <div className='bg-white bg-opacity-5 w-[90%] flex flex-col justify-center  rounded-2xl py-10 max-w-4xl text-white'>

            <div className='flex items-center justify-center'>
                <p className='text-3xl font-bold'>Buenos Aires, AR</p>
            </div>

            <div className="flex items-center justify-center py-6 text-xl font-medium"> Soleado</div>

            <div className="flex flex-col items-center justify-around gap-2">

                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className="" />

                <p className="text-5xl font-bold"> 34°C</p>

                <div className="flex flex-col  space-y-3 pt-8  md:flex-row md:items-baseline">

                    <div className="flex text-sm items-center ">
                        <UilTemperature size={18} className={"mr-1"} />
                        <p>Sensación Térmica:</p>
                        <span className='font-bold ml-1'>32°C</span>
                    </div>

                    <span className='hidden md:inline-block text-bold items-center'>|</span>

                    <div className="flex text-sm items-center ">
                        <UilTear size={18} className={"mr-1"} />
                        <p>Humedad:</p>
                        <span className='font-bold ml-1'>18%</span>
                    </div>

                    <div className="flex text-sm items-center  ">
                        <UilWind size={18} className={"mr-1"} />
                        <p>Velocidad del viento:</p>
                        <span className='font-bold ml-1'>11km/h</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center space-y-3 pt-8'>

                <div className='flex justify-center items-center text-sm'>
                    <UilSun />
                    <p>Temperatura Maxima: <span className='font-bold ml-1'> 34°C</span> </p>
                </div>

                <div className='flex items-center text-sm'>
                    <UilSun />
                    <p>Temperatura Minima: <span className='font-bold ml-1'> 24°C</span> </p>
                </div>

                <div className='flex items-center text-sm'>
                    <UilSun />
                    <p>Amanecer: <span className='font-bold ml-1'>6:05 AM</span> </p>
                </div>

                <div className='flex items-center text-sm'>
                    <UilSunset />
                    <p>Amanecer: <span className='font-bold ml-1'>8:10 PM</span> </p>
                </div>


            </div>



        </div>

    )
}

export default TemperatureInfo