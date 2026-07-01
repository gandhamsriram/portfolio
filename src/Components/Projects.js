import React from "react";
import ProjectBox from "./ProjectBox";
import img1 from "../images/opuluxe-small.png";
const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectName="Hostel Booking System" />
        <ProjectBox projectName="AI-Powered Cloud Chatbot Using AWS and Hugging Face" />
        <ProjectBox projectName="Loan Prediction System Using Machine Learning" />
        <ProjectBox projectName="Expense Tracker Web Application" />
      </div>
    </div>
  );
};

export default Projects;
