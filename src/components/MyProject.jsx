import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import weatherImg from '../assets/weather.png';

const MyProject = ({ darkmode }) => {
  const projects = [
    {
      title: "Weather Station",
      description: "A real-time weather forecasting application built with pure logic and high-speed data fetching from OpenWeather API.",
      image: weatherImg, 
      technologies: ["JavaScript", "Tailwind", "REST API"],
      codeLink: "https://github.com/BojanDulevski/Weather-App.git",
      demoLink: "https://bojan-weather-app.netlify.app"
    },
    {
      title: "React Mastery Course",
      description: "A comprehensive repository containing advanced React patterns, hooks implementation, and state management architectural solutions.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000", 
      technologies: ["React.js", "Context API", "Tailwind"],
      codeLink: "https://github.com/BojanDulevski/ReactCourse",
      demoLink: "" 
    },
    {
      title: "Tap Me Gym",
      description: "A specialized fitness token application designed for gym management and user performance tracking with a seamless interface.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000", 
      technologies: ["React", "Vercel", "UI/UX"],
      codeLink: "", 
      demoLink: "https://tap-me-gym.vercel.app/" 
    },
    {
      title: "Crypto Tracker",
      description: "Real-time cryptocurrency monitoring platform utilizing external APIs to track market movements and coin valuations.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000", 
      technologies: ["HTML", "CSS", "JS", "API"],
      codeLink: "https://github.com/BojanDulevski/Crypto-Web",
      demoLink: "" 
    },
    {
      title: "Standard Calculator",
      description: "A precision-based calculation engine focusing on clean algorithmic logic and error-free mathematical operations.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1000", 
      technologies: ["JavaScript", "Algorithms", "CSS"],
      codeLink: "https://github.com/BojanDulevski/Standart-Calculator",
      demoLink: "" 
    },
    {
      title: "Advanced Web Design",
      description: "A sophisticated frontend architecture project exploring the reactive capabilities and component-based design of Vue.js.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000", 
      technologies: ["Vue.js", "API", "Modern UI"],
      codeLink: "https://github.com/BojanDulevski/Advanced_web_design",
      demoLink: "" 
    }
  ];

  const theme = {
    accent: darkmode ? 'text-[#A3AD91]' : 'text-[#556B2F]',
    textPrimary: darkmode ? 'text-white' : 'text-[#1B1F13]',
    textSecondary: darkmode ? 'text-gray-400' : 'text-gray-600',
    bgSection: darkmode ? 'bg-[#121412]' : 'bg-[#FDFDFB]',
    cardBg: darkmode ? 'bg-[#1A1C1A] border-[#2A2D23]' : 'bg-white border-gray-200',
    btnSecondary: darkmode ? 'bg-[#121412] text-white border-gray-700 hover:bg-[#1A1C1A]' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200',
    btnPrimary: darkmode ? 'bg-[#556B2F] hover:bg-[#6B8E23]' : 'bg-[#4A5D23] hover:bg-[#3A4A1C]',
    tagBg: darkmode ? 'bg-[#556B2F]/10 text-[#A3AD91] border-[#556B2F]/30' : 'bg-[#F0F4E8] text-[#556B2F] border-[#A3AD91]/30',
  };

  return (
    <section id="projects" className={`py-24 transition-colors duration-500 ${theme.bgSection}`}>
      <div className="container px-6 mx-auto max-w-7xl">
        
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tighter ${theme.textPrimary}`}>
            FEATURED <span className={theme.accent}>PROJECTS</span>
          </h2>
          <div className={`h-1.5 w-24 mx-auto rounded-full mb-8 ${darkmode ? 'bg-[#A3AD91]' : 'bg-[#556B2F]'}`}></div>
          <p className={`text-xl sm:text-2xl max-w-3xl mx-auto font-light leading-relaxed ${theme.textSecondary}`}>
            A selection of my recent work where technical precision meets functional design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className={`group flex flex-col rounded-[2.5rem] border-2 transition-all duration-500 hover:shadow-2xl overflow-hidden ${theme.cardBg} hover:-translate-y-2`}
            >
              {/* СЛИКАТА СЕГА Е ЛИНК */}
              <a 
                href={project.codeLink || project.demoLink} 
                target="_blank" 
                rel="noreferrer" 
                className="relative h-64 overflow-hidden block cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${darkmode ? 'from-[#121412]/90' : 'from-black/60'} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center`}>
                   <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      {/* Ако нема код линк, покажува икона за External Link (за Gym App) */}
                      {project.codeLink ? <Github className="text-white w-8 h-8" /> : <ExternalLink className="text-white w-8 h-8" />}
                   </div>
                </div>
              </a>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className={`text-2xl lg:text-3xl font-black mb-4 tracking-tight ${theme.textPrimary}`}>
                  {project.title}
                </h3>
                <p className={`text-base lg:text-lg mb-8 line-clamp-3 leading-relaxed ${theme.textSecondary}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-xl border ${theme.tagBg}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.codeLink && (
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-xs uppercase tracking-widest border transition-all duration-300 ${theme.btnSecondary}`}
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white transition-all duration-300 shadow-xl ${theme.btnPrimary}`}
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>   
  );
};

export default MyProject;