import React from 'react'

export default function SectionHeader({title}) {
  return (
    <h2>
        <svg
          width="97"
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
