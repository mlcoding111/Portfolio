import React from "react";

import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io5';
import {Link} from 'react-scroll'
import * as Scroll from 'react-scroll'

export default function Footer() {
  var scroll    = Scroll.animateScroll;
  const scrollTo = (target) =>{
    scroll.scrollTo(target)
  }

  const scrollToTop = () =>{
    scroll.scrollToTop();
  }
  return (

    <footer>      

      <div className="mid-footer">
          <h3>Michael <span id="brand-opacity">Lacroix</span></h3>
          <p>A passionate developer always ready for more challenges.</p>
          <ul className="social-media-list">
            <li><a href="https://github.com/mlcoding111" target="_blank"><IoLogoGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/michael-lacroix26/" target="_blank"><IoLogoLinkedin /></a></li>
            <li><a href="https://www.facebook.com/michaelkenny.lacroix/" target="_blank"><IoLogoFacebook /></a></li>
          </ul>
      </div>

      <div className="footer-bottom ">
        <span className="copyright">All Rights Reserved &copy; 2022</span>

        <p className="footer-info">
            <b>Designed & Built by ML<span id="brand-opacity">Web</span></b>
            <br />
        </p>

        <ul className="footer-nav">
        <li>
            <Link to="header" spy={true} smooth={true} onClick={scrollToTop}>Home</Link>
          </li>
          <li >
          <Link to="about" spy={true} smooth={true} onClick={scrollTo('about')} offset={-100}>About</Link>
          </li>
          <li >
          <Link to="works" spy={true} smooth={true} onClick={scrollTo('works')} offset={-100}>Projects</Link>
          </li>
          <li >
          <Link to="contact" spy={true} smooth={true} onClick={scrollTo('contact')} offset={-100}>Contact</Link>
          </li>
      </ul>
      </div>


  </footer>
  );
}
