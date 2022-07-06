import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import NavBar from "../Navbar";
import About from "../../components/About";

import { Element } from "react-scroll";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Works from "../../components/Works";

const Home = () => {
  return (
    <>
      <div id="top-message">
        <p></p>
      </div>

      <NavBar />
      <Header />

      <main>
        <Element name="about" className="element">
          <About />
        </Element>

        <Element name="skills" className="element">
          <Skills />
        </Element>

        <Element name="works" className="element">
          <Works />
        </Element>

        <Element name="contact" className="element">
          <Contact />
        </Element>
      </main>

      <Footer />
    </>
  );
};

export default Home;
