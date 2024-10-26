import { Avatar, Typography, Box } from '@mui/material';
import React from 'react';
import myImage from "../resources/images/myImage.jpg";
import backgroundImage from "../resources/images/backdrop.jfif";

import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <Box 
      sx={{ 
        marginTop:'10px',
        width: '1000px', 
        height: '550px', 
        backgroundColor:'background,paper', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        color: '#fff', 
        padding: 4,
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.8)',
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          textAlign: 'left', 
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Avatar 
            alt="Your Profile Picture" 
            src={myImage} 
            sx={{ width: 120, height: 120, marginBottom: 1, marginRight: 0 }} 
          />
          <Typography 
            variant="h5" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontFamily: 'Roboto, sans-serif', 
              fontWeight: 'bold',
              color: '#fff', 
              marginRight:'10px',
            }}
          >
            SAI GANESH     
          </Typography>
        </Box>
        
        <Box 
          sx={{ 
            width: '455px',
            height: '300px', 
            backgroundColor: 'rgba(11, 25, 44, 0.45)', 
            padding: 2, 
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 1.0)', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Typography 
            variant="subtitle1" 
            component="h2" 
            sx={{ 
              fontFamily: 'Arial, sans-serif', 
              fontWeight: 'medium',
              fontStyle: 'normal',
              marginBottom: 1, 
              textAlign: 'center',
            }}
          >
            I'M Student from
          </Typography>
          
          <Typewriter
  options={{
    strings: ['Sri Sathya Sai Institute Of Higher Learning-MDH Campus.'],
    autoStart: true,
    loop: true,
    delay:75,
  }}/>
          
         
        
            <Typography 
              variant="body2" 
              component="p" 
              sx={{ 
                fontFamily: 'Arial, sans-serif', 
                textAlign: 'center', 
                color: 'black',
              }}
            >
              "I’m a computer science student with a passion for programming, mainly in languages 
              like C, C++, and Java.Now i am learning MYSql,python and web development.I need to improve some more in
               coding.My interest in programming is to create new things. Beyond coding, I’m an avid sports enthusiast, loving
                 cricket and badmiton.
            </Typography>
          </Box>
        </Box>
      </Box>
 
  );
}
