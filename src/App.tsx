import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Code, BookOpen, Brain, Trophy, GraduationCap, Home, MessageSquare, FileCode2, Codepen, Database, Cpu, Globe, Smartphone } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

// Theme context for dark/light mode
const ThemeContext = React.createContext();

function AnimatedSection({ children, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            JS
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className={`hover:text-purple-400 transition-colors flex items-center gap-2 ${location.pathname === '/' ? 'text-purple-400' : 'text-white'}`}>
              <Home size={18} /> Home
            </Link>
            <Link to="/projects" className={`hover:text-purple-400 transition-colors flex items-center gap-2 ${location.pathname === '/projects' ? 'text-purple-400' : 'text-white'}`}>
              <FileCode2 size={18} /> Projects
            </Link>
            <Link to="/contact" className={`hover:text-purple-400 transition-colors flex items-center gap-2 ${location.pathname === '/contact' ? 'text-purple-400' : 'text-white'}`}>
              <MessageSquare size={18} /> Contact
            </Link>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pt-16">
      {/* Custom cursor effect */}
      {isHovering && (
        <motion.div 
          className="fixed pointer-events-none z-50 w-8 h-8 rounded-full bg-purple-500/30 backdrop-blur-sm"
          animate={{
            x: cursorPosition.x - 16,
            y: cursorPosition.y - 16,
            scale: [1, 1.5, 1],
          }}
          transition={{ 
            type: 'spring',
            damping: 20,
            stiffness: 300
          }}
        />
      )}

      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-4 z-10">
          <motion.h1 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            JAYAANTH S R
          </motion.h1>
          <motion.div 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8 h-[80px]"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'DSA Enthusiast',
                2000,
                'ServiceNow Learner',
                2000,
                'MongoDB Certified',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="max-w-2xl text-lg text-gray-400 mb-8"
          >
            BE Computer Science and Engineering graduate specializing in Java, Spring Boot, MongoDB, and ReactJS. Passionate about building efficient solutions and continuously learning new technologies.
          </motion.p>
          <motion.div 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4"
          >
            <a 
              href="https://github.com/jayaanthsr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-purple-400 transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jayaanth-s-r-6a9567259/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-purple-400 transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://leetcode.com/u/Jayaanthsr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-purple-400 transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <FileCode2 size={24} />
            </a>
            <a 
              href="mailto:jayaanth80@gmail.com" 
              className="text-white hover:text-purple-400 transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
        
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              background: [
                'radial-gradient(circle at 50% 50%, rgba(76,29,149,0.15) 0%, rgba(0,0,0,0) 50%)',
                'radial-gradient(circle at 60% 60%, rgba(219,39,119,0.15) 0%, rgba(0,0,0,0) 50%)',
                'radial-gradient(circle at 40% 40%, rgba(76,29,149,0.15) 0%, rgba(0,0,0,0) 50%)'
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>
      </motion.header>

      {/* Skills Section */}
      <AnimatedSection className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm"
            >
              <Code className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-400">ReactJS, JavaScript, HTML5, CSS3, Tailwind CSS</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm"
            >
              <Database className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Backend & Databases</h3>
              <p className="text-gray-400">Java, Spring Boot, MongoDB, MySQL, DBMS</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm"
            >
              <Brain className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Other Skills</h3>
              <p className="text-gray-400">Data Structures & Algorithms, ServiceNow, C Programming, Problem Solving</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Preview Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <Link 
              to="/projects" 
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All Projects <ExternalLink size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ecommerce Website",
                description: "Full-stack ecommerce platform with React, Spring Boot, and MongoDB",
                tags: ["React", "Spring Boot", "MongoDB"],
                link: "#"
              },
              {
                title: "Inventory Management",
                description: "MERN stack application for inventory tracking and management",
                tags: ["MERN", "Node.js", "Express"],
                link: "#"
              },
              {
                title: "Spectra Website",
                description: "College website for Android department with responsive design",
                tags: ["HTML", "CSS", "JavaScript"],
                link: "https://android.kongu.edu"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm h-full flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-purple-900/50 text-purple-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-black/20">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300"
                  >
                    {project.link === "#" ? "View Details" : "Visit Site"} <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications Section */}
      <AnimatedSection className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm"
            >
              <Trophy className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">MongoDB Certified Associate Developer</h3>
              <p className="text-gray-400 mb-2">MongoDB University</p>
              <p className="text-sm text-gray-500">Issued: 2023</p>
              <a 
                href="#" 
                className="inline-block mt-4 text-sm text-purple-400 hover:text-purple-300"
              >
                View Credential
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm"
            >
              <Trophy className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">ServiceNow Certification (Ongoing)</h3>
              <p className="text-gray-400 mb-2">ServiceNow</p>
              <p className="text-sm text-gray-500">Expected: 2024</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
                <div 
                  className="bg-purple-500 h-2.5 rounded-full" 
                  style={{ width: '60%' }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">60% completed</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm mb-8"
            >
              <GraduationCap className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering in Computer Science</h3>
              <p className="text-gray-400">Kongu Engineering College, Perundurai</p>
              <p className="text-sm text-gray-500">2020 - 2024</p>
              <p className="mt-2 text-gray-300">CGPA: 8.5/10</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

function ProjectsPage() {
  const projects = [
    {
      title: "Ecommerce Website",
      description: "A full-stack ecommerce platform built with React for the frontend, Spring Boot for the backend, and MongoDB as the database. Features include user authentication, product catalog, shopping cart, and order processing.",
      technologies: ["React", "Spring Boot", "MongoDB", "Java", "JavaScript"],
      image: "https://source.unsplash.com/800x600/?ecommerce",
      links: [
        { type: "demo", url: "#" },
        { type: "code", url: "#" }
      ]
    },
    {
      title: "Inventory Management System",
      description: "A MERN stack application for inventory tracking and management. Includes features like product CRUD operations, inventory tracking, reporting, and user roles.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://source.unsplash.com/800x600/?inventory",
      links: [
        { type: "demo", url: "#" },
        { type: "code", url: "#" }
      ]
    },
    {
      title: "Spectra Website",
      description: "Official website for the Android department of Kongu Engineering College. Built with HTML, CSS, and JavaScript with responsive design for all devices.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "https://source.unsplash.com/800x600/?university",
      links: [
        { type: "live", url: "https://android.kongu.edu" }
      ]
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          My Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm h-full flex flex-col"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-purple-900/50 text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-black/20 flex gap-4">
                {project.links.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300"
                  >
                    {link.type === 'demo' && <><ExternalLink size={16} /> Demo</>}
                    {link.type === 'code' && <><Github size={16} /> Code</>}
                    {link.type === 'live' && <><Globe size={16} /> Visit</>}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submission status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            background: [
              'radial-gradient(circle at 30% 30%, rgba(76,29,149,0.15) 0%, rgba(0,0,0,0) 50%)',
              'radial-gradient(circle at 70% 70%, rgba(219,39,119,0.15) 0%, rgba(0,0,0,0) 50%)',
              'radial-gradient(circle at 30% 70%, rgba(76,29,149,0.15) 0%, rgba(0,0,0,0) 50%)'
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Get in Touch
          </h1>
          
          <div className="h-[60px] mb-8">
            <TypeAnimation
              sequence={[
                "Let's collaborate on your next project",
                2000,
                "I'm open to new opportunities",
                2000,
                "Have a question? Feel free to ask",
                2000,
                "Looking for full-stack development work",
                2000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              className="text-xl text-center text-gray-300"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm rounded-lg p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-gray-400">Your message has been sent successfully. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-900/50 text-white focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-900/50 text-white focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-900/50 text-white focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:from-purple-600 hover:to-pink-700 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-purple-900/50">
              <h3 className="text-xl font-semibold mb-4 text-center">Connect with me</h3>
              <div className="flex justify-center gap-6">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://leetcode.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <FileCode2 size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="mailto:jayaanth@example.com"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-black text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Navigation />
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>

        <footer className="py-8 text-center">
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>© {new Date().getFullYear()} JAYAANTH S R. All rights reserved.</p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;