import React from "react";
import SectionHeader from "../Reusable/SectionHeader";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
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
    <motion.section id="about" name="about" ref={ref}
       variants={boxVariant}
       initial="hidden"
       animate={control}>
      <SectionHeader title="About me" />
    
        <p className="long-text">
    
          I'm a front-end web developer with a background in C++ and C#.
          Passionate about computers since my teenage years, I have been a
          "Self-Taught" programmer since I was 14. I started with low level
          programming language which gave me strong critical thinking skills to
          help me solve my problems. I then started to explore other programming
          languages for fun as a hobby. Having completed a DEP in Ore
          Extraction, I worked in mining industry for 2 years.
          <br />
          <br /> As I was living in Abitibi, there were not many programs
          offered in this field . I then discovered an AEC in Front-End
          Development available remotely, so I quit my job to do what I and
          truly enjoy. As the places were limited, I learned by myself
          Html/Css/Javascript without any "background" in web development. I
          built a portfolio and I was selected! At that time, I discovered my
          passion for web development.
        </p>
    </motion.section>
  );
}

export default About;
