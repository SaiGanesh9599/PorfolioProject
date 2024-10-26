import { Accordion, Avatar, Grid, Typography } from "@mui/material";
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";


import c from '../resources/images/c.jfif';
import CC from '../resources/images/c++.png';
import  Javascript  from '../resources/images/java.png';
import  python from '../resources/images/python.png';
import  Web from '../resources/images/web.png';
import sql from '../resources/images/sql.png';

function Projects() {
  return (
    <Grid container spacing={2} sx={{ maxWidth: '100%' }}>
      
      <Grid item>
        <Accordion sx={{ backgroundColor: '#FFF5CD', width: 300,marginTop:'10px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Avatar alt="c" src={c} />
            <Typography variant="h6" sx={{ marginLeft: 2,marginBottom:8 }}>C Programming</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>Date: 2022</Typography>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>
              This project is about finding number place values.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>

     
      <Grid item>
        <Accordion sx={{ backgroundColor: '#FFF5CD', width: 300,marginTop:'10px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Avatar alt="Travis Howard" src={CC}/>
            <Typography variant="h6" sx={{ marginLeft: 2,marginBottom:8 }}>C++ Programming</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>Date:2023</Typography>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>This project is about the departments</Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>

      
      <Grid item>
        <Accordion sx={{ backgroundColor: '#FFF5CD', width: 300,marginTop:'10px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
           <Avatar alt="Travis Howard" src={Javascript}/>
            <Typography variant="h6" sx={{ marginLeft: 2,marginBottom:8 }}>Java</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>Date:2024</Typography>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>This project is on SFC Department
              This work done by Shyam and me.In this project we included the daily menu for the full week and department details.
            </Typography>
            
          </AccordionDetails>
        </Accordion>
      </Grid>

      
      <Grid item>
        <Accordion sx={{ backgroundColor: '#FFF5CD', width: 300,marginTop:'40px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Avatar alt="Travis Howard" src={sql}/>
            <Typography variant="h6" sx={{ marginLeft: 2,marginBottom:8 }}>SQL Language</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>In this I learnt about the Tables.I learnt how 
              to insert,delete and many changes in the table.
            </Typography>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>I did tables on books and book owners</Typography>
            
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item>
        <Accordion sx={{ backgroundColor: '#FFF5CD', width: 300,marginTop:'40px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Avatar alt="Travis Howard" src={Web}/>
            <Typography variant="h6" sx={{ marginLeft: 2,marginBottom:8 }}>WEB Development</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>In this I learnt CSS,JAVA,JAVA SCRIPT and React.
              presently I am doing the portfolio project by using React.
            </Typography>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>These things taught me many things in coding</Typography>
            
          </AccordionDetails>
        </Accordion>
      </Grid>
      
      <Grid item>
        <Accordion sx={{ backgroundColor: '#FFF5CD', width: 300,marginTop:'40px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Avatar alt="Travis Howard" src={python}/>
            <Typography variant="h6" sx={{ marginLeft: 2,marginBottom:8 }}>Python</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2, backgroundColor: '#705C53' }}>Python is still in a learning process
            </Typography>
               
          </AccordionDetails>
        </Accordion>
      </Grid>

    </Grid>
  );
}

export default Projects;
