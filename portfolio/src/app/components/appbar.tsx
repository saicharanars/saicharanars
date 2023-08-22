"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Theme from "@/app/components/theme";
import {  ThemeProvider } from "@mui/material/styles";
import {
  ProjectIcon,
  PersonIcon,
  StackIcon,
  RepoIcon,
  
} from "@primer/octicons-react";
import Link from "next/link";
import  Container  from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//import { orange } from '@mui/material/colors';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];
const navitems = [
  { nav: "About", icon: PersonIcon, href: "/" },
  { nav: "Projects", icon: ProjectIcon, href: "/projects" },
  { nav: "skills", icon: StackIcon, href: "/skills" },
  { nav: "Repositories", icon: RepoIcon, href: "/repositories" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    console.log(Theme);
  };
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color="primary.main" variant="h6" sx={{ my: 2 }}>
        Sai Charan Arishanapally
      </Typography>
      <Divider />
      <List>
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
      </List>
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
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          bgcolor: "primary.light",
          paddingX: 2,
          margin: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} sx={{ bgcolor: "primary.light" }}>
          <AppBar
            component="nav"
            sx={{
              bgcolor: "background.paper",
              paddingX: 2,
              textAlign: "center",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { sm: "block", md: "none" },
                  color: "background.default",
                }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h5"
                component="div"
                //color='primary.main'
                sx={{
                  display: { sm: "block", md: "block" },
                  color: "primary.main",
                }}
              >
                Sai Charan Arishanapally
              </Typography>
            </Toolbar>
          </AppBar>
        </Paper>

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
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
