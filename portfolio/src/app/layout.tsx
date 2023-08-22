//import './globals.css'
"use client";

import type { Metadata } from "next";
//import { Inter } from 'next/font/google'
import Link from 'next/link'
import DrawerAppBar from "@/app/components/appbar";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SelectedListItem from "@/app/components/navlist";
import Stack from "@mui/material/Stack";
import Theme from '@/app/components/theme'
import {  ThemeProvider } from "@mui/material/styles";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider theme={Theme}>
        <DrawerAppBar />
        <Box
          sx={{
            bgcolor: "primary.light",
            width:'100vw',
            height:'100vh',
            overflow:'scroll'
          }}
        >
            <Grid container  padding={4} spacing={2} >
          
              <Grid
                item
                md={2}
                sx={{
                  display: ["none", "none", "block", "block", "block"],
                  maxHeight: "320px",
                }}
              >
                <SelectedListItem />
              </Grid>
              <Grid item xs={12} md={10}>
                {children}
              </Grid>
          
            </Grid>
        </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
