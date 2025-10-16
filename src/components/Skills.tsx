import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Sparkles, Zap } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90, color: 'from-aui-blue-500 to-aui-cyan-500' },
        { name: 'JavaScript', level: 80, color: 'from-aui-purple-500 to-aui-blue-500' },
        { name: 'C/C++', level: 85, color: 'from-aui-cyan-500 to-aui-purple-500' },
        { name: 'HTML5', level: 90, color: 'from-aui-blue-500 to-aui-purple-500' },
        { name: 'CSS3', level: 85, color: 'from-aui-purple-500 to-aui-cyan-500' },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', level: 75, color: 'from-aui-cyan-500 to-aui-blue-500' },
        { name: 'Responsive Design', level: 85, color: 'from-aui-blue-500 to-aui-purple-500' },
        { name: 'Tailwind CSS', level: 80, color: 'from-aui-purple-500 to-aui-cyan-500' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 85, color: 'from-aui-blue-500 to-aui-cyan-500' },
        { name: 'OpenCV', level: 80, color: 'from-aui-purple-500 to-aui-blue-500' },
        { name: 'Data Analysis', level: 85, color: 'from-aui-cyan-500 to-aui-purple-500' },
        { name: 'TensorFlow', level: 75, color: 'from-aui-blue-500 to-aui-purple-500' },
      ],
    },
    {
      title: 'Data Structures & Algorithms',
      skills: [
        { name: 'Problem Solving', level: 90, color: 'from-aui-purple-500 to-aui-cyan-500' },
        { name: 'Algorithms', level: 85, color: 'from-aui-cyan-500 to-aui-blue-500' },
        { name: 'Data Structures', level: 88, color: 'from-aui-blue-500 to-aui-purple-500' },
        { name: 'Competitive Programming', level: 80, color: 'from-aui-purple-500 to-aui-blue-500' },
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', level: 70, color: 'from-aui-cyan-500 to-aui-purple-500' },
        { name: 'PostgreSQL', level: 75, color: 'from-aui-blue-500 to-aui-cyan-500' },
        { name: 'Git', level: 80, color: 'from-aui-purple-500 to-aui-blue-500' },
        { name: 'DBMS', level: 75, color: 'from-aui-blue-500 to-aui-purple-500' },
      ],
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
    <section id="skills" className="relative section-padding bg-aui-darker overflow-hidden">
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
            duration: 4,
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
            <span className="text-aui-purple-300 text-sm font-medium">Technical Skills</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Technical <span className="text-gradient-purple">Skills</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-aui-purple-500 to-aui-blue-500 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-aui-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive toolkit of technologies and frameworks I use to build innovative solutions
          </motion.p>
        </motion.div>

        {/* Skills categories */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-8 group"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3 
                className="text-xl font-bold mb-6 text-white flex items-center gap-3"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Code className="text-aui-blue-400" />
                {category.title}
              </motion.h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-aui-gray-300">{skill.name}</span>
                      <span className="text-aui-blue-400 font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-aui-gray-800/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 + 0.5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="glass-card p-8"
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-8 text-white"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            Technologies & Frameworks
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Python', 'JavaScript', 'React', 'HTML5', 'CSS3', 'MongoDB',
              'PostgreSQL', 'Git', 'OpenCV', 'TensorFlow', 'Pandas', 'NumPy',
              'Scikit-learn', 'Flask', 'REST API', 'Machine Learning'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="px-4 py-3 bg-aui-gray-800/50 border border-aui-gray-700/50 rounded-xl text-center backdrop-blur-sm hover:border-aui-blue-500/50 hover:bg-aui-blue-500/10 transition-all duration-300 cursor-pointer group"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-aui-gray-300 font-medium text-sm group-hover:text-white transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
