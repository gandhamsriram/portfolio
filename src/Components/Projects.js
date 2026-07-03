import React, { useState } from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projectsData = [
    { name: "Hostel Booking System", category: "Full Stack" },
    { name: "AI-Powered Cloud Chatbot Using AWS and Hugging Face", category: "Cloud" },
    { name: "Loan Prediction System Using Machine Learning", category: "ML" },
    { name: "Expense Tracker Web Application", category: "Full Stack" },
    { name: "Live Stock Trading Simulation", category: "Full Stack" },
  ];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>

      <div className="project-filter-container">
        {["All", "Full Stack", "ML", "Cloud"].map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat} Projects
          </button>
        ))}
      </div>

      <div className="project">
        {filteredProjects.map((p, index) => (
          <ProjectBox key={index} projectName={p.name} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
