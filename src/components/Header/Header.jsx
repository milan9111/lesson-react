import React from "react";
import '../../styles/styles.css';

const Header = () => {
  return(
    <header className="header">
      <div className="header__container">  
          <div className="header__content">
            <div className="header__logo">
                Kelvin<span>.</span>
            </div>
            <nav className="header__navigation">
              <ul>
                <li className="navigation__item">
                    <a href="#">Home</a> 
                </li>
                <li className="navigation__item">
                    <a href="#">Work</a>
                </li>
                <li className="navigation__item">
                    <a href="#">Services</a> 
                </li>
                <li className="navigation__item">
                    <a href="#">About</a> 
                </li>
                <li className="navigation__item">
                    <a href="#">Contact</a> 
                </li>
              </ul>
            </nav>
          </div>
      </div>
    </header>
  );
}

export default Header;