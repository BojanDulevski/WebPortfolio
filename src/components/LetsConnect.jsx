import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import myPicture from '../assets/connect.png'; 

const LetsConnect = ({ darkmode }) => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={28} />,
      link: "https://github.com/BojanDulevski",
      color: "hover:bg-[#24292e] hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={28} />,
      link: "https://www.linkedin.com/in/bojan-dulevski-53711a321/",
      color: "hover:bg-[#0077b5] hover:text-white"
    },
    {
      name: "Email",
      icon: <Mail size={28} />,
      link: "mailto:bojan.deuleto7@gmail.com",
      color: "hover:bg-[#D44638] hover:text-white"
    }
  ];

  const theme = {
    accent: darkmode ? 'text-[#A3AD91]' : 'text-[#556B2F]',
    textPrimary: darkmode ? 'text-white' : 'text-[#1B1F13]',
    textSecondary: darkmode ? 'text-gray-400' : 'text-gray-600',
    bgSection: darkmode ? 'bg-[#121412]' : 'bg-[#FDFDFB]',
    cardBg: darkmode ? 'bg-[#1A1C1A] border-[#2A2D23]' : 'bg-white border-gray-200',
    btnPrimary: darkmode ? 'bg-[#556B2F] hover:bg-[#6B8E23]' : 'bg-[#4A5D23] hover:bg-[#3A4A1C]',
  };

  return (
    <section id="contact" className={`py-28 transition-colors duration-500 ${theme.bgSection}`}>
      <div className="container px-6 mx-auto max-w-7xl">
        
        <div className={`relative overflow-hidden rounded-[3rem] border-2 p-8 lg:p-20 ${theme.cardBg}`}>
          
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            
            {/* IMAGE SECTION */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/3 w-full flex justify-center"
            >
              <div className="relative group">
                {/* Decorative border */}
                <div className={`absolute -inset-4 rounded-[2.5rem] border-2 border-dashed transition-all duration-700 ${darkmode ? 'border-[#556B2F]/40' : 'border-[#A3AD91]/60'} group-hover:rotate-12`}></div>
                
                <div className="relative w-64 h-80 overflow-hidden rounded-[2rem] shadow-2xl">
                    <img 
                      src={myPicture} 
                      alt="Bojan Dulevski" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x500?text=Profile+Image";
                      }}
                    />
                </div>
              </div>
            </motion.div>

            {/* CONTENT SECTION */}
            <div className="lg:w-2/3 w-full text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className={`text-5xl sm:text-7xl font-black mb-6 tracking-tighter ${theme.textPrimary}`}>
                  LET'S <span className={theme.accent}>CONNECT</span>
                </h2>
                
                <p className={`text-xl lg:text-2xl mb-12 font-light leading-relaxed max-w-2xl ${theme.textSecondary}`}>
                  Have a project in mind or just want to discuss the latest in tech? 
                  I'm always ready for a new challenge. <span className="font-bold underline decoration-[#556B2F]">Let's build something great.</span>
                </p>

                {/* SOCIAL LINKS */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -8, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 px-8 py-4 rounded-2xl border-2 font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-sm ${theme.cardBg} ${social.color} ${theme.textPrimary}`}
                    >
                      {social.icon}
                      {social.name}
                    </motion.a>
                  ))}
                </div>

                {/* MAIN BUTTON - СЕГА ВОДИ НА LINKEDIN */}
                <motion.a
                  href="https://www.linkedin.com/in/bojan-dulevski-53711a321/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-4 px-12 py-6 rounded-3xl text-white font-black uppercase tracking-widest text-sm shadow-2xl transition-all ${theme.btnPrimary}`}
                >
                  Get in Touch
                  <ArrowRight size={24} className="animate-pulse" />
                </motion.a>
              </motion.div>
            </div>

          </div>

          {/* BACKGROUND BLOB */}
          <div className={`absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none ${darkmode ? 'bg-[#556B2F]' : 'bg-[#A3AD91]'}`}></div>
        </div>

      </div>
    </section>
  );
};

export default LetsConnect;