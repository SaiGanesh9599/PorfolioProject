import React from "react";
import { Accordion,  List, Typography } from "@mui/material";
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';




function ResumeComponent() {
  
  return(
   
   
    <div>
      <List sx={{ width: '100%', maxWidth: 360,height:'550px', bgcolor: 'background.paper',backgroundColor:'background,paper'}}>
      
        <Accordion sx={{ mb: 2, backgroundColor: '#FFF5CD' }}>
          <AccordionSummary
            
            aria-controls="panel1-content"
            id="panel1-header"
          >
          <InsertDriveFileIcon></InsertDriveFileIcon>
            <Typography variant="h6" sx={{ marginLeft: 2,marginBottom:55}}>MY RESUME
            <AccordionDetails>
            <div className="icon">
          <a href="file:///C:/Users/IIIBSc/Documents/QUIZ.pdf" target="_blank" rel="noopener noreferrer">
          <FilePresentIcon sx={{ marginTop: "40px", marginRight: "40px", cursor: "pointer" }} />
           
          </a>
        </div>
              <UploadFileIcon sx={{marginleft:'40px',marginTop:'40px'}}></UploadFileIcon>
              <Typography   ></Typography>
              
              </AccordionDetails>
            </Typography>
          
          
          </AccordionSummary>
        </Accordion>

        </List>
        
    </div>
  );
}

export default ResumeComponent;
