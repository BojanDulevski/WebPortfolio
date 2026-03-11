import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png' 
import hero from '../assets/hero.png'
import CV from '../assets/CV.pdf'
import { DownloadIcon, Mail } from 'lucide-react'
import About from './About'

const Hero = ({darkmode}) => {
  const socialIcons = [
    { icon: instagram, alt: 'Instagram' },
    { icon: tiktok, alt: 'tiktok' },
    { icon: github, alt: 'github' },
    { icon: youtube, alt: 'youtube' },
  ]

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: `text-white border-2 border-orange-500 hover:bg-orange-600`,
    decorativeCircle: 'bg-orange-500 opacity-10',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: `text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white`,
    decorativeCircle: 'bg-orange-400 opacity-20',
  };

  const theme = darkmode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col justify-center'>
      <section 
        id='home'
        data-aos='fade-up'
        data-aos-delay='250'
        className='body-font z-10'
      >
        {/* ПРОМЕНА: justify-center наместо justify-between и додаден gap за баланс во центарот */}
        <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 lg:mt-0 mt-14'>
          
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
            
            <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href='#'
                  target='_blank'
                  data-aos-delay={`${400 + index * 100}`}
                  className='transform hover:scale-110 transition-transform duration-300'
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkmode ? '' : 'filter brightness-75'}`} 
                  />
                </a>
              ))}
            </div>

            <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                data-aos='fade-up'
                data-aos-delay='500'
            >
              Здраво, јас сум Бојан
            </h1>

            <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
               data-aos='fade-up'
               data-aos-delay='600'
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis et harum dolorem sit minus illo nostrum? Tempore, nobis. Recusandae neque exercitationem voluptates tempore tempora sequi
            </p>
            
            <div className='w-full pt-4 sm:pt-6'>
              <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                   data-aos='fade-up'
                   data-aos-delay='700'
              >
                <a href={CV} download className='w-full sm:w-auto'>
                  <button className={`w-full sm:w-auto inline-flex items-center justify-center py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold border-2 border-orange-500 transition-all duration-300 ${darkmode ? 'text-white hover:bg-orange-500' : 'text-gray-800 hover:bg-orange-500 hover:text-white'}`}>
                    <DownloadIcon className="mr-2" />
                    Download CV
                  </button>
                </a>

                <a href="#contact" className='w-full sm:w-auto'>
                  <button className={`w-full sm:w-auto inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold text-white transition-all duration-300 transform`}>
                    <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div 
            className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
            data-aos='fade-left'
            data-aos-delay='400'
          >
            <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
              <div className='relative overflow-hidden'>
                <img 
                  src={hero}
                  alt="Hero Image" 
                  className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500'
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero;