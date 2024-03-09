import '@fontsource-variable/plus-jakarta-sans';
import TemperatureInfo from './components/TemperatureInfo';
import WeatherForDay from './components/WeatherForDay';
import Search from './components/Search';
import CityText from './components/CityText';
import WeatherNow from './components/WeatherNow';
import SunInfo from './components/SunInfo';
import MaxMinTemperature from './components/MaxMinTemperature';
import HumidityInfo from './components/HumidityInfo';
import VisibilityInfo from './components/VisibilityInfo';
import Footer from './components/Footer';
import WeatherForHour from './components/WeatherForHour';
import SlyderForDay from './components/SlyderForDay'
import SlyderForHour from './components/SlyderForHour'

function App() {
  return (
    <div className="m-auto max-w-5xl">
      
      <header className='w-[90%] m-auto mb-12'>
        <Search/>       
      </header>


      <main className='w-[90%] m-auto mb-4 flex flex-col gap-4 lg:flex  lg:gap-8'>

        <section className='flex flex-col lg:flex-row lg:justify-between gap-4'>

          <CityText/>

          <WeatherNow /> 

        </section>

      </main>

      <section className='w-[90%] m-auto flex flex-col gap-4 mb-4 md:flex-row '>
        <SunInfo/>
        <MaxMinTemperature/>
        <HumidityInfo/>
        <VisibilityInfo/>
      </section>

      {/* <section className='mb-4 w-[90%] m-auto'>
        <WeatherForHour/>
      </section> */}


      <section className='mb-4 w-[90%] m-auto'> {/* seccion de clima por hora */}
        <SlyderForHour/>
      </section>
      

      <section className='mb-4 w-[90%] m-auto'>

      <SlyderForDay/>

      </section>

      {/* <section className='mb-4 w-[90%] m-auto'>
        <WeatherForDay/>
      </section> */}

      <footer className='mb-4 w-[90%] m-auto'>
        <Footer/>
      </footer>

      {/* <section className='flex justify-center'>

        <TemperatureInfo />

      </section> */}
      
      
    </div>
  );
}

export default App;
