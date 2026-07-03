import React from "react";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import SriramPhoto from "../images/Sriram_Professional.jpg";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { FaChevronRight, FaLaptopCode, FaRobot } from "react-icons/fa6";
import { BiTrendingUp } from "react-icons/bi";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Gandham SriRam</b>
          </h1>
          <Typed />
          
          <div className="hero-ctas">
            <Link to="/Project" className="btn-primary">
              View Projects <FaChevronRight />
            </Link>
            <Link to="/About" className="btn-secondary">
              About Me <BsPerson />
            </Link>
          </div>
        </div>

        <Tilt>
          <img src={SriramPhoto} alt="Gandham SriRam" className="illustration home-avatar" />
        </Tilt>
      </div>

      <div className="what-i-do-section">
        <h2 className="section-title">What I Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaLaptopCode />
            </div>
            <h3>Full-Stack Dev</h3>
            <p>
              Building responsive, modern web applications using React.js, Node.js, Express, and MongoDB. Writing modular, reusable components and secure APIs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaRobot />
            </div>
            <h3>Generative AI</h3>
            <p>
              Designing and optimizing AI prompts for personalized learning. Integrating LLM features and evaluating GenAI workflows for reliability.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <BiTrendingUp />
            </div>
            <h3>Machine Learning</h3>
            <p>
              Developing predictive classification models like Random Forest, SVM, and KNN. Selecting optimal architectures via performance evaluation metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
