"use client";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {  ThemeProvider } from "@mui/material/styles";
import Theme from "@/app/components/theme";
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
import ListItemText from "@mui/material/ListItemText";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

const projects = [
  {
    name: "Expense tracker",
    description:
      "The Expense Tracker app offer an intuitive expense management system, providing users with clear insights and allowing seamless tracking and editing. Premium features like leaderboards and document downloads enhance user engagement, while secure payments through Razorpay streamline premium membership upgrades.",
    bullets: [
      {
        title: "User-Friendly Expense Management:",
        details: [
          "Developed an intuitive expense management system facilitating easy addition, modification, and deletion of expenses.",
          "Users can input detailed expense information, promoting precise financial record-keeping.",
        ],
      },

      {
        title: "Thorough Expense Analysis Overview:",
        details: [
          "Designed an organized expense overview page, providing users with detailed expense insights for informed financial decisions.",
          "Users can identify spending patterns and trends, enabling more prudent financial choices.",
        ],
      },
      {
        title: "Premium Membership and Leaderboard Inclusion:",
        details: [
          "Introduced premium features, including exclusive access to a leaderboard, encouraging user engagement and competition.",
          "Users can compare financial achievements, driving motivation to improve financial practices.",
        ],
      },
      {
        title: "Effective JWT-based Authentication:",
        details: [
          "Implemented a secure authentication system using JSON Web Tokens (JWT) to ensure controlled access to user accounts.",
          "Users authenticate using unique credentials, and JWT tokens are generated upon successful login.",
        ],
      },
      {
        title: "Enhanced Password Security with bcrypt:",
        details: [
          "Strengthened password protection using bcrypt to securely hash and store user passwords.",
          "Stored passwords are encrypted, minimizing the risk of unauthorized access and data breaches.",
        ],
      },
      {
        title: "Secure Document Storage and Download via S3:",
        details: [
          "Integrated Amazon S3 storage for secure expense-related file storage, ensuring data privacy and protection.",
          "Users can conveniently download expense-related documents, contributing to a comprehensive financial record.",
        ],
      },
      {
        title: "Seamless Premium Payment through Razorpay:",
        details: [
          "Integrated the Razorpay payment gateway, providing a secure platform for users to upgrade to premium membership.",
          "Users can complete payments confidently using the secure and efficient options offered by Razorpay.",
        ],
      },
      {
        title: "Password Recovery using SMS API:",
        details: [
          "Enhanced account security through SMS API integration, enabling secure password recovery through two-factor authentication.",
          "Users receive a verification code via SMS, ensuring a reliable way to reset their passwords and access their accounts.",
        ],
      },
    ],
    skills: [
      "JWT",
      "Bcryot",
      "javascript",
      " nodejs",
      " HTML",
      " CSS",
      "MongoDb",
      "Mongoosejs",
      "AWS S3",
      " Razorpay Payment gateway",
    ],
    link:'https://github.com/saicharanars/expense-tracker'
    // Example usage of the array
  },
  {
    name: "Group Chat",
    description:"Introducing a dynamic group chat platform enhanced by real-time messaging capabilities. This project offers a seamless experience with efficient message retrieval from the database, ensuring conversations flow effortlessly. Moreover, the platform empowers users to share multimedia content, engaging interactions within the chat environment.",
    bullets: [
        {
          title: "Intuitive Communication Platform:",
          details: [
            "Designed a user-friendly group chat system that prioritizes seamless communication.",
            "Ensured a smooth and enjoyable chat experience for all users."
          ]
        },
        {
          title: "Instant Real-Time Messaging:",
          details: [
            "Enabled real-time messaging using socket.io, facilitating instant message delivery.",
            "Transformed conversations into dynamic interactions with real-time updates."
          ]
        },
        {
          title: "Effortless Message Recall:",
          details: [
            "Developed an efficient message retrieval mechanism, allowing users to access their chat history with ease.",
            "Empowered users to refer back to previous conversations for context."
          ]
        },
        {
          title: "Engaging Multimedia Sharing:",
          details: [
            "Facilitated multimedia sharing, allowing users to exchange images and videos for richer conversations.",
            "Enhanced engagement by enabling users to share diverse media content."
          ]
        },
        {
          title: "Versatile Group Management:",
          details: [
            "Empowered users to create and manage multiple chat groups, promoting collaboration across various interests.",
            "Provided flexibility to accommodate diverse communication needs."
          ]
        },
        {
          title: "Streamlined Admin Control:",
          details: [
            "Implemented advanced admin capabilities for efficient group management.",
            "Admins can seamlessly add or remove members, maintaining optimal group dynamics."
          ]
        },
        {
          title: "Enhanced Security Measures:",
          details: [
            "Ensured secure user authentication using JWT, reinforcing platform security.",
            "Implemented bcrypt for robust password protection, minimizing security vulnerabilities."
          ]
        }
      ],
    skills: [
      "JWT",
      "Bcryot",
      "javascript",
      " nodejs",
      " HTML",
      " CSS",
      "MongoDb",
      "Mongoosejs",
      "AWS S3",
      " Razorpay Payment gateway",
    ],
    link:'https://github.com/saicharanars/group-talk'
  },
];
 
  
  
  

// Accessing individual features and their details

export default function Projects() {
  {
    projects.map((item) => item.bullets.map((item) => console.log(item.title)));
  }
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Grid container padding={2} spacing={1}>
          {projects.map((item) => (
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                bgcolor: "primary.light",
              }}
            >
              <Card
                variant="outlined"
                elevation={3}
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 5,
                  padding: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h4" component="div" color="primary.main">
                    {item.name}
                  </Typography>

                  <List>
                    <ListItem>
                      <ListItemText primary={item.description} />
                    </ListItem>
                  </List>
                  <Typography variant="h6" component="div" color="primary">
                    Key Skills
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    flexWrap={"wrap"}
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={1}
                  >
                    {item.skills.map((skill) => (
                      <Chip
                        label={skill}
                        color="primary"
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions>
                  <Link href={item.link}>
                   
                    <Chip
                        label={<LinkIcon color="primary"/>}
                        color="primary"
                        size="medium"
                        variant="outlined"
                      />
                  
                  </Link>  
                  <Accordion >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{item.name+" "+"Project Details"}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {item.bullets.map((bullet) => (
                        <div key={bullet.title}>
                          <List>
                            <ListItem>
                              <ListItemText
                                primary={
                                  <Typography
                                    variant="h6"
                                    component="div"
                                    color="primary.main"
                                  >
                                    {bullet.title}
                                  </Typography>
                                }
                              />
                            </ListItem>
                          </List>

                          {bullet.details.map((detail, index) => (
                            <List>
                              <ListItem>
                                <ListItemText key={index} primary={detail} />
                              </ListItem>
                            </List>
                          ))}
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </>
  );
}
