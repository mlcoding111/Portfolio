import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
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
  )
}

export default Contact