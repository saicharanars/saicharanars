import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import img from "../../../public/saicharan.png"

const card = (
  <React.Fragment>
    <Stack direction={["column", "column", "row", "row", "row"]}>
      <Box>
        <CardContent
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h4" component="div" color="primary.main">
            Backend Developer | Building robust and efficient APIs
          </Typography>
        </CardContent>
        
      </Box>
      <Box
        sx={{
          width: "10vw",
          height: "inherit",
          position: "relative",
        }}
      >
        <Image
          src={img}
          alt="Sai Charan Arishanapally"
          sizes="10vw"
          quality={50}
          fill
        />
      </Box>
    </Stack>
  </React.Fragment>
);

const desc = (
  <React.Fragment>
    <Box>
      <CardContent
        sx={{
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h6" component="div">
          Hello there! I&apos;m Sai Charan Arishanapally, a dedicated backend developer with a laser focus on crafting APIs that stand the test of scalability. My passion lies in designing and building robust, high-performance API solutions that power modern web applications and drive business success.
        </Typography>
        <Typography variant="h6" component="div">
          With a foundation in Node.js, Express.js, and a wealth of experience in JavaScript and TypeScript, I&apos;ve fine-tuned my skills to create APIs that not only meet today&apos;s demands but also lay the groundwork for the future. I understand that scalability isn&apos;t just about handling current traffic; it&apos;s about preparing your application for growth and heavy loads.
        </Typography>
        <Typography variant="h6" component="div">
          My journey into the world of databases includes MongoDB, MySQL, and PostgreSQL. Leveraging the power of MongooseJS and Sequelize, I design data structures that accommodate expansion without compromising on performance. My architecture decisions are driven by a deep understanding of database optimization and efficient query design.
        </Typography>
      </CardContent>
    </Box>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <>
      <Container maxWidth="xl" sx={{}}>
        <Card
          variant="outlined"
          sx={{ bgcolor: "background.paper", borderRadius: 5, padding: 2 }}
        >
          {card}
        </Card>
      </Container>
      <Container maxWidth="xl" sx={{}}>
        <Card
          variant="outlined"
          sx={{ bgcolor: "background.paper", borderRadius: 5, padding: 2 }}
        >
            {desc}
        </Card>
      </Container>
    </>
  );
}
