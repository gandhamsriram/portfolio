import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "Hostel Booking System Desc": "A full-stack hostel booking platform built using React.js, Node.js, Express.js, and MongoDB. Implements JWT-based authentication, secure room booking, role-based access control, Socket.IO for real-time notifications, and RESTful APIs.",
    "Hostel Booking System Github": "https://github.com/gandhamsriram/hbs-",

    "AI-Powered Cloud Chatbot Using AWS and Hugging Face Desc": "Built an AI chatbot using Amazon Lex, AWS Lambda, and Hugging Face. Implemented a serverless cloud architecture using AWS services, and developed a responsive web interface for real-time user interaction.",
    "AI-Powered Cloud Chatbot Using AWS and Hugging Face Github": "https://github.com/gandhamsriram/cloud-project",

    "Loan Prediction System Using Machine Learning Desc": "A machine learning project implementing SVM, Decision Tree, KNN, and Random Forest models to predict loan approvals. Performs model evaluations based on accuracy, precision, recall, and F1-score to identify the highest performing model.",
    "Loan Prediction System Using Machine Learning Github": "https://github.com/gandhamsriram/mlproject",

    "Expense Tracker Web Application Desc": "A responsive expense tracking web application built using React.js. Implements JSON-based local storage for persistent data management and uses a modular, component-based UI architecture.",
    "Expense Tracker Web Application Github": "https://github.com/gandhamsriram/fsd1",

    "Live Stock Trading Simulation Desc": "Developed a full-stack stock trading simulation platform using React.js, Node.js, Express.js, and MongoDB. Implemented real-time stock price updates, buy/sell trading, portfolio tracking, and market analytics. Integrated Socket.IO for WebSocket-based communication, live market feeds, and automated bot trading. Built secure REST APIs with JWT authentication and responsive dashboards.",
    "Live Stock Trading Simulation Github": "https://github.com/gandhamsriram/fsd2",
  };

  const tags = {
    "Hostel Booking System": ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    "AI-Powered Cloud Chatbot Using AWS and Hugging Face": ["Amazon Lex", "AWS Lambda", "Hugging Face", "Serverless"],
    "Loan Prediction System Using Machine Learning": ["Python", "Machine Learning", "SVM", "Random Forest"],
    "Expense Tracker Web Application": ["React.js", "CSS3", "Local Storage"],
    "Live Stock Trading Simulation": ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"]
  };

  let show = '';
  if (desc[projectName + ' Github'] === "") {
    show = "none";
  }

  const projectTags = tags[projectName] || [];

  return (
    <div className='projectBox'>
      <div>
        <h3>{projectName}</h3>
        <p>{desc[projectName + ' Desc']}</p>
        
        <div className="tech-badges">
          {projectTags.map((tag, idx) => (
            <span key={idx} className="tech-badge">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a style={{ display: show, width: '100%' }} href={desc[projectName + ' Github']} target='_blank' rel="noreferrer">
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;