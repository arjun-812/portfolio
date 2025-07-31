import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Code, 
  Server, 
  Globe,
  Award,
  Calendar,
  User,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Menu,
  X,
  ArrowUp
} from 'lucide-react';
import './gowsikarjun-portfolio.css';
import './styles/tech-tags.css';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
}

// Function to get color for tech tags
const getTechColor = (tech: string): { bg: string; text: string; hover: string } => {
  const colors: { [key: string]: { bg: string; text: string; hover: string } } = {
    'React.js': { bg: '#149ECA', text: '#FFFFFF', hover: '#0E7A9B' },
    'TypeScript': { bg: '#3178C6', text: '#FFFFFF', hover: '#265D9D' },
    'Node.js': { bg: '#539E43', text: '#FFFFFF', hover: '#407D33' },
    'Express.js': { bg: '#000000', text: '#FFFFFF', hover: '#333333' },
    'Next.js': { bg: '#000000', text: '#FFFFFF', hover: '#333333' },
    'JavaScript': { bg: '#F7DF1E', text: '#000000', hover: '#E6CE1D' },
    'Python': { bg: '#3776AB', text: '#FFFFFF', hover: '#2B5B85' },
    'MongoDB': { bg: '#47A248', text: '#FFFFFF', hover: '#388037' },
    'MySQL': { bg: '#4479A1', text: '#FFFFFF', hover: '#345C7D' },
    'TensorFlow': { bg: '#FF6F00', text: '#FFFFFF', hover: '#CC5900' },
    'Flask': { bg: '#444444', text: '#FFFFFF', hover: '#2B2B2B' },
    'HTML5/CSS3': { bg: '#E34F26', text: '#FFFFFF', hover: '#C44322' },
    'Tailwind': { bg: '#38B2AC', text: '#FFFFFF', hover: '#2C8F8A' },
    'GraphQL': { bg: '#E535AB', text: '#FFFFFF', hover: '#B52A87' },
    'REST APIs': { bg: '#FF5733', text: '#FFFFFF', hover: '#CC4628' },
    'Docker': { bg: '#2496ED', text: '#FFFFFF', hover: '#1C75BA' },
    'AWS': { bg: '#FF9900', text: '#000000', hover: '#CC7A00' },
    'Redis': { bg: '#DC382D', text: '#FFFFFF', hover: '#B02C23' },
    'PostgreSQL': { bg: '#336791', text: '#FFFFFF', hover: '#264D6B' },
    'NLP': { bg: '#8E44AD', text: '#FFFFFF', hover: '#703688' },
    'scikit-learn': { bg: '#F7931E', text: '#FFFFFF', hover: '#C67518' },
    'Chart.js': { bg: '#FF6384', text: '#FFFFFF', hover: '#CC4F6A' }
  };

  return colors[tech] || { bg: '#64748B20', text: '#64748B' }; // Default color for unknown tech
};

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills: Skill[] = [
    // Frontend
    { name: 'React.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'HTML5/CSS3', level: 92, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 90, category: 'Backend' },
    { name: 'Express.js', level: 88, category: 'Backend' },
    { name: 'Python', level: 82, category: 'Backend' },
    { name: 'REST APIs', level: 92, category: 'Backend' },
    { name: 'GraphQL', level: 75, category: 'Backend' },
    
    // Database
    { name: 'MongoDB', level: 85, category: 'Tools' },
    { name: 'MySQL', level: 80, category: 'Tools' },

        { name: 'Git/GitHub', level: 90, category: 'Tools' },
    { name: 'Figma', level: 78, category: 'Tools' }
    
    // Tools & Others

  ];

  const experiences: Experience[] = [
    {
      title: 'Senior Software Developer',
      company: 'Digisquares Tech Pvt Ltd',
      location: 'Coimbatore, Tamil Nadu',
      period: 'Jun 2023 – Present',
      description: 'Leading development of innovative low-code platforms and scalable web applications, contributing to multiple high-impact projects.',
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Next.js', 'REST APIs'],
      achievements: [
        'Architected and developed a comprehensive low-code platform enabling rapid application development',
        'Built scalable frontend modules using React.js and TypeScript, improving development efficiency by 40%',
        'Developed robust backend services with Node.js and Express, handling 10k+ concurrent users',
        'Created responsive company website using Next.js, resulting in 60% increase in user engagement',
        'Integrated multiple third-party APIs and services, reducing development time by 30%',
        'Collaborated with cross-functional teams in Agile environment, delivering projects on time'
      ]
    },
    {
      title: 'Machine Learning Research Intern',
      company: 'Neosoft solutions',
      location: 'Coimbatore, Tamil Nadu',
      period: 'Jan 2023 – May 2023',
      description: 'Led the development of an AI-powered cyberbullying detection system for social media platforms using machine learning and natural language processing.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'scikit-learn', 'Flask', 'Twitter API'],
      achievements: [
        'Developed a machine learning model achieving 94% accuracy in detecting cyberbullying content across social media platforms',
        'Implemented real-time text analysis using Natural Language Processing for multiple languages',
        'Created a REST API using Flask for integration with social media platforms',
        'Built and trained models on large datasets of social media content for improved accuracy'
      ],
    }
  ];

  const projects: Project[] = [
    {
      title: 'AI-Powered Low-Code Platform',
      description: 'A comprehensive platform that enables users to build web, mobile, and AI-driven applications with minimal coding. Features drag-and-drop interface, real-time collaboration, and automated deployment.',
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Docker', 'AWS'],
      features: [
        'Drag-and-drop visual interface builder',
        'Real-time collaborative editing',
        'Automated CI/CD pipeline integration',
        'Multi-platform deployment (Web, Mobile, Desktop)',
        'AI-powered code generation and optimization',
        'Advanced user management and permissions'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Cyberbullying Detection System',
      description: 'Machine learning-powered system for real-time detection and prevention of cyberbullying in social media platforms. Utilizes advanced NLP techniques and large-scale dataset training.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'React.js', 'Flask', 'PostgreSQL'],
      features: [
        'Real-time comment and message analysis',
        'Multi-language support for content detection',
        'Advanced ML model with 94% accuracy',
        'Automated content moderation dashboard',
        'Detailed analytics and reporting system',
        'Integration APIs for social platforms'
      ],
      githubUrl: '#'
    },
    {
      title: 'Enterprise Resource Planning System',
      description: 'Full-featured ERP system for small to medium businesses, handling inventory management, customer relations, financial tracking, and employee management.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js'],
      features: [
        'Comprehensive inventory management',
        'Customer relationship management (CRM)',
        'Financial reporting and analytics',
        'Employee management and payroll',
        'Real-time notifications and alerts',
        'Multi-role access control system'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
  ];

  const education: Education[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'PSG College of Arts and Science',
      period: '2021 – 2023',
      location: 'Coimbatore, Tamil Nadu',
      highlights: [
        'Specialized in Software Engineering and Web Technologies',
        'Completed NPTEL certification in Emotional Intelligence',
        'Participated in various technical symposiums and coding competitions',
        'Maintained excellent academic performance throughout the program'
      ]
    },
    {
      degree: 'Bachelor of Science in Mathematics',
      institution: 'Hindustan College of Arts and Science',
      period: '2017 – 2020',
      location: 'Coimbatore, Tamil Nadu',
      highlights: [
        'Strong foundation in mathematical concepts and logical thinking',
        'Developed analytical and problem-solving skills',
        'Participated in mathematics competitions and academic events'
      ]
    }
  ];

  const navigationItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          <div className="navbar__brand">
            <span className="navbar__logo">GR</span>
            <span className="navbar__name">Gowsikarjun R</span>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="navbar__menu navbar__menu--desktop">
            {navigationItems.map((item) => (
              <li key={item.id} className="navbar__item">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`navbar__link ${activeSection === item.id ? 'navbar__link--active' : ''}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}>
          <ul className="navbar__menu navbar__menu--mobile">
            {navigationItems.map((item) => (
              <li key={item.id} className="navbar__item">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`navbar__link ${activeSection === item.id ? 'navbar__link--active' : ''}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__avatar">
              <div className="hero__avatar-inner">
                <span>GR</span>
              </div>
            </div>
            
            <h1 className="hero__title">
              <span className="hero__greeting">Hello, I'm</span>
              <span className="hero__name">Gowsikarjun Rajasekaran</span>
            </h1>
            
            <p className="hero__subtitle">
              Senior Software Developer & Full-Stack Engineer
            </p>
            
            <p className="hero__description">
              Passionate about creating scalable web applications and innovative solutions. 
              Specialized in MERN stack with 2+ years of professional experience in building 
              high-performance applications that drive business growth.
            </p>
            
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">2+</span>
                <span className="hero__stat-label">Years Experience</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">15+</span>
                <span className="hero__stat-label">Projects Completed</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">5+</span>
                <span className="hero__stat-label">Technologies Mastered</span>
              </div>
            </div>

            <div className="hero__actions">
              <a href="mailto:creativereactapp@gmail.com" className="btn btn--primary">
                <Mail size={20} />
                Get In Touch
              </a>
              <button className="btn btn--secondary">
                <Download size={20} />
                Download Resume
              </button>
            </div>

            <div className="hero__social">
              <a href="https://linkedin.com/in/gowsikarjun-rajasekaran" className="hero__social-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/gowsikarjun" className="hero__social-link" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="mailto:creativereactapp@gmail.com" className="hero__social-link" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="tel:+919843667917" className="hero__social-link" aria-label="Phone">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Passionate Developer Building Digital Solutions</p>
          </div>

          <div className="about__content">
            <div className="about__text">
              <h3 className="about__heading">Professional Journey</h3>
              <p className="about__paragraph">
                I'm a dedicated Software Developer with over 2 years of hands-on experience in designing, 
                developing, and deploying scalable web applications. My expertise spans the entire software 
                development lifecycle, from conceptualization to deployment and maintenance.
              </p>
              <p className="about__paragraph">
                Currently working as a Senior Software Developer at Digisquares Tech, I lead the development 
                of innovative low-code platforms that empower businesses to build web, mobile, and AI-driven 
                applications efficiently. My passion lies in creating solutions that not only meet technical 
                requirements but also deliver exceptional user experiences.
              </p>
              <p className="about__paragraph">
                I believe in continuous learning and staying updated with the latest technologies and industry 
                best practices. My goal is to contribute to projects that make a meaningful impact while 
                growing as a professional in the ever-evolving tech landscape.
              </p>

              <div className="about__highlights">
                <div className="highlight-card">
                  <User className="highlight-card__icon" />
                  <div className="highlight-card__content">
                    <h4>Professional Focus</h4>
                    <p>Full-Stack Development, System Architecture, and User Experience Design</p>
                  </div>
                </div>
                <div className="highlight-card">
                  <MapPin className="highlight-card__icon" />
                  <div className="highlight-card__content">
                    <h4>Location</h4>
                    <p>Udumalpet, Tirupur, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="highlight-card">
                  <Award className="highlight-card__icon" />
                  <div className="highlight-card__content">
                    <h4>Specialization</h4>
                    <p>MERN Stack, Low-Code Platforms, API Development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__image">
              <div className="about__image-placeholder">
                <Code size={120} />
                <p>Professional Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">My Journey in Software Development</p>
          </div>

          <div className="experience__timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-item__marker">
                  <Briefcase size={20} />
                </div>
                <div className="timeline-item__content">
                  <div className="timeline-item__header">
                    <div className="timeline-item__title-group">
                      <h3 className="timeline-item__title">{exp.title}</h3>
                      <p className="timeline-item__company">{exp.company}</p>
                      <p className="timeline-item__location">
                        <MapPin size={16} />
                        {exp.location}
                      </p>
                    </div>
                    <span className="timeline-item__period">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="timeline-item__description">{exp.description}</p>
                  
                  <div className="timeline-item__technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => {
                        const techColor = getTechColor(tech);
                        return (
                          <span 
                            key={idx} 
                            className="tech-tag"
                            style={{ 
                              backgroundColor: techColor.bg, 
                              color: techColor.text,
                              transition: 'all 0.3s ease',
                              cursor: 'default'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = techColor.hover;
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = `0 4px 8px rgba(0, 0, 0, 0.2)`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = techColor.bg;
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="timeline-item__achievements">
                    <h4>Key Achievements:</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">
                          <ChevronRight size={16} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies I Work With</p>
          </div>

          <div className="skills__categories">
            {['Frontend', 'Backend', 'Tools'].map((category) => (
              <div key={category} className="skill-category">
                <div className="skill-category__header">
                  {category === 'Frontend' && <Globe color="#8d169c" className="skill-category__icon" />}
                  {category === 'Backend' && <Server color="#8d169c" className="skill-category__icon" />}
                  {category === 'Tools' && <Code color="#8d169c" className="skill-category__icon" />}
                  <h3>{category}</h3>
                </div>
                <div className="skill-category__skills">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-item__header">
                          <span className="skill-item__name">{skill.name}</span>
                          <span className="skill-item__level">{skill.level}%</span>
                        </div>
                        <div className="skill-item__bar">
                          <div 
                            className="skill-item__progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills__soft">
            <h3 className="skills__soft-title">Core Competencies</h3>
            <div className="soft-skills">
              {[
                'Problem Solving',
                'Team Leadership',
                'Project Management',
                'Technical Communication',
                'Agile Development',
                'Code Review',
                'System Architecture',
                'Performance Optimization'
              ].map((skill, index) => (
                <div key={index} className="soft-skill">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of My Best Work</p>
          </div>

          <div className="projects__grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.title}</h3>
                  <div className="project-card__links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="project-card__link" title="View Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="project-card__link" title="View Source Code">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="project-card__description">{project.description}</p>
                
                <div className="project-card__technologies">
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => {
                      const techColor = getTechColor(tech);
                      return (
                        <span 
                          key={idx} 
                          className="tech-tag tech-tag--small"
                          style={{ 
                            backgroundColor: techColor.bg, 
                            color: techColor.text,
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = techColor.hover;
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = `0 4px 8px rgba(0, 0, 0, 0.2)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = techColor.bg;
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="project-card__features">
                  <h4>Key Features:</h4>
                  <ul className="features-list">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <ChevronRight size={14} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">Academic Background</p>
          </div>

          <div className="education__timeline">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-item__marker">
                  <GraduationCap size={20} />
                </div>
                <div className="education-item__content">
                  <div className="education-item__header">
                    <div className="education-item__title-group">
                      <h3 className="education-item__degree">{edu.degree}</h3>
                      <p className="education-item__institution">{edu.institution}</p>
                      <p className="education-item__location">
                        <MapPin size={16} />
                        {edu.location}
                      </p>
                    </div>
                    <span className="education-item__period">
                      <Calendar size={16} />
                      {edu.period}
                    </span>
                  </div>
                  
                  <ul className="education-item__highlights">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <ChevronRight size={16} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's Work Together</p>
          </div>

          <div className="contact__content">
            <div className="contact__info">
              <h3 className="contact__heading">Let's Create Something Amazing</h3>
              <p className="contact__text">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind, need technical consultation, 
                or just want to discuss technology trends, I'd love to hear from you.
              </p>

              <div className="contact__details">
                <div className="contact__detail">
                  <Mail className="contact__detail-icon" />
                  <div className="contact__detail-content">
                    <span className="contact__detail-label">Email</span>
                    <a href="mailto:creativereactapp@gmail.com" className="contact__detail-value">
                      creativereactapp@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact__detail">
                  <Phone className="contact__detail-icon" />
                  <div className="contact__detail-content">
                    <span className="contact__detail-label">Phone</span>
                    <a href="tel:+919843667917" className="contact__detail-value">
                      +91-98436-67917
                    </a>
                  </div>
                </div>
                
                <div className="contact__detail">
                  <MapPin className="contact__detail-icon" />
                  <div className="contact__detail-content">
                    <span className="contact__detail-label">Location</span>
                    <span className="contact__detail-value">Udumalpet, Tirupur, Tamil Nadu</span>
                  </div>
                </div>
                
                <div className="contact__detail">
                  <Linkedin className="contact__detail-icon" />
                  <div className="contact__detail-content">
                    <span className="contact__detail-label">LinkedIn</span>
                    <a 
                      href="https://linkedin.com/in/gowsikarjun-rajasekaran" 
                      className="contact__detail-value"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      gowsikarjun-rajasekaran
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact__availability">
                <div className="availability-status">
                  <div className="availability-indicator"></div>
                  <span>Available for freelance projects</span>
                </div>
              </div>
            </div>

            <div className="contact__form">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="Your full name"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="your.email@example.com"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="form-input" 
                    placeholder="Project discussion"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    className="form-textarea" 
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn--primary btn--full">
                  <Mail size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__info">
              <div className="footer__brand">
                <span className="footer__logo">GR</span>
                <div className="footer__brand-text">
                  <span className="footer__name">Gowsikarjun Rajasekaran</span>
                  <span className="footer__title">Software Developer</span>
                </div>
              </div>
              <p className="footer__description">
                Building innovative solutions with modern technologies. 
                Let's create something amazing together.
              </p>
            </div>

            <div className="footer__links">
              <div className="footer__section">
                <h4 className="footer__section-title">Links</h4>
                <ul className="footer__section-list">
                  <li><button onClick={() => scrollToSection('about')} className="footer__link">About</button></li>
                  <li><button onClick={() => scrollToSection('experience')} className="footer__link">Experience</button></li>
                  <li><button onClick={() => scrollToSection('projects')} className="footer__link">Projects</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="footer__link">Contact</button></li>
                </ul>
              </div>

              <div className="footer__section">
                <h4 className="footer__section-title">Connect</h4>
                <ul className="footer__section-list">
                  <li>
                    <a href="https://linkedin.com/in/gowsikarjun-rajasekaran" className="footer__link" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/gowsikarjun" className="footer__link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="mailto:creativereactapp@gmail.com" className="footer__link">
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919843667917" className="footer__link">
                      Phone
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__copyright">
              <p>&copy; 2024 Gowsikarjun Rajasekaran. All rights reserved.</p>
              <p>Built with React, TypeScript & Modern CSS</p>
            </div>
            <div className="footer__social">
              <a href="https://linkedin.com/in/gowsikarjun-rajasekaran" className="footer__social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/gowsikarjun" className="footer__social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:creativereactapp@gmail.com" className="footer__social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;