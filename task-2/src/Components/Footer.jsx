import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-container footer-container col-12">
        <div className="footer-content grid col-5">
          <h2 className="footer-heading">Let's Work Together</h2>
          <p className="footer-text">
            I'm always excited to team up with visionary organizations or simply chat about design ideas. Want to brainstorm ideas together? I'd love to chat! Feel free to reach out at{' '}
            <a 
              href="mailto:iamneginasem@gmail.com" 
              className="footer-link"
            >
              iamneginasem@gmail.com
            </a>
          </p>
        </div>
        
        <div className="social-icons grid col-7">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a 
            href="mailto:iamneginasem@gmail.com"
            className="social-icon"
            aria-label="Email"
          >
            <FaEnvelope size={32} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 