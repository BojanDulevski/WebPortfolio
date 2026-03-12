import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About me', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ];

  const lightColors = {
    navBg: 'bg-white/70 border-gray-200',
    textPrimary: 'text-[#1B1F13]',
    textSecondary: 'text-gray-600',
    textHover: 'text-[#556B2F]',
    indicator: 'bg-[#556B2F]',
    button: 'bg-[#4A5D23] hover:bg-[#3A4A1C]',
  }

  const darkColors = {
    navBg: 'bg-[#121412]/80 border-[#2A2D23]',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    textHover: 'text-[#A3AD91]',
    indicator: 'bg-[#A3AD91]',
    button: 'bg-[#556B2F] hover:bg-[#6B8E23]',
  }

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-[100] top-6 px-4 font-['Inter',sans-serif]">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex items-center justify-between w-full max-w-5xl ${colors.navBg} backdrop-blur-md border rounded-2xl px-6 py-3 shadow-2xl`}
      >
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <span className={`text-2xl font-black tracking-tighter ${colors.textPrimary}`}>
            BOJAN<span className={darkMode ? "text-[#A3AD91]" : "text-[#556B2F]"}>.</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className="relative py-1 group"
            >
              <span className={`text-sm font-bold tracking-wide uppercase transition-colors duration-300 ${
                activeSection === item.name.toLowerCase()
                  ? colors.textPrimary
                  : `${colors.textSecondary} group-hover:${colors.textHover}`
              }`}>
                {item.name}
              </span>
              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="navbar-indicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${colors.indicator}`}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-xl border ${darkMode ? 'bg-[#1A1C1A] border-gray-700 text-yellow-400' : 'bg-gray-100 border-gray-300 text-gray-700'} transition-all cursor-pointer`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Hire Me Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`hidden lg:block px-7 py-2.5 text-sm font-bold uppercase tracking-widest text-white rounded-xl shadow-lg transition-all cursor-pointer ${colors.button}`}
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-xl ${darkMode ? 'text-white' : 'text-gray-800'} cursor-pointer`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-20 left-4 right-4 lg:hidden ${darkMode ? 'bg-[#121412] border-[#2A2D23]' : 'bg-white border-gray-200'} border p-6 rounded-3xl shadow-2xl z-[90]`}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className={`text-lg font-bold p-4 rounded-2xl text-center transition-all ${
                    activeSection === item.name.toLowerCase()
                      ? `${darkMode ? 'bg-[#556B2F] text-white' : 'bg-[#F0F4E8] text-[#556B2F]'}`
                      : `${colors.textSecondary}`
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-5 text-center font-black uppercase tracking-widest rounded-2xl text-white ${colors.button}`}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar