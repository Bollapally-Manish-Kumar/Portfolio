import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  // Enhanced animation variants for modern UI
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 1
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aui-darker pt-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-aui-blue-500/20 to-aui-purple-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-aui-cyan-500/20 to-aui-blue-500/20 rounded-lg blur-xl rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-br from-aui-purple-500/20 to-aui-cyan-500/20 rounded-xl blur-lg"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Sparkle particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={sparkleVariants}
          animate="animate"
          transition={{
            delay: i * 0.3,
            duration: 3,
            repeat: Infinity,
            repeatDelay: Math.random() * 2
          }}
        >
          <Sparkles className="w-4 h-4 text-aui-blue-400" />
        </motion.div>
      ))}
      
      {/* Main content */}
      <div className="relative z-10 text-center text-white container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-aui-blue-500/10 border border-aui-blue-500/20 rounded-full backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 bg-aui-blue-400 rounded-full animate-pulse" />
            <span className="text-aui-blue-300 text-sm font-medium">Available for opportunities</span>
          </motion.div>

          {/* Main heading in glass card */}
          <motion.div variants={itemVariants} className="glass-card p-8 mb-8">
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white">Bollapally</span>
              <span className="block text-gradient mt-2">Manish Kumar</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-aui-gray-300">DSA Expert</span>
              <div className="w-1 h-1 bg-aui-blue-400 rounded-full" />
              <span className="text-aui-gray-300">AI Annotator Intern</span>
              <div className="w-1 h-1 bg-aui-blue-400 rounded-full" />
              <span className="text-aui-gray-300">CS Student</span>
            </motion.div>
            
            {/* Description */}
            <motion.p className="text-lg text-aui-gray-400 max-w-3xl mx-auto leading-relaxed">
              Currently working as AI Annotator Intern at Student Tribe and AI Intern at YHills. 
              Passionate about Data Structures & Algorithms, AI, Machine Learning, and Web Development. 
              Pursuing B.Tech at KG Reddy College of Engineering and Technology with CGPA 8.55/10.
            </motion.p>
          </motion.div>
          
          {/* Tech stack in glass card */}
          <motion.div variants={itemVariants} className="glass-card p-6 mb-8">
            <motion.h3 className="text-xl font-semibold text-white mb-4">Core Expertise</motion.h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Data Structures', 'Algorithms', 'Problem Solving', 'Competitive Programming'].map((skill) => (
                <motion.div
                  key={skill}
                  className="px-4 py-2 bg-aui-gray-800/50 border border-aui-gray-700/50 rounded-xl text-aui-gray-300 font-medium text-sm backdrop-blur-sm hover:border-aui-blue-500/50 hover:text-white hover:bg-aui-blue-500/10 transition-all duration-300 cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* CTA buttons in glass card */}
          <motion.div variants={itemVariants} className="glass-card p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="/Bollapally_Manish_Kumar_Resume.pdf" 
                download="Bollapally_Manish_Kumar_Resume.pdf"
                className="btn-primary flex items-center gap-3 group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Download size={20} />
                </motion.div>
                <span>Download Resume</span>
                <motion.div
                  className="w-2 h-2 bg-white/50 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="btn-secondary flex items-center gap-3 group"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.8)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Mail size={20} />
                </motion.div>
                <span>Get In Touch</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Stats in glass card */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <motion.h3 className="text-xl font-semibold text-white mb-6 text-center">Quick Stats</motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { number: '8.55', label: 'CGPA' },
                { number: '6+', label: 'Projects' },
                { number: '4', label: 'Internships' }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-aui-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-aui-blue-400/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-aui-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <ChevronDown className="text-aui-blue-400 text-xl group-hover:text-aui-blue-300 transition-colors" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
