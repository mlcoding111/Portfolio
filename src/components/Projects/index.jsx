import React from 'react'
import Work from './ProjectCard'

import {data} from './data.js'

export default function Projects() {

  return (
    <>
      <div className="projects-list">
        {data.map((item, i) => (
            <Work item={item} type={item.type} title={item.title} src={item.src} link={item.website} gitlink={item.github} technologies={item.technologies} icons={item.icons} key={i}/>
        ))}
      </div>
    </>
  )
}
