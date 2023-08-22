"use client";
import Image from "next/image";
//import styles from './page.module.css'
import Stack from "@mui/material/Stack";
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




const skills = [
  {
    name: "programming Languages",
    Skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    name: "Databases",
    Skills: ["MySQL", "PostgreSQL", "MongoDb"],
  },
  {
    name: "Backend Development",
    Skills: [
      "Expressjs",
      "Node JS",
      " MongooseJS",
      "Sequelize",
      "JWT",
      "SocketIO",
      "Bcrpt",
    ],
  },
  {
    name: "FrontEnd Development",
    Skills: ["HTML", "CSS", "Javascript", "DOM Manipulation"],
  },
];

// Accessing individual features and their details

export default function Skills() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        
              <Grid container spacing={2} margin={2}>
                {
                    skills.map((skill)=>(
                        <Grid item xs={12} md={5}>
                    <Card sx={{
                        borderRadius:3
                    }}>
                        <CardContent>
                            <Typography variant="h6" color="primary">
                                {skill.name}
                            </Typography>
                            <List>

                            
                            {
                                skill.Skills.map((item)=>(
                                    <ListItem>
                                        <ListItemText primary={item}/>
                                    </ListItem>
                                ))
                            }
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                    ))
                }
                
                
                
              </Grid>
         
      </ThemeProvider>
    </>
  );
}
