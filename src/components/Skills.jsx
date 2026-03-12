import javascript from '../assets/javaScript.png'
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
    { name: 'JavaScript', icon: javascript, level: 95, color: 'from-orange-500 to-amber-500' },
    { name: 'React', icon: react, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Tailwind CSS', icon: tailwind, level: 92, color: 'from-teal-500 to-cyan-500' },
    { name: 'Java', icon: java, level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'Python', icon: python, level: 75, color: 'from-blue-600 to-indigo-400' },
    { name: 'C++', icon: cplusplus, level: 92, color: 'from-blue-500 to-teal-400' },
    { name: 'Django', icon: django, level: 92, color: 'from-green-500 to-emerald-700' },
    { name: 'BootStrap', icon: bootstrap, level: 92, color: 'from-purple-500 to-indigo-600' },
    { name: 'Git', icon: git, level: 92, color: 'from-orange-600 to-red-500' }
  ];

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${darkmode ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
      <div className="container px-5 mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className={`sm:text-5xl text-4xl font-extrabold title-font mb-4 ${darkmode ? 'text-white' : 'text-gray-900'}`}>
            My Skills
          </h1>
          <div className="flex justify-center mt-6">
            <button className={`inline-flex items-center justify-center py-3 px-10 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] ${darkmode ? 'bg-orange-500 text-white' : 'bg-orange-500 text-white'}`}>
              Learn More
            </button>
          </div>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className={`relative group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                darkmode 
                ? 'bg-[#1e293b]/50 border-gray-700 hover:border-orange-500/50' 
                : 'bg-white border-gray-200 shadow-md hover:shadow-xl'
              }`}
            >
              <div className="flex items-center mb-5">
                <div className={`p-3 rounded-xl ${darkmode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
                </div>
                <h2 className={`ml-4 text-xl font-bold ${darkmode ? 'text-white' : 'text-gray-800'}`}>
                  {skill.name}
                </h2>
              </div>

              {/* PROFICIENCY LABEL & PERCENT */}
              <div className="flex justify-between items-end mb-2">
                <span className={`text-sm font-medium ${darkmode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Proficiency
                </span>
                <span className="text-orange-500 font-bold text-sm">
                  {skill.level}%
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className={`w-full rounded-full h-3 ${darkmode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              {/* DECORATIVE LINE UNDER BAR */}
              <div className="mt-3 w-12 h-1 bg-orange-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;