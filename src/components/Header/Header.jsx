import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import me from '../../assets/me.jpg'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'

export default function Header() {
  var scroll    = Scroll.animateScroll;

  const scrollTo = (target) =>{
    scroll.scrollTo(target)
  }

  const scrollToTop = () =>{
    scroll.scrollToTop();
  }
  return (
    <header>
      <div className="hero-img">
        <img src={me} height="280" id="avatar" />
      </div>

      <div className="hero-description">
        <h5>Hi, my name is</h5>
        <h1 id="name-h">Michael Lacroix.</h1>
        <h2 id="what">I build and design websites.</h2>

        <p className="long-text">
          I’m a Front-End developer passionate about programming since a young
          age. I have good knowledge about back-end to setup basic database
          structure using node js and express js.
        </p>

        <div className="hero-btn-wrapper">
        <button id="work-btn" className="btn" ><Link to="works" spy={true} smooth={true} onClick={scrollTo('works')} offset={-100}>Checkout my work!</Link></button>
          <button id="resume-btn" className="btn" onClick={() => window.open("https://docs.google.com/document/d/1FJnO_tW-DfhVMMY9SW9KY2nLflMWG5iBihob_w-oRWs/edit?usp=sharing", "_blank")}>Resumer</button>
        </div>
      </div>
    </header>
  )
}
