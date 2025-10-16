import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Database, Brain, Globe, Sparkles, Zap } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Anti Money Laundering Detection',
      description: 'Advanced ML model to detect fraudulent transactions and flag potential money laundering risks using cutting-edge machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com/Bollapally-Manish-Kumar',
      live: '#',
      icon: Brain,
      gradient: 'from-aui-purple-500 to-aui-blue-500',
    },
    {
      id: 2,
      title: 'StoreX - Cloud Storage App',
      description: 'Secure cloud file storage application with encrypted access codes for seamless file management and sharing.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Cloud Storage', 'REST API'],
      github: 'https://github.com/Bollapally-Manish-Kumar/storeX',
      live: 'https://storexmedia.netlify.app',
      icon: Database,
      gradient: 'from-aui-blue-500 to-aui-cyan-500',
    },
    {
      id: 3,
      title: 'Wine Quality Prediction',
      description: 'Sophisticated machine learning model predicting wine quality using regression algorithms and comprehensive data analysis.',
      image: 'https://images.unsplash.com/photo-1506377872008-6645d6ba8cea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Python', 'ML', 'Regression', 'Data Analysis', 'Matplotlib'],
      github: 'https://github.com/Bollapally-Manish-Kumar/WineQualityPrediction',
      live: '#',
      icon: Code,
      gradient: 'from-aui-cyan-500 to-aui-purple-500',
    },
    {
      id: 4,
      title: 'Virtual Mouse (OpenCV)',
      description: 'Innovative hand gesture-controlled mouse using computer vision for intuitive touchless computer interaction.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'MediaPipe'],
      github: 'https://github.com/Bollapally-Manish-Kumar/Virtual-Mouse-Using-Hand-Gestures',
      live: '#',
      icon: Brain,
      gradient: 'from-aui-purple-500 to-aui-cyan-500',
    },
    {
      id: 5,
      title: 'NutroWeb - Nutrition Guide',
      description: 'Comprehensive nutrition guide website with meal planning and personalized dietary recommendations.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Bollapally-Manish-Kumar/NutroWeb',
      live: '#',
      icon: Globe,
      gradient: 'from-aui-blue-500 to-aui-purple-500',
    },
    {
      id: 6,
      title: 'Mental Health Chatbot',
      description: 'AI-powered mental health support chatbot built during a 36-hour hackathon with sentiment analysis.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Python', 'NLP', 'PostgreSQL', 'Machine Learning'],
      github: 'https://github.com/Bollapally-Manish-Kumar',
      live: '#',
      icon: Brain,
      gradient: 'from-aui-cyan-500 to-aui-blue-500',
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
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

  return (
    <section id="projects" className="relative section-padding bg-aui-darker overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-aui-blue-500/5 to-aui-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-br from-aui-cyan-500/5 to-aui-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Sparkle particles */}
      {Array.from({ length: 10 }).map((_, i) => (
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
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-aui-purple-500/10 border border-aui-purple-500/20 rounded-full backdrop-blur-sm mb-6"
          >
            <Zap className="w-4 h-4 text-aui-purple-400" />
            <span className="text-aui-purple-300 text-sm font-medium">Featured Work</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Featured <span className="text-gradient-purple">Projects</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-aui-purple-500 to-aui-blue-500 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-aui-gray-400 max-w-3xl mx-auto"
          >
            Showcasing my passion for innovation through cutting-edge technology solutions
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden"
            >
              {/* Main card */}
              <div className="glass-card h-full overflow-hidden">
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                />
                
                {/* Image section */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ 
                      scale: 1.1,
                      filter: "brightness(1.1) saturate(1.2)"
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Animated overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-aui-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating icon */}
                  <motion.div 
                    className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${project.gradient} backdrop-blur-sm`}
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                      transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <project.icon className="text-white text-xl" />
                  </motion.div>
                  
                  {/* Action buttons */}
                  <motion.div 
                    className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-aui-dark/80 backdrop-blur-sm rounded-xl border border-aui-gray-700/50 hover:border-aui-blue-500/50 transition-colors"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="text-aui-gray-300 text-lg hover:text-white transition-colors" />
                    </motion.a>
                    {project.live !== '#' && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-aui-dark/80 backdrop-blur-sm rounded-xl border border-aui-gray-700/50 hover:border-aui-blue-500/50 transition-colors"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(59, 130, 246, 0.1)",
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="text-aui-gray-300 text-lg hover:text-white transition-colors" />
                      </motion.a>
                    )}
                  </motion.div>

                  {/* Floating particles */}
                  {Array.from({ length: 4 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      style={{
                        left: `${15 + (i * 20)}%`,
                        top: `${20 + (i * 15)}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: index * 0.3 + i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                {/* Content section */}
                <div className="p-6 relative z-10">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-aui-blue-400 transition-colors duration-300"
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-aui-gray-400 mb-6 leading-relaxed text-sm"
                    whileHover={{ 
                      color: "#d1d5db",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-aui-gray-800/50 border border-aui-gray-700/50 text-aui-gray-300 rounded-lg text-xs font-medium backdrop-blur-sm hover:border-aui-blue-500/50 hover:text-white hover:bg-aui-blue-500/10 transition-all duration-300 cursor-pointer"
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Card glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, ${project.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.1)' : 'rgba(59, 130, 246, 0.1)'} 50%, transparent 100%)`,
                    filter: 'blur(1px)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Bollapally-Manish-Kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Github size={20} />
            </motion.div>
            <span>View All Projects</span>
            <motion.div
              className="w-2 h-2 bg-white/50 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
