import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Eye, Sparkles, File } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    <section id="resume" className="relative section-padding bg-aui-darker overflow-hidden">
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
            <File className="w-4 h-4 text-aui-blue-400" />
            <span className="text-aui-blue-300 text-sm font-medium">Resume</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            My <span className="text-gradient-blue">Resume</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-aui-blue-500 to-aui-cyan-500 mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-aui-gray-400 max-w-3xl mx-auto"
          >
            Download my complete resume to learn more about my education, experience, and technical skills
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main resume card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass-card p-8 lg:p-12 mb-12"
          >
            <div className="text-center mb-8">
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-aui-blue-500 to-aui-cyan-500 rounded-xl mb-6"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <FileText className="text-white text-4xl" />
              </motion.div>
              
              <motion.h3 
                className="text-2xl lg:text-3xl font-bold mb-4 text-white"
                whileHover={{ 
                  color: "#60a5fa",
                  transition: { duration: 0.3 }
                }}
              >
                Bollapally Manish Kumar
              </motion.h3>
              
              <p className="text-lg text-aui-blue-400 mb-6 font-medium">
                Computer Science Engineer & DSA, AIML Enthusiast
              </p>
              
              <p className="text-aui-gray-400 max-w-2xl mx-auto leading-relaxed">
                Comprehensive resume including AI internships at Student Tribe and YHills, education details, 
                technical skills, project portfolio, and achievements in Data Structures & Algorithms, AI, and Machine Learning.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.a
                href="/Bollapally_Manish_Kumar_Resume.pdf"
                download="Bollapally_Manish_Kumar_Resume.pdf"
                className="btn-primary flex items-center justify-center gap-3"
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
                  <Download size={24} />
                </motion.div>
                <span>Download Resume</span>
                <span className="text-sm opacity-80">(PDF)</span>
              </motion.a>

              <motion.a
                href="/Bollapally_Manish_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-3"
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
                  <Eye size={24} />
                </motion.div>
                <span>View Online</span>
              </motion.a>
            </div>

            <motion.div 
              className="mt-8 text-center p-4 bg-aui-gray-800/30 rounded-xl border border-aui-gray-700/30 backdrop-blur-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-sm text-aui-gray-400">
                Last Updated: July 2025 • File Size: PDF Format
              </p>
            </motion.div>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Current Role',
                description: 'AI Annotator Intern at Student Tribe',
                color: 'from-aui-blue-500 to-aui-cyan-500'
              },
              {
                title: 'Experience',
                description: 'AI Intern at YHills + Multiple AI/ML Internships',
                color: 'from-aui-purple-500 to-aui-blue-500'
              },
              {
                title: 'Expertise',
                description: 'DSA + AI/ML + 6+ Technical Projects',
                color: 'from-aui-cyan-500 to-aui-purple-500'
              }
            ].map((highlight) => (
              <motion.div 
                key={highlight.title}
                variants={itemVariants}
                className="glass-card p-6 text-center group"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <Sparkles className="text-white text-xl" />
                </motion.div>
                
                <motion.h4 
                  className="text-white font-bold text-lg mb-2"
                  whileHover={{ 
                    color: "#60a5fa",
                    transition: { duration: 0.3 }
                  }}
                >
                  {highlight.title}
                </motion.h4>
                
                <p className="text-aui-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
