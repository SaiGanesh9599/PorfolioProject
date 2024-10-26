import { Accordion, Avatar, List, Typography } from "@mui/material";
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import School  from '../resources/images/school.jfif';
import  Highlight  from '../resources/images/high school.webp';
import  Collections  from '../resources/images/Narayana.png';
import Unarchive from '../resources/images/mdh.jpg';

import React from "react";

function Academics() {
  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',backgroundColor:'background,paper'}}>
      
        <Accordion sx={{ mb: 2, backgroundColor: '#FFF5CD' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          <Avatar alt="Travis Howard" src={School}/>
            <Typography variant="h6">Primary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 ,backgroundColor:'#705C53'}}>Chinmaya Vidyalaya</Typography>
            <Typography sx={{ mb: 2 ,backgroundColor:'#705C53'}}>1st to 4th</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2, backgroundColor: '#FFF5CD' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Avatar alt="Travis Howard" src={Highlight}/>
            <Typography  variant ="h6">Higher Studies</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 ,backgroundColor:'#705C53'}}>Panchajanya</Typography>
            <Typography sx={{ mb: 2 ,backgroundColor:'#705C53'}} >5th to 10th</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2, backgroundColor: '#FFF5CD' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
             <Avatar alt="Travis Howard" src={Collections}/>
            <Typography variant="h6">Junior College</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 ,backgroundColor:'#705C53'}}>Narayana Junior College</Typography>
            <Typography sx={{ mb: 2 ,backgroundColor:'#705C53'}}>11th to 12th</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2, backgroundColor: '#FFF5CD' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Avatar alt="Travis Howard" src={Unarchive}/>
            <Typography variant="h6">BSc Course</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2 ,backgroundColor:'#705C53'}}>Sri Sathya Sai Institute Of Higher Learning</Typography>
            <Typography sx={{ mb: 2 ,backgroundColor:'#705C53'}}>Pursuing BSc in Computer Science</Typography>
            <Typography sx={{ mb: 2 ,backgroundColor:'#705C53'}}>Presently in 3rd Year</Typography>
          </AccordionDetails>
        </Accordion>
        
      </List>
    </div>
  );
}

export default Academics;
