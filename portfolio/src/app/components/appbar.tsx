'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
//import { orange } from '@mui/material/colors';

const outerTheme = createTheme({
  palette: {
    primary: {
        main: "#6750A4"
    },
    
    onprimary: {
        main: "#FFFFFF"
    },
    primarycontainer: {
        main: "#EADDFF"
    },
    onprimarycontainer: {
        main: "#21005D"
    },
    secondary: {
        main: "#625B71"
    },
    onsecondary: {
        main: "#ffffff"
    },
    secondarycontainer: {
        main: "#E8DEF8"
    },
    onsecondarycontainer: {
        main: "#1D192B"
    },
    tertiary: {
        main: "#7D5260"
    },
    ontertiary: {
        main: "#ffffff"
    },
    tertiarycontainer: {
        main: "#FFD8E4"
    },
    ontertiarycontainer: {
        main: "#31111D"
    },
    error: {
        main: "#B3261E"
    },
    onerror: {
        main: "#ffffff"
    },
    errorcontainer: {
        main: "#F9DEDC"
    },
    onerrorcontainer: {
        main: "#410E0B"
    },
    background: {
        main: "#FFFFFF",
    },
    onbackground: {
        main: "#1C1B1F",
    },
    surface: {
        main: "#FFFBFE"
    },
    onsurface: {
        main: "#1C1B1F"
    },
    outline: {
        main: "#79747E"
    },
    surfacevariant: {
        main: "#E7E0EC"
    },
    onsurfacevariant: {
        main: "#3f4946"
    }
}
});


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color='primary.main' variant="h6" sx={{ my: 2 }}>
      Sai Charan Arishanapally
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem  key={item} disablePadding>
            <ListItemButton  sx={{ textAlign: 'center' ,color:'onsurface.main'}}>
              <ListItemText  primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={outerTheme}>

    <Box sx={{ display: 'flex',bgcolor:'primarycontainer.main',paddingX:2,margin:2 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{bgcolor:'background.main',paddingX:2,  }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block',md:'none' },color:'onsurface.main' }}
            >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            //color='primary.main'
            sx={{ flexGrow: 1, display: {  sm: 'block' },color:'onsurface.main' }}
            >
            Sai Charan Arishanapally
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <Button key={item} sx={{color:'onsurface.main'}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
              keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
        </ThemeProvider>
  );
}
