import React from 'react';
import aboutImg from '../assets/aboutpicture.png';

const About = ({ darkmode }) => {
  const theme = {
    accent: darkmode ? 'text-[#A3AD91]' : 'text-[#556B2F]',
    textPrimary: darkmode ? 'text-white' : 'text-[#1B1F13]',
    textSecondary: darkmode ? 'text-gray-400' : 'text-gray-600',
    bgSection: darkmode ? 'bg-[#121412]' : 'bg-[#FDFDFB]',
    cardBg: darkmode ? 'bg-[#1A1C1A]/60' : 'bg-[#F0F4E8]/60',
    btnBg: darkmode ? 'bg-[#556B2F] hover:bg-[#6B8E23]' : 'bg-[#4A5D23] hover:bg-[#3A4A1C]',
    border: darkmode ? 'border-white/10' : 'border-black/5',
  };

  return (
    <section id="about" className={`min-h-screen overflow-hidden flex items-center justify-center px-6 py-20 transition-colors duration-500 ${theme.bgSection}`}>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <figure
          data-aos='fade-right'
          data-aos-delay='300'
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative w-full max-w-md group">
            <div className={`absolute -inset-4 rounded-[3rem] border-2 transition-all duration-500 group-hover:inset-0 ${darkmode ? 'border-[#556B2F]/30 group-hover:border-[#A3AD91]/50' : 'border-[#A3AD91]/40 group-hover:border-[#556B2F]/50'}`}></div>
            <img
              src={aboutImg}
              alt="About Me"
              className="relative w-full h-auto object-cover rounded-[2.5rem] z-10 shadow-2xl transition-transform duration-500 group-hover:scale-[0.98]"
              data-aos='zoom-in'
              data-aos-delay='500'
            />
          </div>
        </figure>

        <article
          data-aos='fade-left'
          data-aos-delay='300'
          className='text-center lg:text-left relative order-1 lg:order-2'
        >
          <header>
            <h2 
              className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tighter ${theme.textPrimary}`}
              data-aos='fade-up'
              data-aos-delay='400'
            >
              About <span className={theme.accent}>Me</span>
            </h2>
          </header>

          <div className={`text-xl sm:text-2xl mb-10 leading-relaxed p-8 sm:p-10 rounded-[2.5rem] backdrop-blur-md border shadow-lg ${theme.border} ${theme.cardBg} ${theme.textSecondary}`}
            data-aos='fade-up'
            data-aos-delay='500'
          >
            I am currently a <span className={`font-bold ${theme.textPrimary}`}>3rd-year student at FINKI</span>, 
            deep-diving into the world of algorithms and high-performance web development. 
            Over the past <span className={`font-bold ${theme.textPrimary}`}>3+ years of education</span> and 
            <span className={`font-bold ${theme.textPrimary}`}> 2+ years of practical coding</span>, 
            I’ve focused on building clean, efficient, and scalable digital solutions. 
            My journey is driven by a constant curiosity for new technologies and a commitment to writing high-quality code.
          </div>

          <div className='grid grid-cols-3 gap-6 mb-12'>
            <div className='flex flex-col' data-aos='zoom-in' data-aos-delay='600'>
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-1 ${theme.accent}`}>3+</div>
              <div className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] ${theme.textSecondary}`}>
                Years Study
              </div>
            </div>

            <div className='flex flex-col' data-aos='zoom-in' data-aos-delay='650'>
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-1 ${theme.accent}`}>2+</div>
              <div className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] ${theme.textSecondary}`}>
                Exp Years
              </div>
            </div>

            <div className='flex flex-col' data-aos='zoom-in' data-aos-delay='700'>
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-1 ${theme.accent}`}>15+</div>
              <div className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] ${theme.textSecondary}`}>
                Projects
              </div>
            </div>
          </div> 

          <a 
            href="https://github.com/BojanDulevski" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <button className={`w-full sm:w-auto inline-flex items-center justify-center py-5 px-14 rounded-2xl text-lg font-bold uppercase tracking-widest text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(85,107,47,0.3)] cursor-pointer ${theme.btnBg}`}
              data-aos='fade-up'
              data-aos-delay='800'
            >
              Learn More
            </button>
          </a>

        </article>   
      </div>
    </section>
  )
}

export default About;