import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import NavBar from "../Navbar/Navbar.jsx";
import SectionHeader from "../../components/Reusable/SectionHeader.jsx";
import Projects from '../../components/Projects/ProjectsCardsList'


import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll'
import About from "../../components/About/about.jsx";



function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/skills", false, /\.(png|jpe?g|svg)$/)
);

const Home = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const boxVariant = {
      visible: { opacity: 1, scale: 1, x: 0, transition: { duration: .5 } },
      hidden: { opacity: 0, scale: 0, x: 500 },
  }

  React.useEffect(() => {
      if (inView) {
        control.start("visible");
      }else{
          control.start("hidden")
      }
  }, [control, inView]);

  return (
    <>
      <div id="top-message" >
        <p>In construction..</p>
      </div>
      <NavBar/>
      <Header />

      <main >

      <Element name="about" className="element" >
        <About />
      </Element>

      <Element name="skills" className="element">
        <section >
          <SectionHeader title="My skills" />
          <div className="container">
            <div className="skills-showcase">
              {Object.keys(images).map((item, index) => {
                return (
                  <div className="col item" key={index}>
                    <img src={images[item]} />
                    <p>{item.slice(0,-4)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        </Element>

        <Element name="works" className="element">
          <section id="works">
            <SectionHeader title="Latest works" />
              <Projects />
          </section>
        </Element>

        <Element name="contact" className="element">

          <section id="contact">
            <h2>Let's get in touch!<hr/></h2>
            

              <p className="long-text">
                I’m currently looking for any new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I’ll try
                my best to get back to you!
              </p>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:kennycodes@hotmail.com"
                >
                  <button className="btn">Send a message</button>
              </motion.a>
            </section>
            
        </Element>
      </main>

      <Footer />
    </>
  );
};

export default Home;
