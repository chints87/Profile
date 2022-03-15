import React from "react";
import TypeWriter from "react-typewriter";
import styles from '../styles/Header.module.css';
import SlideShow from './SlideShow';

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var description = data.description;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
    var slideshow =  <SlideShow slides={data.sections} type="Landing Page"/>
    
  
  }

  return (
    <header id="home" className={styles.homePage}>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className={styles.nav}>
          <div className={styles.navItems}>
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </div>
          <div className={styles.socialIcons}>
             <ul className="social">{networks}</ul>
          </div>
          
        </ul>
      </nav>

      <div className={styles.description}>        
          <h1 className={styles.companyName}>
            <TypeWriter typing={0.5}>{name ? `${name}` : null}</TypeWriter>
          </h1>
          <h3 className={styles.subTitle}>
            {description}
          </h3>   
      </div>
      {slideshow}
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
