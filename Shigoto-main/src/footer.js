import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer1">
      <div className="contact">
        <span className="icon">&#128100;</span> CONTACT US
        <div className="social-icons">
          <a href="https://www.facebook.com/shigoto" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/shigoto" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/shigoto" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/shigoto" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="content-info">
        Content of this website is designed, developed, hosted, owned, and managed by Shigoto.
      </div>
      <div className="links">
        <a href="/aboutus">About Us</a>
        <a href="#privacy">Privacy</a>
        <a href="#disclaimer">Disclaimer</a>
      </div>
      {/* <div className="copyright-info">
        &copy; 2024 Copyright: Shigoto
      </div>
      <div className="footer-bottom">
        Copyright All Rights Reserved. Shigoto
      </div> */}
    </footer>
  );
};

export default Footer;
