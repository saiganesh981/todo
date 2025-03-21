import React from 'react';
import { Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const array = ['Html', 'Css', 'javaScript', 'Node js', 'Python'];

const ExpandableList = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box>
      <List>
        <ListItem divider>
          <ListItemButton onClick={handleToggle}>
            <ListItemText primary={isExpanded ? 'Collapse List' : 'Expand List'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={isExpanded}>
        <List sx={{ width: 300, background: "snowwhite" }}>
          {array.map((listElm, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>{'>'}</ListItemIcon>
                <ListItemText primary={listElm} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default ExpandableList;