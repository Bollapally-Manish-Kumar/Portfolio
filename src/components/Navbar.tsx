import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#skills', label: 'Skills' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-aui-dark/90 backdrop-blur-xl border-b border-aui-gray-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear",
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="p-2 bg-gradient-to-r from-aui-blue-500 to-aui-purple-500 rounded-xl">
                <Code className="text-white text-xl" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-3 h-3 text-aui-cyan-400" />
              </motion.div>
            </motion.div>
            <motion.div 
              className="text-2xl font-bold text-gradient"
              whileHover={{ 
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                transition: { duration: 0.3 }
              }}
            >
              BMK
            </motion.div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-xl group ${
                  scrolled 
                    ? 'text-aui-gray-300 hover:text-white' 
                    : 'text-aui-gray-300 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-aui-blue-500/20 to-aui-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="navbar-hover"
                />
                
                {/* Text with shimmer effect */}
                <span className="relative z-10 group-hover:text-gradient transition-all duration-300">
                  {item.label}
                </span>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-aui-blue-500 to-aui-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-aui-gray-300 hover:text-white hover:bg-aui-gray-800/50' 
                : 'text-aui-gray-300 hover:text-white hover:bg-aui-gray-900/50'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ scale: isOpen ? 0.8 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div 
            className="glass-card mx-4 mb-4 p-4 space-y-2"
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.1 }
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
              }
            }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-aui-gray-300 font-medium hover:text-white transition-all duration-300 rounded-xl hover:bg-aui-blue-500/10 hover:border-aui-blue-500/20 border border-transparent"
                onClick={() => setIsOpen(false)}
                variants={{
                  open: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.3 }
                  },
                  closed: { 
                    opacity: 0, 
                    x: -20,
                    transition: { duration: 0.2 }
                  }
                }}
                whileHover={{ 
                  x: 5,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-3">
                  <motion.div
                    className="w-2 h-2 bg-gradient-to-r from-aui-blue-500 to-aui-purple-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.2 
                    }}
                  />
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: '50%',
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-2 h-2 text-aui-blue-400" />
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Navbar;
