import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Award, Briefcase, GraduationCap, Sparkles, Trophy } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      id: 1,
      year: '2025',
      title: 'AI Annotator Intern',
      company: 'Student Tribe',
      description: 'Currently working on AI data annotation, model training data preparation, and quality assurance for machine learning projects.',
      icon: Briefcase,
      type: 'work',
      color: 'from-aui-blue-500 to-aui-cyan-500',
    },
    {
      id: 2,
      year: '2025',
      title: 'AI Intern',
      company: 'YHills',
      description: 'Currently developing AI solutions, working on machine learning algorithms, and contributing to innovative AI projects.',
      icon: Award,
      type: 'work',
      color: 'from-aui-purple-500 to-aui-blue-500',
    },
    {
      id: 3,
      year: '2024',
      title: 'AI/ML Intern',
      company: 'YBI Foundation',
      description: 'Worked on machine learning projects and data analysis using Python and various ML frameworks.',
      icon: Briefcase,
      type: 'work',
      color: 'from-aui-cyan-500 to-aui-purple-500',
    },
    {
      id: 4,
      year: '2022-2026',
      title: 'B.Tech Computer Science',
      company: 'KG Reddy College of Engineering and Technology',
      description: 'Currently pursuing Bachelor of Technology with CGPA 8.55/10, specializing in AI and ML.',
      icon: GraduationCap,
      type: 'education',
      color: 'from-aui-blue-500 to-aui-purple-500',
    },
    {
      id: 5,
      year: '2024',
      title: '36-Hour Hackathon Participant',
      company: 'Mental Health Chatbot Project',
      description: 'Developed an AI-powered chatbot for mental health support using NLP and PostgreSQL.',
      icon: Award,
      type: 'achievement',
      color: 'from-aui-purple-500 to-aui-cyan-500',
    },
    {
      id: 6,
      year: '2023-2024',
      title: 'Multiple Project Completions',
      company: 'Self-Directed Learning',
      description: 'Successfully completed 6+ projects spanning ML, web development, and computer vision.',
      icon: Award,
      type: 'achievement',
      color: 'from-aui-cyan-500 to-aui-blue-500',
    },
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
      y: 60,
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

  return (
    <section id="achievements" className="relative section-padding bg-aui-darker overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-aui-blue-500/8 to-aui-purple-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-aui-cyan-500/8 to-aui-blue-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
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
          <Sparkles className="w-3 h-3 text-aui-purple-400" />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-aui-purple-500/10 border border-aui-purple-500/20 rounded-full backdrop-blur-sm mb-6"
          >
            <Trophy className="w-4 h-4 text-aui-purple-400" />
            <span className="text-aui-purple-300 text-sm font-medium">My Journey</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Career <span className="text-gradient-purple">Timeline</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-aui-purple-500 to-aui-blue-500 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-aui-gray-400 max-w-3xl mx-auto"
          >
            A timeline of my professional growth, achievements, and learning milestones
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-aui-purple-500 to-aui-blue-500 hidden md:block rounded-full" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12 md:space-y-16"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div 
                    className="glass-card p-6 group"
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <motion.div 
                        className={`p-3 bg-gradient-to-r ${item.color} rounded-xl`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <item.icon className="text-white text-lg" />
                      </motion.div>
                      <span className="text-sm font-medium text-aui-blue-400 uppercase tracking-wider">
                        {item.year}
                      </span>
                    </div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-white mb-2"
                      whileHover={{ 
                        color: "#60a5fa",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <p className="text-aui-purple-400 font-medium mb-3 flex items-center gap-2">
                      <MapPin size={16} />
                      {item.company}
                    </p>
                    
                    <p className="text-aui-gray-400 leading-relaxed text-sm">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="relative flex items-center justify-center w-12 h-12 mx-4 my-4 md:my-0">
                  <motion.div 
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center z-10 border-4 border-aui-dark shadow-lg`}
                    whileHover={{ 
                      scale: 1.3,
                      transition: { duration: 0.3 }
                    }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(168, 85, 247, 0.7)",
                        "0 0 0 10px rgba(168, 85, 247, 0)",
                        "0 0 0 0 rgba(168, 85, 247, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '4', label: 'Years of Study', icon: GraduationCap },
            { number: '4', label: 'Professional Internships', icon: Briefcase },
            { number: '6+', label: 'Projects Completed', icon: Award }
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              className="glass-card p-8 text-center group"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="p-4 bg-gradient-to-r from-aui-purple-500 to-aui-blue-500 rounded-xl mx-auto w-fit mb-4"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <stat.icon className="text-white text-2xl" />
              </motion.div>
              
              <motion.div 
                className="text-4xl font-bold text-gradient-purple mb-2"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                {stat.number}
              </motion.div>
              
              <div className="text-aui-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
