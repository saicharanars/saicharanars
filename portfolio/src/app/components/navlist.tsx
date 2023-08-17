import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import InfoIcon from '@mui/icons-material/Info';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import {ProjectIcon, PersonIcon, StackIcon,RepoIcon ,ToolsIcon} from '@primer/octicons-react'



export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  


  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  const navitems=[{nav:'About',icon:PersonIcon},{nav:'Projects',icon:ProjectIcon},{nav:'skills',icon:StackIcon},{nav:'Repositories',icon:RepoIcon},{nav:'Resume',icon:ArticleOutlinedIcon},{nav:'Contact',icon:ContactPageOutlinedIcon}];

  return (
    <Box sx={{ width: '100%', height:'100%' , bgcolor: 'onprimary.main',padding:1,margin:1,borderRadius:4, }}>
      <List component="nav" aria-label="main mailbox folders">
        {navitems.map((item,index)=>(
            <ListItemButton
            selected={selectedIndex === index}
            onClick={(event) => {
                handleListItemClick(event, index);
              
            }}
          >
            <ListItemIcon>
            <item.icon  size={24} />
            </ListItemIcon>
            <ListItemText primary={item.nav} />
          </ListItemButton>
        ))}
        {/* <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
          <PersonIcon  size={24} />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <ProjectIcon size={24} />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <ToolsIcon size={24} />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <RepoIcon size={24} />
          </ListItemIcon>
          <ListItemText primary="repositories" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <ProjectIcon size={24} />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <ContactPageIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItemButton> */}
      </List>
      
      
    </Box>
  );
}