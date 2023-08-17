"use client";
import Image from "next/image";
//import styles from './page.module.css'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import ResponsiveAppBar from './components/appbar'
import ResponsiveAppBar from "@/app/components/appbar";
import OutlinedCard from "@/app/components/mainheader";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Box } from "@mui/material";
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

export default function Home() {
  return (
    <>
    <ThemeProvider theme={outerTheme}>
    <Box sx={
        {
            
            bgcolor:'primarycontainer.main'
        }
    }>

      <Stack spacing={2} direction="row" paddingTop={4}>
        <OutlinedCard/>
      </Stack>
    </Box>
    </ThemeProvider>
    </>
  );
}
