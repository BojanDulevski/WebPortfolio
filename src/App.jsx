import {useState, useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import MyProject from "./components/MyProject";
import LetsConnect from "./components/LetsConnect"

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

  useEffect(() => {
    AOS.refresh()
  }, [darkmode])

  const toggleDarkMode = () =>{
    const newMode=!darkmode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  }

  return(
    <div className={
      darkmode
      ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
      : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
        <Navbar darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
        <Hero darkmode={darkmode}/>
        <About darkmode={darkmode} />
        <Skills darkmode={darkmode} />
      
        <MyProject darkmode={darkmode} /> 
        <LetsConnect darkmode={darkmode} /> 
    </div>
  )
}

export default App;