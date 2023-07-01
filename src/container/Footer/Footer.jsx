import React, {useState} from 'react'
import {AppWrap, MotionWrap} from '../../Wrapper'
import {images} from '../../constants'
import './Footer.scss'
import emailjs from '@emailjs/browser';


const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFrormSubmitted, setIsFrormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData;


  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
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

        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input type="text" placeholder="Your Name" name = 'name' className='p-text' value= {name} onChange={handleChangeInput} />
          </div>

          <div className='app__flex'>
            <input type="email" placeholder="Your Email" name = "email" className='p-text' value= {email} onChange={handleChangeInput} />
          </div>

          <div className='app__flex'>
            <textarea
              className='p-text'
              placeholder="Your Message"  
              value= {message}
              name = "message"
              onChange={handleChangeInput} 
            />
          </div> 

          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>

        </div> 
 
      }
    
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__whitebg"
);