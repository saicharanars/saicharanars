"use client";
import Image from "next/image";
//import styles from './page.module.css'
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
// import ResponsiveAppBar from './components/appbar'
import ResponsiveAppBar from "@/app/components/appbar";
import OutlinedCard from "@/app/components/mainheader";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Theme from "@/app/components/theme";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container/Container";
import Card from "@mui/material/Card/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent/CardContent";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

// Accessing individual features and their details

export default function Repos() {
  
  

const data=[
  {
    name: '3hrsjsproject',
    url: 'https://github.com/saicharanars/3hrsjsproject'
  },
  { name: 'apicalls', url: 'https://github.com/saicharanars/apicalls' },
  {
    name: 'booking-appointment',
    url: 'https://github.com/saicharanars/booking-appointment'
  },
  {
    name: 'create-react-app-lambda',
    url: 'https://github.com/saicharanars/create-react-app-lambda'
  },
  {
    name: 'dom-manipulations',
    url: 'https://github.com/saicharanars/dom-manipulations'
  },
  { name: 'erf', url: 'https://github.com/saicharanars/erf' },
  {
    name: 'expense-tracker',
    url: 'https://github.com/saicharanars/expense-tracker'
  },
  {
    name: 'express-js-dynamic-routes',
    url: 'https://github.com/saicharanars/express-js-dynamic-routes'
  },
  {
    name: 'expressjs',
    url: 'https://github.com/saicharanars/expressjs'
  },
  {
    name: 'group-talk',
    url: 'https://github.com/saicharanars/group-talk'
  },
  {
    name: 'kickstartingnodejs',
    url: 'https://github.com/saicharanars/kickstartingnodejs'
  },
  { name: 'leetcode', url: 'https://github.com/saicharanars/leetcode' },
  {
    name: 'myfirstgit',
    url: 'https://github.com/saicharanars/myfirstgit'
  },
  { name: 'mytask', url: 'https://github.com/saicharanars/mytask' },
  {
    name: 'nextjs-blog-theme',
    url: 'https://github.com/saicharanars/nextjs-blog-theme'
  },
  {
    name: 'restaurant-booking',
    url: 'https://github.com/saicharanars/restaurant-booking'
  },
  {
    name: 'saicharanars',
    url: 'https://github.com/saicharanars/saicharanars'
  },
  {
    name: 'sharpener-web-module',
    url: 'https://github.com/saicharanars/sharpener-web-module'
  },
  {
    name: 'sharpenerwebmodule',
    url: 'https://github.com/saicharanars/sharpenerwebmodule'
  },
  {
    name: 'simplechat',
    url: 'https://github.com/saicharanars/simplechat'
  },
  { name: 'tusk', url: 'https://github.com/saicharanars/tusk' },
  {
    name: 'typescript-todos',
    url: 'https://github.com/saicharanars/typescript-todos'
  },
  {
    name: 'Working-with-NoSQL-Using-MongoDB',
    url: 'https://github.com/saicharanars/Working-with-NoSQL-Using-MongoDB'
  }
]


  
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Card
          variant="outlined"
          elevation={3}
          sx={{
            bgcolor: "background.paper",
            borderRadius: 5,
            padding: 2,
            margin: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6" color="primary">
              Repositories
            </Typography>
            <List>
              {data.map((item,index) => (
                
                <ListItem key={index}>
                  <ListItemText primary={item.name}   />
                  <a href={item.url}>

                  <ListItemText  primary={item.url}   />
                  </a>


                </ListItem>
                

                

                
              ))}
            </List>
          </CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
}
