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
  const [data, setData] = useState([]);
  const url = "https://api.github.com/users/saicharanars/repos";
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  console.log(data);
  
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
                  <a href={item.html_url}>

                  <ListItemText primary={item.html_url}   />
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
