import React, {useEffect, useState} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import "./Work.scss"
import {images} from "../../constants"
import {AppWrap,MotionWrap} from '../../Wrapper'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const data = [
      {
        title: 'KADEVSTORE',
        description: 'A Ecommerce website for selling and buying of goods',
        imgUrl : [images.kadevstore1,images.kadevstore2,images.kadevstore3,images.kadevstore4,images.kadevstore5,images.kadevstore6],
        projectLink: 'https://kadevstore-frontend.onrender.com/',
        codeLink: 'https://github.com/Xaverick/KADEVSTORE-client', 
        tags: ['MERN']
      },

      {
        title: 'YelpCamp',
        description: 'You Can Add, Edit, Delete Campgrounds and Comments. Login , Logout and Register features are also available.',
        imgUrl : [images.yelpcamp1,images.yelpcamp2, images.yelpcamp3, images.yelpcamp4],
        projectLink: 'https://yelpcambackend.onrender.com/campground',
        codeLink: 'https://github.com/Xaverick/YelpCamp', 
        tags: ['MERN']
      },

      {
        title: 'UsabilityHub Clone',
        description: 'Its a clone of the website - UsabilityHub made with pure html and css',
        imgUrl : [images.clone1, images.clone2],
        projectLink: 'https://xaverick.github.io/usabilityHub/',
        codeLink: 'https://github.com/Xaverick/usabilityHub', 
        tags: ['Frontend']
      },

      {
        title: 'Personal Portfolio',
        description: 'A Ecommerce website for selling and buying of goods',
        imgUrl : [images.portfolio1, images.portfolio2, images.portfolio3],
        projectLink: 'https://kadevstore.herokuapp.com/',
        codeLink: 'https://kadevstore.herokuapp.com/', 
        tags: ['React']
      },


]


const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageCurrentIndex, setImageCurrentIndex] = useState(0)



  useEffect(() => {
    setWorks(data)
    setFilterWork(data)
  },[])


  const handleClick = () =>{
    setImageCurrentIndex(0);
    currentIndex === 0 ? setCurrentIndex(filterWork.length - 1) : setCurrentIndex(currentIndex - 1)
  }

  const handleClickAfter = () =>{
    setImageCurrentIndex(0);
    currentIndex === filterWork.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
  }


  const HandletworlFilter = (item) => {

    setActiveFilter(item)
    setAnimateCard({y: 100, opacity: 0})
    setTimeout(() => {
      setAnimateCard({y: 0, opacity: 1})
    }, 500)

    setCurrentIndex(0);
    setImageCurrentIndex(0)
    if(item === 'All') return setFilterWork(works)
    else return setFilterWork(works.filter(work => work.tags[0] === item))

  }

  const work = filterWork[currentIndex]
  
  return (
    <>
      <h2 className='head-text' style={{marginTop:"0.75rem"}}>My Creative<span> Portfolio </span>Section </h2>
    
      <div className='app__work-filter'>
        {['All', 'React', 'MERN', 'Frontend'].map((item, index) => (
          <div
            key={index}
            onClick={() => HandletworlFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
          
        ))}

      </div>

      <div className='app__work-portfolioArea'>

        <div className='app__work-portfolioArea-left'>
          <div className='icon'
            onClick={handleClick}
          > 
            <ArrowBackIosIcon />
          </div>
          
        </div>

        <motion.div
          animate={animateCard}
          transition={{duration: 0.5, delayChildren: 0.5}}
          className='app__work-portfolio'
        >
          {filterWork.length && (            
            <div className='app__work-item  app__flex'>             
                <div className='app__work-image app__flex'>
                  {work.imgUrl && (                
                  
                      <img src={work.imgUrl[imageCurrentIndex]} alt={work.title}  />
                  
                  
                  
                  )}
                
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >


                    <motion.div
                      
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                      onClick={() => (imageCurrentIndex === 0 ? setImageCurrentIndex(work.imgUrl.length - 1) : setImageCurrentIndex(imageCurrentIndex - 1))}


                    >
                        <ArrowBackIosIcon style={{marginLeft: "5px"}}/>
                    </motion.div>


                  <span className='app__flex'>                  
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.90] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                          <AiFillEye />
                      </motion.div>
                    </a>

                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.90] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </span>

                  <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                      onClick={() => (imageCurrentIndex === work.imgUrl.length - 1 ? setImageCurrentIndex(0) : setImageCurrentIndex(imageCurrentIndex + 1))}

                  >
                        <ArrowForwardIosIcon />

                  </motion.div>




                  </motion.div>              

              </div>
              
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div> 

            </div>
            
           )} 

          <div className='app__work-mobileNav'>
            <div className='app__work-mobileNav-left'>
                <div className='icon'
                  onClick={handleClick}
                > 
                  <ArrowBackIosIcon />
                </div>
                
            </div>

            <div className='icon'
              onClick={handleClickAfter}
            >

              <ArrowForwardIosIcon />
              
            </div>

          </div>

        </motion.div> 


        <div className='app__work-portfolioArea-right'>
          <div className='icon'
            onClick={handleClickAfter}
          >
            
            <ArrowForwardIosIcon />
          </div>
          

        </div>
       </div>
   
    
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  "app__primarybg"
);

