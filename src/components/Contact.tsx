import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Github, Linkedin, Instagram, Send, Sparkles, ArrowRight, Code, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Bollapally-Manish-Kumar',
      color: 'from-aui-gray-600 to-aui-gray-800',
      hoverColor: 'hover:from-aui-purple-500 hover:to-aui-purple-700',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/bollapally-manish-kumar',
      color: 'from-aui-blue-500 to-aui-blue-700',
      hoverColor: 'hover:from-aui-blue-400 hover:to-aui-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/manish_bollapally',
      color: 'from-aui-purple-500 to-aui-pink-500',
      hoverColor: 'hover:from-aui-purple-400 hover:to-aui-pink-400',
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
    <section id="contact" className="relative section-padding bg-aui-darker overflow-hidden">
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
      {Array.from({ length: 12 }).map((_, i) => (
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
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-3 h-3 text-aui-cyan-400" />
        </motion.div>
      ))}

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-aui-blue-500/10 border border-aui-blue-500/20 rounded-full backdrop-blur-sm mb-6"
            >
              <MessageCircle className="w-4 h-4 text-aui-blue-400" />
              <span className="text-aui-blue-300 text-sm font-medium">Get In Touch</span>
            </motion.div>

            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Let's <span className="text-gradient-blue">Connect</span>
            </motion.h2>
            
            <motion.div className="w-24 h-1 bg-gradient-to-r from-aui-blue-500 to-aui-cyan-500 mx-auto mb-8 rounded-full" />
            
            <motion.p className="text-lg text-aui-gray-400 max-w-3xl mx-auto">
              Ready to turn ideas into reality? Let's collaborate and create something extraordinary together.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div className="glass-card p-8">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  Let's Talk
                </motion.h3>
                
                {/* Contact details */}
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 group cursor-pointer"
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    <motion.div 
                      className="p-3 bg-gradient-to-r from-aui-blue-500 to-aui-cyan-500 rounded-xl"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Mail className="text-white text-xl" />
                    </motion.div>
                    <div>
                      <p className="text-aui-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium group-hover:text-aui-blue-400 transition-colors">
                        bollapallymanishkumar@gmail.com
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4 group cursor-pointer"
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    <motion.div 
                      className="p-3 bg-gradient-to-r from-aui-purple-500 to-aui-blue-500 rounded-xl"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <MapPin className="text-white text-xl" />
                    </motion.div>
                    <div>
                      <p className="text-aui-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium group-hover:text-aui-purple-400 transition-colors">
                        Hyderabad, India
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Social links */}
                <motion.div className="mt-10">
                  <motion.h4 
                    className="text-lg font-semibold text-white mb-6"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    Connect With Me
                  </motion.h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl transition-all duration-300 shadow-lg group`}
                        whileHover={{ 
                          scale: 1.1,
                          y: -5,
                          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <social.icon className="text-white text-xl group-hover:scale-110 transition-transform" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Floating code elements */}
                <motion.div className="mt-8 p-4 bg-aui-gray-800/30 rounded-xl border border-aui-gray-700/30 backdrop-blur-sm">
                  <motion.div 
                    className="flex items-center gap-2 mb-3"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Code className="text-aui-cyan-400 text-sm" />
                    <span className="text-aui-gray-400 text-sm font-mono">Status: Available for projects</span>
                  </motion.div>
                  <motion.div 
                    className="text-aui-green-400 font-mono text-sm"
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {'> '}ready_to_collaborate = true
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div className="glass-card p-8">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  Send Message
                </motion.h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-aui-gray-300 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-aui-gray-800/50 border border-aui-gray-700/50 rounded-xl text-white placeholder-aui-gray-500 focus:border-aui-blue-500 focus:ring-2 focus:ring-aui-blue-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your name"
                      whileFocus={{ 
                        scale: 1.02,
                        borderColor: "#3b82f6",
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                      }}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-aui-gray-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-aui-gray-800/50 border border-aui-gray-700/50 rounded-xl text-white placeholder-aui-gray-500 focus:border-aui-blue-500 focus:ring-2 focus:ring-aui-blue-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your email"
                      whileFocus={{ 
                        scale: 1.02,
                        borderColor: "#3b82f6",
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                      }}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="message" className="block text-aui-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-aui-gray-800/50 border border-aui-gray-700/50 rounded-xl text-white placeholder-aui-gray-500 focus:border-aui-blue-500 focus:ring-2 focus:ring-aui-blue-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project..."
                      whileFocus={{ 
                        scale: 1.02,
                        borderColor: "#3b82f6",
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                      }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-3 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="text-lg" />
                        <span>Send Message</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRight className="text-lg" />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom decorative element */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aui-blue-500/10 to-aui-purple-500/10 border border-aui-blue-500/20 rounded-full backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-aui-blue-400" />
              </motion.div>
              <span className="text-aui-gray-300 font-medium">
                Ready to build something amazing?
              </span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Sparkles className="w-5 h-5 text-aui-purple-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-20 pt-8 border-t border-aui-gray-800/50 text-center relative z-10"
      >
        <p className="text-aui-gray-400">
          © 2024 Bollapally Manish Kumar. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
