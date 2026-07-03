import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BsDownload } from "react-icons/bs";
import { FiAward, FiExternalLink, FiEye, FiEyeOff } from "react-icons/fi";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const location = useLocation();
  const [wid, setwid] = useState(window.innerWidth);
  const [showResume, setShowResume] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    if (location.state && location.state.scrollToCertifications) {
      setTimeout(() => {
        const element = document.querySelector('.certifications-heading');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [location]);

  const handleResize = () => {
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  const certifications = [
    {
      title: "Generative AI Internship Completion",
      issuer: "EduBot",
      date: "June 2026",
      link: process.env.PUBLIC_URL + "/certificates/Internship_Completion_Certificate.pdf",
      description: "Successfully completed prompt engineering, AI validation workflows, and personalized educational assistant workflows."
    },
    {
      title: "Oracle Certified Professional: Java SE",
      issuer: "Oracle",
      date: "2025",
      link: process.env.PUBLIC_URL + "/certificates/Java_oracle.pdf",
      description: "Validated expertise in Java SE, class design, exception handling, data structures, concurrency, and I/O frameworks."
    },
    {
      title: "MongoDB Certified Associate Developer",
      issuer: "MongoDB",
      date: "2026",
      link: process.env.PUBLIC_URL + "/certificates/MongoDB_Associate_Developer.pdf",
      description: "Certified in building high-performance, document-based applications with MongoDB schema design and query optimization."
    },
    {
      title: "SAP Certified Application Associate",
      issuer: "SAP",
      date: "2025",
      link: process.env.PUBLIC_URL + "/certificates/SAP_Certificate.pdf",
      description: "Certified training in SAP ERP modules, including MM, SD, and PP configurations, materials master, and master data."
    }
  ];

  return (
    <div className='ResumePage'>
      <h1 className='section-title' style={{ marginTop: '30px', marginBottom: '10px' }}>Credentials & Resume</h1>
      <p className='SkillsSubtitle' style={{ marginBottom: '40px' }}>View my professional resume and official course certifications</p>

      {/* Resume Section Wrapper */}
      <div className='resume-section-card'>
        <div className='resume-card-info'>
          <div className='resume-icon-glowing'>
            <FiAward />
          </div>
          <h2>Professional Resume</h2>
          <p>Read or download my detailed professional resume outlining my technical skills, internship experiences, and project history.</p>
        </div>

        <div className='resume-card-actions'>
          <button 
            className='resume-action-btn btn-view' 
            onClick={() => setShowResume(!showResume)}
          >
            {showResume ? <><FiEyeOff /> Close Resume Preview</> : <><FiEye /> View Resume</>}
          </button>
          <a href={pdf} target='_blank' download="Gandham_SriRam_Resume" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button className='resume-action-btn btn-download-resume'>
              <BsDownload /> Download Resume
            </button>
          </a>
        </div>

        {showResume && (
          <div className='resume-viewer-inline animate-fade-in'>
            <Document file={pdf} className="resumeview">
              <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
            </Document>
          </div>
        )}
      </div>

      {/* Certifications Section */}
      <h2 className='certifications-heading'>My Certifications</h2>
      <div className='certifications-grid'>
        {certifications.map((cert, idx) => (
          <div key={idx} className='cert-card' onClick={() => setActiveCert(cert)}>
            <div className='cert-icon-container'>
              <FiAward />
            </div>
            <div className='cert-content'>
              <span className='cert-date'>{cert.date}</span>
              <h3>{cert.title}</h3>
              <span className='cert-issuer'>{cert.issuer}</span>
              <p>{cert.description}</p>
              <button className='cert-view-btn'>
                <FiEye /> View Credentials
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Viewer Modal */}
      {activeCert && (
        <div className='cert-modal-overlay' onClick={() => setActiveCert(null)}>
          <div className='cert-modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='cert-modal-close' onClick={() => setActiveCert(null)}>&times;</button>
            <div className='cert-modal-header'>
              <span className='cert-modal-subtitle'>{activeCert.issuer} • {activeCert.date}</span>
              <h2 className='cert-modal-title'>{activeCert.title}</h2>
            </div>
            <div className='cert-modal-body'>
              <div className='cert-preview-container'>
                <iframe 
                  src={`${activeCert.link}#toolbar=0&navpanes=0`} 
                  title={activeCert.title} 
                  className="cert-iframe-preview" 
                />
                <a 
                  href={activeCert.link} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='cert-external-link-btn'
                >
                  Open in New Tab <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Resume;