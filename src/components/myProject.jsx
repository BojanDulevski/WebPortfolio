import React from 'react';
import weatherImg from '../assets/weather.png';

const myProject = ({ darkmode }) => {
  const projects = [
    {
      title: "Weather App",
      description: "Апликација за временска прогноза во реално време со користење на OpenWeather API.",
      image: weatherImg, 
      technologies: ["React", "Tailwind", "API"],
      codeLink: "https://github.com/BojanDulevski/Weather-App.git",
      demoLink: "https://tvoja-demo-strana.com"
    },
    {
      title: "Fitness Tracker App",
      description: "Мобилна апликација за следење на вежби и внес на калории во реално време.",
      image: "https://via.placeholder.com/600x400", 
      technologies: ["React Native", "Firebase"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "Content Generator",
      description: "Алатка базирана на вештачка интелигенција за автоматско генерирање текст.",
      image: "https://via.placeholder.com/600x400", 
      technologies: ["Python", "OpenAI"],
      codeLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${darkmode ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
      <div className="container px-5 mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className={`sm:text-5xl text-4xl font-extrabold title-font mb-4 ${darkmode ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-orange-500">Projects</span>
          </h1>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded"></div>
          <p className={`mt-4 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ${darkmode ? 'text-gray-400' : 'text-gray-600'}`}>
            Еве дел од моите најнови проекти каде што ги применувам моите вештини.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className={`group overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-3 ${
                darkmode 
                ? 'bg-[#1e293b]/50 border-gray-700 hover:border-orange-500/50 shadow-2xl shadow-black/20' 
                : 'bg-white border-gray-200 shadow-lg hover:shadow-2xl'
              }`}
            >
              {/* IMAGE SECTION */}
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                   <span className="text-white text-sm font-medium">Погледни повеќе →</span>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-3 ${darkmode ? 'text-white' : 'text-gray-800'}`}>
                  {project.title}
                </h2>
                <p className={`text-sm mb-4 h-12 overflow-hidden leading-relaxed ${darkmode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md ${
                        darkmode ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'bg-orange-100 text-orange-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 text-center py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                      darkmode 
                      ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 rounded-xl font-bold text-sm bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default myProject;