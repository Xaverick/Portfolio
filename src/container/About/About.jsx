import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import "./About.scss"
import {images} from '../../constants'
import {AppWrap,MotionWrap} from '../../Wrapper'

const abouts = [
  {title: "Backend Developer", description: "I am passionate about writing clean and efficient code to create scalable and secure web applications that deliver exceptional performance and user experiences.", imgUrl: images.about01},
  {title: "MERN Developer", description: " I thrive on building robust web applications using the MongoDB, Express.js, React, and Node.js stack, employing my skills in both front-end and back-end development to deliver scalable and efficient solutions.", imgUrl: images.about04},
  {title: "Frontend Developer", description: "As a frontend developer, I excel at creating engaging and intuitive user interfaces, combining aesthetics with functionality to deliver seamless web experiences.", imgUrl: images.about02}
 
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>I know that<span> Good Apps </span><br/>Means<span>  Good Bussiness</span></h2>
      
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.65, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>



          </motion.div>
        ))}
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);