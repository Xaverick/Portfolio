import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {images} from "../../constants"
import {AppWrap, MotionWrap} from "../../wrapper"
import "./Skills.scss"
import { Tooltip as ReactToolTip } from 'react-tooltip'


const experienceData = [
  {
    year: '2023 - Present',
    works: [
      {
        name: 'Full Stack Developer',
        company: 'Freelance',
        desc: 'I have been freelancing on fiver as a web developer. My services includes building a website as per client requirement'
      }
    ]   
  },
  
];


const skillsData = [
  {
    name: 'HTML',
    icon: images.html,
    bgColor: '#edf2f8'
  },
  {
    name: 'CSS',
    icon: images.css,
    bgColor: '#edf2f8'
  },
  {
    name: 'JavaScript',
    icon: images.javascript,
    bgColor: '#edf2f8'
  },
  {
    name: 'React',
    icon: images.react,
    bgColor: '#edf2f8'
  },
  {
    name: 'Node',
    icon: images.node,
    bgColor: '#edf2f8'
  },
  {
    name: 'MongoDB',
    icon: images.mongodb,
    bgColor: '#edf2f8'
  },
  {
    name: 'Git',
    icon: images.git,
    bgColor: '#edf2f8'
  },
  {
    name: 'C++',
    icon: images.cpp,
    bgColor: '#edf2f8'
  },
  {
    name: 'SaSS',
    icon: images.sass,
    bgColor: '#edf2f8'
  },
  {
    name: 'Bootstrap',
    icon: images.bootstrap,
    bgColor: '#edf2f8'
  }
]


const Skills = () => {

  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperiences(experienceData)
    setSkills(skillsData)
  },[])


  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
    
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div 
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}           
            >

              <div className='app__flex ' style={{backgroundColor: skill.bgColor}}>
                <img src={skill.icon} alt={skill.name} />
              </div>

              <p className='p-text'>{skill.name}</p>


            </motion.div>
            
          ))}
        

        </motion.div>


        <motion.div className='app__skills-exp'>

          {experiences?.map((experience) => (

            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year + ' '}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{opacity: [0, 1]}}
                      transition={{duration: 0.5}}
                      className='app__skills-exp-work'
                      data-tip
                      data-tooltip-id={work.name}
                      key={work.name}   
                    >
                      
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>

                    <ReactToolTip
                      id={work.name}
                      effect='solid'
                      // arrowColor='#fff'
                      place='top'
                      className='skills-tooltip'
                    >
                      {work.desc}

                    </ReactToolTip>
                  </>
                ))}
              </motion.div>

            </motion.div>

          ))}         
          
        </motion.div>
       
      </div> 
    
    
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg"
);