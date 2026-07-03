import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';


const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToSkills) {
      setTimeout(() => {
        const element = document.querySelector('.SkillsHeading');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [location]);

  const skillDetails = {
    c: { name: 'C', description: 'A foundational procedural programming language, essential for understanding memory management, pointers, and low-level system design.', category: 'Programming Languages' },
    cpp: { name: 'C++', description: 'An extension of C supporting object-oriented programming. Extensively used for high-performance software development, system architecture, and competitive programming.', category: 'Programming Languages' },
    python: { name: 'Python', description: 'A powerful, high-level language popular for general-purpose programming, scripting, data engineering, and building artificial intelligence models.', category: 'Programming Languages' },
    javascript: { name: 'JavaScript', description: 'The dynamic language powering the modern web, enabling complex frontend interactions, single page applications, and server-side runtimes via Node.js.', category: 'Programming Languages' },
    sql: { name: 'SQL', description: 'Structured Query Language used to write database queries, design relational database schemas, and extract business intelligence from datasets.', category: 'Programming Languages' },
    
    html: { name: 'HTML5', description: 'The skeleton of the web; the standard markup language used to structure content, implement SEO features, and construct semantic page designs.', category: 'Web Technologies' },
    css: { name: 'CSS3', description: 'Cascading Style Sheets used to style web documents, enabling beautiful layouts, fluid animations, typography hierarchies, and responsive designs.', category: 'Web Technologies' },
    react: { name: 'React.js', description: 'A highly popular declarative, component-based frontend JavaScript library used for building interactive and high-performance user interfaces.', category: 'Web Technologies' },
    node: { name: 'Node.js', description: 'A server-side JavaScript runtime built on Chrome\'s V8 engine, used for writing high-throughput, non-blocking APIs and web services.', category: 'Web Technologies' },
    bootstrap: { name: 'Bootstrap', description: 'A popular CSS framework for developing responsive and mobile-first websites quickly.', category: 'Web Technologies' },
    express: { name: 'Express.js', description: 'A fast, unopinionated, minimalist web framework for Node.js, used for building APIs and web applications.', category: 'Web Technologies' },
    
    firebase: { name: 'Firebase', description: 'Google\'s Backend-as-a-Service (BaaS) platform, providing real-time databases, user authentication, static hosting, and cloud functions.', category: 'Backend, Database & Cloud' },
    rest_api: { name: 'REST APIs', description: 'Representational State Transfer APIs, providing standard endpoints and methods (GET, POST, PUT, DELETE) to allow client applications to talk to backend databases.', category: 'Backend, Database & Cloud' },
    json_storage: { name: 'JSON Storage', description: 'Utilizing JavaScript Object Notation formats for structured configuration files, lightweight client-side storage, and API payload transfer.', category: 'Backend, Database & Cloud' },
    mongodb: { name: 'MongoDB', description: 'A NoSQL document-oriented database that stores records as BSON/JSON-like documents, ideal for schema-flexible applications and high scalability.', category: 'Backend, Database & Cloud' },
    aws_lambda: { name: 'AWS Lambda', description: 'A serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.', category: 'Backend, Database & Cloud' },
    aws_ec2: { name: 'AWS EC2', description: 'Amazon Elastic Compute Cloud, providing secure, resizable compute capacity in the cloud to launch virtual servers, configure security and networking, and manage storage.', category: 'Backend, Database & Cloud' },
    aws_s3: { name: 'AWS S3', description: 'Amazon Simple Storage Service, an object storage service offering industry-leading scalability, data availability, security, and performance for backups and static files.', category: 'Backend, Database & Cloud' },
    
    sap_s4hana: { name: 'SAP S/4HANA', description: 'SAP\'s ERP suite utilizing the high-speed HANA in-memory database to streamline enterprise resource planning, financial, and supply chain operations.', category: 'SAP Skills' },
    sap_mm: { name: 'SAP MM (Materials Management)', description: 'A key module in SAP ERP covering procurement, goods receipt, material tracking, vendor invoice verification, and inventory control.', category: 'SAP Skills' },
    sap_sd: { name: 'SAP SD (Sales and Distribution)', description: 'An essential module in SAP ERP that manages customer quotations, sales orders, shipping, billing, and distribution logistics.', category: 'SAP Skills' },
    sap_pp: { name: 'SAP PP (Production Planning)', description: 'An SAP ERP module designed to plan and execute manufacturing processes, track shop-floor activities, and manage bill of materials.', category: 'SAP Skills' },
    material_master: { name: 'Material Master', description: 'The central repository of all material-specific data in SAP, storing configurations for sales, purchasing, inventory, and production planning.', category: 'SAP Skills' },
    vendor_master: { name: 'Vendor Master', description: 'The centralized database in SAP containing complete information on external suppliers, purchasing histories, payment terms, and delivery policies.', category: 'SAP Skills' },
    inventory_management: { name: 'Inventory Management', description: 'The module within SAP MM that handles stock movements (goods issues, goods receipts, transfer postings) and maintains accurate warehouse stock data.', category: 'SAP Skills' },
    
    git: { name: 'Git', description: 'The industry-standard distributed version control system used to track file changes, manage branches, and collaborate in teams.', category: 'Developer Tools' },
    github: { name: 'GitHub', description: 'A cloud-based Git repository hosting service that supports code collaboration, version control, project management, and automated CI/CD workflows.', category: 'Developer Tools' },
    vscode: { name: 'VS Code', description: 'Visual Studio Code, an incredibly lightweight yet powerful source code editor featuring an extensive library of debugging, syntax, and Git extensions.', category: 'Developer Tools' },
    virtualization: { name: 'Virtualization', description: 'The technology of creating virtual instances of computer systems, storage, and networks, enabling isolation, resource optimization, and hypervisor-driven environments.', category: 'Developer Tools' }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["c", "cpp", "python", "javascript", "sql"]
    },
    {
      title: "Web Technologies",
      skills: ["html", "css", "bootstrap", "react", "node", "express"]
    },
    {
      title: "Backend, Database & Cloud",
      skills: ["firebase", "rest_api", "json_storage", "mongodb", "aws_lambda", "aws_ec2", "aws_s3"]
    },
    {
      title: "SAP Skills",
      skills: ["sap_s4hana", "sap_mm", "sap_sd", "sap_pp", "material_master", "vendor_master", "inventory_management"]
    },
    {
      title: "Developer Tools",
      skills: ["git", "github", "vscode", "virtualization"]
    }
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hello, my name is <b>Gandham SriRam</b> and I am a passionate developer from India.
            I'm a <b>Full Stack Developer</b> and a third-year student pursuing a <b>B.Tech in Computer Science and Engineering</b> with a specialization in <b>Distributed & Cloud Computing</b> at SRM University, Andhra Pradesh. <br/><br/>
            I have a remote internship as a <b>GenAI Intern</b> at <b>EduBot</b>, where I focused on prompt engineering, AI validation workflows, and personalized learning frameworks. <br/><br/>
            I enjoy building clean, robust, and scalable solutions that bridge frontend user experiences with performant backends. I'm always eager to explore new tech stacks and collaborate on interesting projects.
          </p>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <h4>9.1</h4>
              <p>B.Tech CGPA</p>
            </div>
            <div className="metric-card">
              <h4>8 Weeks</h4>
              <p>GenAI Internship</p>
            </div>
            <Link to="/Resume" state={{ scrollToCertifications: true }} className="metric-card-link">
              <div className="metric-card clickable">
                <h4>4+</h4>
                <p>Certifications</p>
              </div>
            </Link>
            <div className="metric-card">
              <h4>2027</h4>
              <p>Graduation Year</p>
            </div>
          </div>
        </div>

        <div className="about-illustration-container">
          <Tilt>
            <img className="Avatar" src={Avatar} alt="Gandham SriRam" />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Technical Skills</h1>
      <p className='SkillsSubtitle'>Click on any skill to see what it is!</p>
      
      <div className='skills-categories'>
        {skillCategories.map((cat, idx) => (
          <div key={idx} className='skills-category-section'>
            <h3 className='skills-category-title'>{cat.title}</h3>
            <div className='skills'>
              {cat.skills.map((skill) => (
                <Skills 
                  key={skill} 
                  skill={skill} 
                  onClick={() => handleSkillClick(skill)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className='skills-modal-overlay' onClick={closeModal}>
          <div className='skills-modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='skills-modal-close' onClick={closeModal}>&times;</button>
            <div className='skills-modal-header'>
              <span className='skills-modal-category'>{skillDetails[selectedSkill].category}</span>
              <h2 className='skills-modal-title'>{skillDetails[selectedSkill].name}</h2>
            </div>
            <div className='skills-modal-body'>
              <div className={`skills-modal-icon-container`}>
                <Skills skill={selectedSkill} />
              </div>
              <p className='skills-modal-description'>
                {skillDetails[selectedSkill].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default About;