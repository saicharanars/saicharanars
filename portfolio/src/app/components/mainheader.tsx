import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  Grid  from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SelectedListItem from '@/app/components/navlist'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{
        bgcolor:'primarycontainer.main',
    }}>
      
      <Typography variant="h5" component="div" color='onprimarycontainer.main'>
      Backend developer passionate about building robust and efficient APIs. Dedicated to creating seamless data interactions
and enhancing application performance.
      </Typography>
      
    </CardContent>
    
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <>
      <Grid container spacing={2} paddingTop={0}>
        <Grid
          item
          md={2}
          sx={{
            display: ["none", "none", "block", "block", "block"],
          }}
        >
            <SelectedListItem/>
          
        </Grid>
        <Grid item xs={12} md={10}>
          <Container maxWidth="xl" sx={{  }}>
            <Card
              variant="outlined"
              sx={{ bgcolor: "background2.main", borderRadius: 5, padding: 2 }}
            >
              {card}
            </Card>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
