"use client";
import Image from "next/image";
//import styles from './page.module.css'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import ResponsiveAppBar from './components/appbar'
import ResponsiveAppBar from "@/app/components/appbar";
import OutlinedCard from "@/app/components/mainheader";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Theme from'@/app/components/theme';
import { Box } from "@mui/material";


export default function Home() {
  return (
    <>
    <ThemeProvider theme={Theme}>
    
        <OutlinedCard/>
      
    </ThemeProvider>
    </>
  );
}
