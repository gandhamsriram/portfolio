import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import footerLogo from "../images/footer-logo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className='footer-logo-container'>
        <img src={footerLogo} className='footer-logo' alt="Logo" />
      </div>
      <h4>Developed by Gandham Sriram</h4>
      
      <div className='footerLinks'>
        <a href="https://github.com/gandhamsriram" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/gandham-sriram-1b7789291/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:gandhamsriramguptha@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer;