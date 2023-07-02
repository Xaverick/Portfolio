import React from 'react'
import "./Header.scss"
import {AppWrap} from '../../Wrapper'
import  {motion} from "framer-motion"
import {images} from "../../constants"
import Typewriter from "typewriter-effect";

const scalevarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div 
          whileInView={{x: [-100,0], opacity: [0,1]}}
          className='app__header-info'
          transition={{duration: 0.5, delayChildren: 0.5}}
      >

        

          <header className="header">
                        
            <h1 className="headline head-text">
              Hey, I'm
              <span>
                <Typewriter
      
                  options={{
                    strings: ['Kartik Aggarwal'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            
            </h1>

            <p className="subheadline">

              <Typewriter    
                onInit={(typewriter) => {
                  typewriter
                      .typeString("MERN Developer")
                      .start();
                }}
              />

            </p>
            <p className='header-content'>
            I am a versatile web developer with a passion for crafting innovative digital experiences. With expertise in front-end and back-end technologies, I specialize in creating responsive websites and robust web applications. I combine creativity with technical proficiency to deliver elegant solutions. From concept to deployment, I strive to exceed expectations and provide seamless user experiences in the ever-evolving digital landscape.
            </p>


            <div className='header-buttons'>
              <a href="#portfolio" className="cta-button">Download CV</a>
              <a href="#portfolio" className="cta-button">Contact Me</a>
            </div>
       
          </header>
          
          <motion.img
           whileInView={{scale: [0,1]}}
           transition={{duration: 1, ease: "easeInOut"}}
           src={images.circle}
           alt="profile_circle"
           className="overlay_circle"
        />



      
      </motion.div>
      
      
      <motion.div
        variant={scalevarients}
        whileInView={scalevarients.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
        ))}

      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')