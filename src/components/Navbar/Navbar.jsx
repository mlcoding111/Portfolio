import React from "react";
import * as Scroll from 'react-scroll';
import { Link,  animateScroll as scroll } from 'react-scroll'

export default function NavBar() {
  var scroll = Scroll.animateScroll;
  // Handle mobile nav behaviors
  const toggleOpen = () => {
    
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const visibility = menu.getAttribute('data-visible');

    if(visibility === "false"){
        menu.setAttribute('data-visible', "true")
        hamburger.setAttribute('aria-expanded', "true")    
    }else{
        menu.setAttribute('data-visible', "false")
        hamburger.setAttribute('aria-expanded', "false")       
      }
    hamburger.classList.toggle('open')
  };

  const scrollTo = (target) =>{
    scroll.scrollTo(target)
  }

  const scrollToTop = () =>{
    scroll.scrollToTop();
  }

  return (
    <>
        <nav>
      <div className="container">
        <h1>ML<span id="brand-opacity">Web</span></h1>

        <ul className="menu" data-visible="false">
          <li className="nav-item">
            <Link to="header" spy={true} smooth={true} onClick={scrollToTop}>Home</Link>
          </li>
          <li className="nav-item">
          <Link to="about" spy={true} smooth={true} onClick={scrollTo('about')} offset={-100}>About</Link>
          </li>
          <li className="nav-item">
          <Link to="works" spy={true} smooth={true} onClick={scrollTo('works')} offset={-100}>Projects</Link>
          </li>
          <li className="nav-item">
          <Link to="contact" spy={true} smooth={true} onClick={scrollTo('contact')} offset={-100}>Contact</Link>
          </li>
        </ul>

        <button
          className="hamburger"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={toggleOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
      {/* Scrolled nav */}
    </>
  );
}
