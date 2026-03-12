import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png' 
import hero from '../assets/hero.png'
import CV from '../assets/CV.pdf'
import { DownloadIcon, Mail } from 'lucide-react'

const Hero = ({ darkmode }) => {
  const socialIcons = [
    { icon: instagram, alt: 'Instagram' },
    { icon: tiktok, alt: 'tiktok' },
    { icon: github, alt: 'github' },
    { icon: youtube, alt: 'youtube' },
  ]

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    buttonOutline: 'border-[#A3AD91] text-[#A3AD91] hover:bg-[#A3AD91] hover:text-[#1A1C1A]',
    buttonGradient: 'bg-[#556B2F] hover:bg-[#6B8E23] shadow-[0_10px_20px_rgba(85,107,47,0.3)]',
    accentColor: 'text-[#A3AD91]'
  };

  const lightTheme = {
    textPrimary: 'text-[#1B1F13]',
    textSecondary: 'text-gray-600',
    buttonOutline: 'border-[#556B2F] text-[#556B2F] hover:bg-[#556B2F] hover:text-white',
    buttonGradient: 'bg-[#4A5D23] hover:bg-[#3A4A1C] shadow-[0_10px_20px_rgba(74,93,35,0.2)]',
    accentColor: 'text-[#556B2F]'
  };

  const theme = darkmode ? darkTheme : lightTheme;

  return (
    <div className={`relative overflow-hidden min-h-screen flex flex-col justify-center transition-colors duration-500 ${darkmode ? 'bg-[#121412]' : 'bg-[#FDFDFB]'}`}>
      <section id='home' className='body-font z-10'>
        <div className='container mx-auto flex px-6 sm:px-12 lg:px-20 py-20 lg:py-32 flex-col lg:flex-row items-center justify-between gap-16'>
          
          <div className='lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left'>
            
            <div className='flex justify-center lg:justify-start gap-6 mb-10 w-full'>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href='#'
                  target='_blank'
                  className='transform hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300 ${darkmode ? 'brightness-110' : 'opacity-90 hover:opacity-100'}`} 
                  />
                </a>
              ))}
            </div>

            <h1 className={`text-5xl sm:text-6xl lg:text-8xl mb-6 font-extrabold tracking-tight leading-none ${theme.textPrimary}`}>
              Hi, I'm <span className={`${theme.accentColor}`}>Bojan</span>
            </h1>

            {/* Опис кој звучи природно и човечки */}
            <p className={`mb-10 leading-tight max-w-3xl text-xl sm:text-2xl font-light ${theme.textSecondary}`}>
              I'm a student at <span className={`font-semibold ${darkmode ? 'text-white' : 'text-black'}`}>FINKI</span> with a real passion for coding. 
              I don't just study for the grades—I love diving deep into how things work and building apps that actually solve problems. 
              Always learning, always building, and always looking for the next challenge.
            </p>
            
            <div className='w-full'>
              <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-6'>
                <a href={CV} download className='cursor-pointer group w-full sm:w-auto'>
                  <button className={`w-full sm:min-w-[240px] inline-flex items-center justify-center py-5 px-10 rounded-2xl text-xl font-bold border-2 transition-all duration-300 cursor-pointer ${theme.buttonOutline}`}>
                    <DownloadIcon className="mr-3 w-7 h-7" />
                    Download CV
                  </button>
                </a>

                <a href="#contact" className='cursor-pointer w-full sm:w-auto'>
                  <button className={`w-full sm:min-w-[240px] inline-flex items-center justify-center py-5 px-10 rounded-2xl text-xl font-bold text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${theme.buttonGradient}`}>
                    <Mail className='w-7 h-7 mr-3'/>
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className='lg:w-2/5 w-full max-w-md lg:max-w-lg mt-12 lg:mt-0 flex justify-center relative'>
             <div className={`absolute inset-0 rounded-full blur-[100px] opacity-20 ${darkmode ? 'bg-[#556B2F]' : 'bg-[#A3AD91]'}`}></div>
             
             <div className='relative z-10'>
                <img 
                  src={hero}
                  alt="Bojan" 
                  className='w-full h-auto object-cover rounded-[2.5rem] shadow-2xl transform hover:scale-[1.03] transition-transform duration-500'
                />
             </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero;