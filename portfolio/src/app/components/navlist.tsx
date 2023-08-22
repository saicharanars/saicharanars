import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack"

import Theme from "@/app/components/theme";
import {  ThemeProvider } from "@mui/material/styles";
import Link from 'next/link'
import {
  ProjectIcon,
  PersonIcon,
  StackIcon,
  RepoIcon,
  
} from "@primer/octicons-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import  Container  from "@mui/material/Container";

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  const navitems = [
    { nav: "About", icon: PersonIcon,href:"/" },
    { nav: "Projects", icon: ProjectIcon,href:"/projects" },
    { nav: "skills", icon: StackIcon,href:"/skills" },
    { nav: "Repositories", icon: RepoIcon,href:"/repositories" },
    
  ];

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "info.main",
          padding: 1,
          margin: 1,
          borderRadius: 4,
        }}
      >
        <List component="nav" aria-label="main mailbox folders" sx={{
            bgcolor:"info.main",
            
        }}>
          {navitems.map((item, index) => (
            <Link key={index} href={item.href}>
            <ListItemButton
              key={index}
              selected={selectedIndex === index}
              onClick={(event) => {
                  handleListItemClick(event, index);
              }}
            >
              <ListItemIcon>
                <item.icon size={24} />
              </ListItemIcon>
              <ListItemText primary={item.nav} />
            </ListItemButton>
            </Link>
          ))}
          <Container maxWidth="xs">
        <Stack direction="row" spacing={1}>
          <a href="mailto:saicharanars@gmail.com" target="_blank">
            <IconButton aria-label="delete">
              <MailIcon />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/sai-charan-a-4926ba154/">
            <IconButton aria-label="delete">
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://github.com/saicharanars">
            <IconButton aria-label="delete">
              <GitHubIcon />
            </IconButton>
          </a>
        </Stack>
      </Container>
       
        
        </List>
      </Box>
    </ThemeProvider>
  );
}
