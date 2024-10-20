import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Movie from './components/Movie/Movie'

function App() {
  const [banner,setBanner] = useState({})

  return (
    <>
      <div className='container w-screen  bg-[#192026] pt-[15px] pl-[83px] pr-[83px] '>
        <Header/>

        <div className='w-[118px] h-9 mt-3 font-[600] text-[32px] leading-9  text-[#FFFFFF] font-[Poppins]'>Explore</div>
        <div className=' w-[388px] h-[25px] mt-5 mb-5 font-[400] text-[22px] leading-[24.75px]  text-[#868686] font-[Poppins] '>What are you gonna watch today ?</div>
          
          <Banner banner={banner}/>
          <Movie setBanner={setBanner}/>
      </div>
    </>
  )
}

export default App
