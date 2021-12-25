import React from "react";
import '../../styles/styles.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__container">  
          <div className="footer__content">
            <div className="footer__text">
                © Copyright Jenn Pereira 2020. All Rights Reserved. 
            </div>
            <nav className="footer__social-networks">
              <ul>
                <li className="social-networks__item">
                    <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link> 
                </li>
                <li className="social-networks__item">
                    <Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                </li>
                <li className="social-networks__item">
                    <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link> 
                </li>
                <li className="social-networks__item">
                    <Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link> 
                </li>
              </ul>
            </nav>
          </div>
      </div>
    </footer>
  );
}

export default Footer;