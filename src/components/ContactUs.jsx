import React from 'react';
import linkedInImage from '../resources/images/LinkedIn.png';
import FacebookImage from '../resources/images/facebook.png';
import InstagramImage from '../resources/images/Instagram.jfif'; 
import WhatsAppImage from '../resources/images/whatsapp.jfif';   
import GitHubImage from '../resources/images/Git Hub.jfif';      
import { Typography } from '@mui/material';

function ContactUs() {
  return (
    <div className='box'>
      <h2>Connect with Me</h2>
      
      <div className="icon-box" style={{ display: 'flex', gap: '40px', justifyContent: 'center',marginTop:'150px' }}>
        {/* LinkedIn Icon */}
        <div className="icon">
          <a href="https://www.linkedin.com/in/sai-ganesh-b24387250/" target="_blank" rel="noopener noreferrer">
            <img 
              src={linkedInImage} 
              alt="LinkedIn" 
              style={{marginLeft:8, width: '50px', height: '50px' }} 
            />
          </a>
          <Typography sx={{color:'white'}}> Linkedin</Typography>
        </div>

        {/* Facebook Icon */}
        <div className="icon">
          <a href="https://www.facebook.com/your-profile-url" target="_blank" rel="noopener noreferrer">
            <img 
              src={FacebookImage} 
              alt="Facebook" 
              style={{ marginLeft:8,width: '50px', height: '50px' }} 
            />
          </a>
          <Typography sx={{color:'white'}}> Facebook</Typography>
        </div>

        {/* Instagram Icon */}
        <div className="icon">
          <a href="https://www.instagram.com/your-profile-url" target="_blank" rel="noopener noreferrer">
            <img 
              src={InstagramImage} 
              alt="Instagram" 
              style={{ marginLeft:8,width: '50px', height: '50px' }} 
            />
          </a>
          <Typography sx={{color:'white'}}> Instagram</Typography>
        </div>

        {/* WhatsApp Icon */}
        <div className="icon">
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src={WhatsAppImage} 
              alt="WhatsApp" 
              style={{marginLeft:8, width: '50px', height: '50px' }} 
            />
          </a>
          <Typography sx={{color:'white'}}>Whatsapp </Typography>
        </div>

        {/* GitHub Icon */}
        <div className="icon">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src={GitHubImage} 
              alt="GitHub" 
              style={{ marginLeft:8,width: '50px', height: '50px'}} 
            />
          </a>
          <Typography sx={{color:'white'}}> my github</Typography>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
