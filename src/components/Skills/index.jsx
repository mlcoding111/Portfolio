import React from "react";
import SectionHeader from "../Reusable/SectionHeader";

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
  
function Skills() {
  return (
    <section>
      <SectionHeader title="My skills" />
      <div className="container">
        <div className="skills-showcase">
          {Object.keys(images).map((item, index) => {
            return (
              <div className="col item" key={index}>
                <img src={images[item]} />
                <p>{item.slice(0, -4)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
