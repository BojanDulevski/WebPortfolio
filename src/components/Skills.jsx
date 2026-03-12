import React from 'react' // Додадено
import { motion } from 'framer-motion' // Ова го решава Uncaught ReferenceError
import javascript from '../assets/JavaScript.png'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import cplusplus from '../assets/cplusplus.png'
import django from '../assets/django.png'
import bootstrap from '../assets/bootstrap.png'
import git from '../assets/git.png'

const Skills = ({ darkmode }) => {
  const skills = [
    { name: 'C++', icon: cplusplus, level: 100, color: 'from-blue-600 to-blue-400' },
    { name: 'JavaScript', icon: javascript, level: 95, color: 'from-yellow-500 to-amber-400' },
    { name: 'React', icon: react, level: 90, color: 'from-cyan-500 to-blue-400' },
    { name: 'Tailwind CSS', icon: tailwind, level: 92, color: 'from-teal-400 to-cyan-500' },
    { name: 'Java', icon: java, level: 85, color: 'from-red-600 to-orange-500' },
    { name: 'Python', icon: python, level: 75, color: 'from-blue-500 to-yellow-500' },
    { name: 'Django', icon: django, level: 92, color: 'from-emerald-700 to-green-500' },
    { name: 'BootStrap', icon: bootstrap, level: 92, color: 'from-purple-600 to-indigo-500' },
    { name: 'Git', icon: git, level: 92, color: 'from-orange-600 to-red-500' }
  ];

  const theme = {
    accent: darkmode ? 'text-[#A3AD91]' : 'text-[#556B2F]',
    textPrimary: darkmode ? 'text-white' : 'text-[#1B1F13]',
    textSecondary: darkmode ? 'text-gray-400' : 'text-gray-600',
    bgSection: darkmode ? 'bg-[#121412]' : 'bg-[#FDFDFB]',
    cardBg: darkmode ? 'bg-[#1A1C1A] border-[#2A2D23]' : 'bg-white border-gray-200',
    barContainer: darkmode ? 'bg-gray-800' : 'bg-gray-200',
    btnBg: darkmode ? 'bg-[#556B2F] hover:bg-[#6B8E23]' : 'bg-[#4A5D23] hover:bg-[#3A4A1C]',
  };

  return (
    <section id="skills" className={`py-24 transition-colors duration-500 ${theme.bgSection}`}>
      <div className="container px-6 mx-auto max-w-7xl">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tighter ${theme.textPrimary}`}>
            MY <span className={theme.accent}>SKILLS</span>
          </h2>
          <div className={`h-1.5 w-24 mx-auto rounded-full mb-8 ${darkmode ? 'bg-[#A3AD91]' : 'bg-[#556B2F]'}`}></div>
          
          <button className={`inline-flex items-center justify-center py-4 px-12 rounded-2xl text-xl font-black uppercase tracking-widest text-white transition-all duration-300 transform hover:-translate-y-1 shadow-xl cursor-pointer ${theme.btnBg}`}>
            View Full Stack
          </button>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className={`relative group p-8 rounded-[2rem] border-2 transition-all duration-500 hover:shadow-2xl ${theme.cardBg} hover:scale-[1.02]`}
            >
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-2xl transition-transform duration-500 group-hover:rotate-12 ${darkmode ? 'bg-[#121412]' : 'bg-gray-50'}`}>
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                </div>
                <h3 className={`ml-4 text-2xl font-black tracking-tight ${theme.textPrimary}`}>
                  {skill.name}
                </h3>
              </div>

              <div className="flex justify-between items-end mb-3">
                <span className={`text-sm font-black uppercase tracking-widest ${theme.textSecondary}`}>
                  Proficiency
                </span>
                <span className={`font-black text-xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                  {skill.level}%
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className={`w-full rounded-full h-4 overflow-hidden p-1 ${theme.barContainer}`}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                ></motion.div>
              </div>
              
              <div className={`mt-6 w-0 group-hover:w-full h-1 transition-all duration-700 rounded-full bg-gradient-to-r ${skill.color}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;