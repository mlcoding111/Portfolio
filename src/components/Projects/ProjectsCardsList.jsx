import React from 'react'
import Work from './ProjectCard'

import {data} from './data.js'

export default function ProjectCardList() {

  return (
    <div>
      <div className="projects-list">
        {data.map((item, i) => (
            <Work item={item} title={item.title} src={item.src} link={item.website} gitlink={item.github} technologies={item.technologies} icons={item.icons} key={i}/>
        ))}
      </div>
    </div>
  )
}
