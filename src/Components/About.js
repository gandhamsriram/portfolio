import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';


const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hello, my name is <b>Gandham Sriram</b> and I am a passionate developer from India.
            I'm a <b>Full Stack Developer</b> and a third-year student pursuing a <b>B.Tech in Computer Science and Engineering</b> at SRM University, Andhra Pradesh. <br/><br/>
            I recently completed a remote internship as a <b>GenAI Intern</b> at <b>EduBot</b>, where I focused on prompt engineering, AI validation workflows, and personalized learning frameworks. <br/><br/>
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
            <div className="metric-card">
              <h4>4+</h4>
              <p>Certifications</p>
            </div>
            <div className="metric-card">
              <h4>2027</h4>
              <p>Graduation Year</p>
            </div>
          </div>
        </div>

        <div className="about-illustration-container">
          <Tilt>
            <img className="Avatar" src={Avatar} alt="Gandham Sriram" />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Technical Skills</h1>
      <div className='skills'>
        <Skills skill='c'/>
        <Skills skill='cpp'/>
        <Skills skill='python'/>
        <Skills skill='java'/>
        <Skills skill='javascript'/>
        <Skills skill='html'/>
        <Skills skill='css'/>
        <Skills skill='react'/>
        <Skills skill='node'/>
        <Skills skill='express'/>
        <Skills skill='mongodb'/>
        <Skills skill='firebase'/>
        <Skills skill='git'/>
        <Skills skill='github'/>
        <Skills skill='postman'/>
        <Skills skill='figma'/>
      </div>
    </>
  )
}

export default About;