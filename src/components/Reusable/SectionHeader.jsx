import React from 'react'
import {  useInView  } from 'framer-motion'

export default function SectionHeader({title}) {

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <h2 ref={ref}>
        <svg
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
          height="3"
          viewBox="0 0 97 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-1"
            x2="97"
            y2="-1"
            transform="matrix(1 6.4328e-05 -0.000107733 1 0 2)"
            stroke="#e31b6d"
            strokeWidth="2"
          />
        </svg>
       {title}
    </h2> 
  )
}
