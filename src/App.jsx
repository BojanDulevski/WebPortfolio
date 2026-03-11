import {useState, useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar"


const App=()=>{
  const [darkmode,setDarkMode]= useState(true);

  useEffect(()=>{
    AOS.init({
        duration:1000,
        once:false,
        offset:100
    });
    document.documentElement.classList.add('dark')
  },[])

  const toggleDarkMode = () =>{
    const newMode=!darkmode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  }
  return(

    <div className={
      darkmode
      ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
      : 'bg-linear-to-br from-gray-50 to blue-50 min-h-screen'
    }>

        <Navbar darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App