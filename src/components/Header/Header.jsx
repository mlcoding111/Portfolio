import React from 'react'
import me from '../../assets/me.jpg'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
export default function Header() {
  var scroll    = Scroll.animateScroll;

  const scrollTo = (target) =>{
    scroll.scrollTo(target)
  }

  const scrollToTop = () =>{
    scroll.scrollToTop();
  }
  const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

  return (
    <header>
      <motion.div 
        className="hero-img">
        <img src={me} height="280" id="avatar" />
      </motion.div>
      
      <div className="hero-description">
        <h5>Hi, my name is</h5>
        <h1 id="name-h">Michael Lacroix.</h1>
        <h2 id="what">I build and design websites.</h2>

        <p className="long-text">
          I’m a Front-End developer passionate about programming since a young
          age, always looking to become a better developer and push my skills further.
          
          {/* I have good knowledge about back-end to setup basic database
          structure using node js and express js. */}
        </p>

        <div className="hero-btn-wrapper">
        <motion.button 
            id="work-btn" 
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
          <Link to="works" spy={true} smooth={true} onClick={scrollTo('works')} offset={-100}>Checkout my work!</Link>
        </motion.button>
          <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              id="resume-btn" 
              className="btn" 
              onClick={() => window.open("https://docs.google.com/document/d/1FJnO_tW-DfhVMMY9SW9KY2nLflMWG5iBihob_w-oRWs/edit?usp=sharing", "_blank")}
          >                
            Resume
          </motion.button>
        </div>
      </div>
    </header>
  )
}
