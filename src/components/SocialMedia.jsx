import React from 'react';
import { BsGithub,BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => (
  
  <div className="app__social">
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
);

export default SocialMedia;