import React from "react";
import '../../styles/styles.css';
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return(
    <header className="header">
      <div className="header__container">  
          <div className="header__content">
            <div className="header__logo">
                <Link to="#">Kelvin<span>.</span></Link>
            </div>
            <nav className="header__navigation">
              <ul>
                <li className="navigation__item">
                    <NavLink to='/'>Home</NavLink> 
                </li>
                <li className="navigation__item">
                    <NavLink to='#'>Work</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to='#'>Services</NavLink> 
                </li>
                <li className="navigation__item">
                    <NavLink to="#">About</NavLink> 
                </li>
                <li className="navigation__item">
                    <NavLink to='#'>Contact</NavLink> 
                </li>
              </ul>
            </nav>
          </div>
      </div>
    </header>
  );
}

export default Header;