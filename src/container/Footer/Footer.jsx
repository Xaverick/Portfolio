import React, {useState} from 'react'
import {AppWrap, MotionWrap} from '../../Wrapper'
import {images} from '../../constants'
import './Footer.scss'
import emailjs from '@emailjs/browser';
import { BsGithub,BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFrormSubmitted, setIsFrormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData;


  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    
    if(!name || !email || !message) return alert('Please fill all the fields')
    if(!email.includes('@') || !email.includes('.')) return alert('Please enter a valid email')


    e.preventDefault();
    setLoading(true);
    const templateParams = {to_name: 'Karik' ,email: formData.email, name: formData.name, message: formData.message}
    emailjs.send('service_4k9ni0f', 'template_soiohgb', templateParams, "LNGi34JDf0aNCozp9")
    .then(function(response) {
        setIsFrormSubmitted(true);
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

  }

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:kartikaggarwal2004@gmail.com" className='p-text'> kartikaggarwal2004@gmial.com </a>


        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 7678653532" className='p-text'> +91 7678653532 </a>
          

        </div>
      </div>

      {isFrormSubmitted ? 
      
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      
      
        : 
        <form  className='app__footer-form app__flex'>       
            <div className='app__flex'>
              <input type="text" placeholder="Your Name" name = 'name' className='p-text' value= {name} onChange={handleChangeInput} required/>
            </div>

            <div className='app__flex'>
              <input type="email" placeholder="Your Email" name = "email" className='p-text' value= {email} onChange={handleChangeInput} required/>
            </div>

            <div className='app__flex'>
              <textarea
                className='p-text'
                placeholder="Your Message"  
                value= {message}
                name = "message"
                onChange={handleChangeInput} 
                required
              />
            </div> 

            <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </form>
 
      }

      <footer className="footer">
        <div className="container">
          <h3>Social</h3>
          <div className="app__footer-social">
            <a target="_blank" rel="noreferrer">
              <BsTwitter />
            </a>
            <a href='https://github.com/Xaverick' target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
            <a href='https://www.linkedin.com/in/kartik-aggarwal-951a6a194/' target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
            <a href = 'https://www.instagram.com/kartiks.18/' target="_blank" rel="noreferrer">
              <BsInstagram />
            </a>
          </div>
          <h3>
            Kartik Aggarwal
          </h3>
          <p className='footer-text'>Turning visions into reality, one pixel at a time.</p>

          <div className='line'>

          </div>
          <p className="footer-text">© 2023 Kartik Aggarwal. All rights reserved.</p>
        </div>
      </footer>
    
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__whitebg"
);