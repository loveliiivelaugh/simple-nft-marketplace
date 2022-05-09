import React, { Suspense } from 'react';
import { Button, Card, CardMedia, CardContent, CardActions, Container, Grid, Typography } from '@mui/material';
import { nfts } from './data/nfts';
import './App.css';

const ThreeScene = React.lazy(() => import('./components/ThreeScene'));

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <ThreeScene />
      </Suspense>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
        {nfts.map(({ name, image, price, description }) => (
          <Grid item md={3} sx={{ margin: '10px 0' }}>
            <Card>
              <CardMedia
                image={image}
                title={name}
                style={{ height: '200px' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-around' }}>
                <Button size="small" color="primary">
                  Buy
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
      </Container>
      <Grid container spacing={2} sx={{ height: '15vh', backgroundColor: '#333', color: '#fff', mt: 2 }}>
        <Grid item md={6}>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        </Grid>
        <Grid item md={6}>
        <Typography variant="body1" component="p">
          Footer Links go here
        </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;