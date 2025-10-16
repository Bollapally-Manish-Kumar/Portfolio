import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Brain, Trophy, Sparkles, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: GraduationCap, number: '8.55', label: 'CGPA Score', color: 'from-aui-blue-500 to-aui-cyan-500', iconColor: 'text-aui-blue-400' },
    { icon: Code, number: '6+', label: 'Projects Completed', color: 'from-aui-purple-500 to-aui-blue-500', iconColor: 'text-aui-purple-400' },
    { icon: Brain, number: '4', label: 'Internships', color: 'from-aui-cyan-500 to-aui-purple-500', iconColor: 'text-aui-cyan-400' },
    { icon: Trophy, number: '15+', label: 'Technologies', color: 'from-aui-blue-500 to-aui-purple-500', iconColor: 'text-aui-blue-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="about" className="relative section-padding bg-aui-dark overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-aui-blue-500/10 to-aui-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-60 h-60 bg-gradient-to-br from-aui-cyan-500/10 to-aui-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Sparkle particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-3 h-3 text-aui-blue-400" />
        </motion.div>
      ))}

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-aui-blue-500/10 border border-aui-blue-500/20 rounded-full backdrop-blur-sm mb-6"
          >
            <Zap className="w-4 h-4 text-aui-blue-400" />
            <span className="text-aui-blue-300 text-sm font-medium">About Me</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Crafting Digital <span className="text-gradient">Experiences</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-aui-blue-500 to-aui-purple-500 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-aui-gray-400 max-w-2xl mx-auto"
          >
            Passionate about creating innovative solutions through code and design
          </motion.p>
        </motion.div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          >
            {/* Content section in glass card */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div className="glass-card p-8">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  About Me
                </motion.h3>
                
                <div className="space-y-6 text-aui-gray-400 leading-relaxed">
                  <p>
                    I'm a passionate Computer Science student specializing in AI, Machine Learning, and Web Development. 
                    Currently pursuing B.Tech at KG Reddy College of Engineering and Technology with a CGPA of 8.55/10.
                  </p>
                  
                  <p>
                    Currently working as an AI Annotator Intern at Student Tribe and AI Intern at YHills, where I'm gaining 
                    hands-on experience in data annotation, machine learning model training, and AI system development.
                  </p>
                </div>

                {/* Experience highlights */}
                <motion.div className="mt-8 p-4 bg-aui-gray-800/30 rounded-xl border border-aui-gray-700/30 backdrop-blur-sm">
                  <motion.div 
                    className="flex items-center gap-2 mb-3"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Code className="text-aui-cyan-400 text-sm" />
                    <span className="text-aui-gray-400 text-sm font-mono">Current Focus: DSA, AI & ML</span>
                  </motion.div>
                  <motion.div 
                    className="text-aui-green-400 font-mono text-sm"
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {'> '}passionate_learner = true
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Info cards in glass container */}
              <motion.div className="glass-card p-6">
                <motion.h4 
                  className="text-lg font-semibold text-white mb-4"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  Quick Info
                </motion.h4>
                <div className="space-y-4">
                  {[
                    { label: 'Location', value: 'Hyderabad, India', icon: '📍' },
                    { label: 'Education', value: 'B.Tech Computer Science Engineering (AIML)', icon: '🎓' },
                    { label: 'Focus', value: 'Data Structures And Algorithms, AI, ML, Web Development', icon: '💻' }
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      className="flex items-start gap-4 p-3 bg-aui-gray-800/30 rounded-xl border border-aui-gray-700/30 hover:border-aui-blue-500/50 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.02,
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="text-xl mt-1">{item.icon}</span>
                      <div>
                        <span className="font-medium text-aui-blue-400 text-sm uppercase tracking-wide">{item.label}:</span>
                        <p className="text-aui-gray-300 mt-1 text-sm">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Visual section in glass card */}
            <motion.div variants={itemVariants}>
              <motion.div className="glass-card p-8">
                <motion.h4 
                  className="text-lg font-semibold text-white mb-6"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  Code Snippet
                </motion.h4>
                
                <div className="relative bg-aui-gray-800/30 rounded-xl p-6 border border-aui-gray-700/30 backdrop-blur-sm">
                  {/* Code snippet visualization */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-aui-gray-400 text-sm ml-2 font-mono">skills.tsx</span>
                    </div>
                    
                    {[
                      'const skills = [',
                      '  "Data Structures",',
                      '  "Algorithms", ',
                      '  "Machine Learning",',
                      '  "Web Development"',
                      '];'
                    ].map((line, index) => (
                      <motion.div
                        key={index}
                        className="font-mono text-sm text-aui-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      >
                        <span className="text-aui-gray-500 mr-4">{String(index + 1).padStart(2, '0')}</span>
                        <span 
                          className={
                            line.includes('const') ? 'text-aui-purple-400' :
                            line.includes('"') ? 'text-aui-cyan-400' :
                            'text-aui-gray-300'
                          }
                        >
                          {line}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating elements */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-6 h-6 bg-aui-blue-500 rounded-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-aui-purple-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden"
            >
              {/* Card background */}
              <div className="relative glass-card p-6 text-center h-full">
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />
                
                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-aui-gray-800/50 mb-4 relative z-10 group-hover:bg-aui-gray-700/50 transition-colors duration-300"
                  animate={{ 
                    y: [0, -5, 0],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                  }}
                >
                  <stat.icon className={`text-2xl ${stat.iconColor}`} />
                </motion.div>
                
                {/* Number */}
                <motion.div 
                  className="text-3xl font-bold text-white mb-2 relative z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                
                {/* Label */}
                <div className="text-aui-gray-400 font-medium text-sm relative z-10">{stat.label}</div>
                
                {/* Sparkle particles */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-aui-blue-400/60 rounded-full"
                    style={{
                      left: `${20 + (i * 25)}%`,
                      top: `${15 + (i * 10)}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2.5 + i * 0.3,
                      repeat: Infinity,
                      delay: index * 0.2 + i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
