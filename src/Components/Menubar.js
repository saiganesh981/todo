import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Drawer, IconButton, LinearProgress, List, ListItemButton, ListItemText, Rating, Snackbar, Typography } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
export default function Menubar() {
  const [open, setOpen] = useState(false);
  const [value,setValue]=useState(0)
  const courses = ['React', 'Node', 'MongoDB', 'SQL','python '];

  return (
    <div>
      <Button  variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {courses.map((course, index) => (
            <ListItemButton key={index} onClick={() => setOpen(false)}>
              <ListItemText primary={course} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    <br/>
    <Snackbar open={true}>
      <Alert severity='success'>This is an Alert in Snackbar</Alert>
    </Snackbar>
    <br/>     
    <CircularProgress color='error' value={75}/>
    <br/> 
    <LinearProgress />
    <br/> 
    <Rating value={value} 
    onChange={(e,val)=>setValue(val)}/>
      <Typography>
      Rated {value!==undefined ? value: 0} stars
     </Typography>
     <br/> 
     <IconButton  onClick={()=>alert("Icon BTN")}>
     <AddReactionIcon color='secondary' />
     </IconButton>
     </div>
  );
}