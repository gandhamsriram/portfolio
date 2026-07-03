import React from 'react';
import {FaGithub, FaLinkedin, FaPhone} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Gandham SriRam</h4>
      
      <div className='footerLinks'>
        <a href="https://github.com/gandhamsriram" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/gandham-sriram-1b7789291/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:gandhamsriramguptha@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
        <a href='tel:9640994234' title='Call me: +91 9640994234'><FaPhone/></a>
      </div>
    </footer>
  )
}

export default Footer;