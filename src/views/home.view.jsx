import { useLocation } from "react-router-dom";

// Core
import { 
  Box, 
  Card, 
  CardActionArea, 
  CardContent,
  CardMedia, 
  Fade,
  Grid, 
  Typography, 
} from "@material-ui/core";

// Assets
import placeholder from '../assets/placeholder.jpg';

const HomeView = () => {
  const location = useLocation();
  const isActivePath = path => location.pathname.includes(path);

  return (
    <Box m="auto">
      <Box maxWidth={1280} mb={4}>
        <Typography color="textSecondary" variant="h4" paragraph>
          Ontdek
        </Typography>
        <Fade in={isActivePath('/home')} timeout={800}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Card style={{ background: 'linear-gradient(135deg, #1976d2 80%, #64b5f6)'}}>
                <CardContent style={{ maxWidth: '50%' }}>
                  <Typography variant="h4" color="textSecondary" paragraph>
                    Scriptalize, oneidige mogelijkheden
                  </Typography>
                  <Typography color="textSecondary" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed architecto impedit exercitationem. Possimus exercitationem, quasi velit deleniti in iure?
                  </Typography>
                  <Typography color="textSecondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed architecto impedit exercitationem. Possimus exercitationem, quasi velit deleniti in iure?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card style={{ background: 'linear-gradient(135deg, #D9A91A 80%, #ff9800)', height: '100%'}}>
                <CardContent>
                  <Typography color="textSecondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Fade>
      </Box>

      <Box maxWidth={1280}>
        <Typography color="textSecondary" variant="h4" paragraph>
          Projecten
        </Typography>
        <Fade in={isActivePath('/home')} timeout={800}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Card style={{ backgroundColor: '#121E2B'}}>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height={200}
                    image={placeholder}
                  />
                <CardContent>
                  <Typography variant="h6" color="textSecondary">
                    Project
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ backgroundColor: '#121E2B'}}>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height={200}
                    image={placeholder}
                  />
                <CardContent>
                  <Typography variant="h6" color="textSecondary">
                    Project
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ backgroundColor: '#121E2B'}}>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height={200}
                    image={placeholder}
                  />
                <CardContent>
                  <Typography variant="h6" color="textSecondary">
                    Project
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card style={{ backgroundColor: '#121E2B'}}>
              <CardActionArea>
                  <CardMedia
                    component="img"
                    height={200}
                    image={placeholder}
                  />
                <CardContent>
                  <Typography variant="h6" color="textSecondary">
                    Project
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Fade>
      </Box>
    </Box>
  );
};

export default HomeView;