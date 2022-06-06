import React from "react";

export default function ProjectCard({title, src, link, gitlink, technologies, icons}) {
  const handleClick = () =>{
    window.open(gitlink)
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h2>{title}</h2>
          <span className="contract-type">Freelance contract</span>
        </div>
        <div className="card-inner-container">
          <img className="card-img" src={src} height="250" alt="work" onClick={ () => window.open(link)}/>
          <ul className="card-list">
            {/* {technologies.map((item, index) => (
              <li key={index}>{item}</li>
            ))} */}
            
            {icons && icons.map((item, index) => (
              <>
                <img src={item.default} key={index} width="60" className="techno-icon"/>
              </>
            ))}
            
          </ul>
          <div className="container">
            <button className="btn info-btn" onClick={handleClick}>More info</button>
          </div>

          <div className="card-text d-none">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
