import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import NavBar from "../Navbar/Navbar.jsx";
import SectionHeader from "../Reusable/SectionHeader.jsx";
import Projects from '../Projects/ProjectsCardsList'

import { motion } from 'framer-motion'

import { Element } from 'react-scroll'

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

const boxVariant = {
  visible: { opacity: 1, scale: 2},
  hidden: { opacity: 0, scale: 0}
}
const Home = () => {
   
  return (
    <>
      <div id="top-message">
        <p>In construction..</p>
      </div>
      <NavBar/>
      <Header />

      <main>

      <Element name="about" className="element">
        <section id="about" name="about">
          <SectionHeader title="About me" />
          <p className="long-text">

          {/* I'm a front-end developer with a good background with computer in general. I started fixing and building computers at the age of 14. I started picking an interest in software developement and trying to understand how they were built. I started learning C++ and C# which gave me a very good understanding of the basics of programming. During my teenage years, I played around learning different programming languages and making little games for fun and it soon became a passion. 
Unfortunately, I never thought It would become a job since I had difficulty in school and I lived in a small town in Abitibi-Temiscamingue where there were a lack of opportunity in this field. I left school to complete a DEP in Ore Extraction to work in the mining industry. After working for 2 years, I felt like I was not loving my job depsite of the good salary. I started to look for any programs about programming offered remotely.
 I found a AEC in front-end developement offered in Cegep de Trois-Rivières, but the places were very limited and there were about 150 demands for only 35 slots. They were also asking to have a DES completed which I did not have. Depsite all the odds, I quit my job and went back to a low salary job and started to learn Javascript/Html/Css by myself and built a portfolio of projects within a month then I sent my projects. I was then selected and I completed the 2 years program and developed a passion for web developement. After I graduated, I wanted to open the doors of possibilities and went back to school to finish my DES. 
I now have my DES and my AEC, ready to push  forwards and learn new technologies alongside a good team and become a better programmer. */}

            I'm a front-end web developer with a background in C++ and C#.
            Passionate about computers since my teenage years, I have been a
            "Self-Taught" programmer since I was 14. I started with low level
            programming language which gave me strong critical thinking skills
            to help me solve my problems. I then started to explore other
            programming languages for fun as a hobby. Having completed a DEP in
            Ore Extraction, I worked in mining industry for 2 years.<br/><br/> As I was living
            in Abitibi, there were not many programs offered in this field . I
            then discovered an AEC in Front-End Development available remotely,
            so I quit my job to do what I and truly enjoy. As the places were
            limited, I learned by myself Html/Css/Javascript without any
            "background" in web development. I built a portfolio and I was
            selected! At that time, I discovered my passion for web development.
          </p>
        </section>
      </Element>

      <Element name="skills" className="element">
        <section
          id="skills-section"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
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
