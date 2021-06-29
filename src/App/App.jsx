import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';

// Core
import { 
  Box, 
  Grid, 
  IconButton, 
  Toolbar, 
} from "@material-ui/core";
import { MenuBar, MenuBarItem } from '../components';

// Style
import { useAppStyles } from "./App.style";

// Assets
import { Build, GitHub, HomeOutlined, InfoOutlined, LinkedIn, Phone, Work } from "@material-ui/icons";
import svg from '../assets/Logo-scriptalize-definitief_Tekengebied 1 kopie 5.svg';
import HomeView from '../views/home.view';

const App = () => {
  const classes = useAppStyles();
  const history = useHistory();
  const location = useLocation();

  const isActivePath = path => location.pathname.includes(path);

  return (
    <div className={classes.appWrapper}>
      <Toolbar component={Box} pb={8} display="flex" justifyContent="space-between" bgcolor="inherit" disableGutters>
        <img src={svg} alt="scriptalize" width="auto" height={30} />
        <Box>
          <IconButton color="secondary" onClick={() => window.open('https://github.com/rcbruijn1')}>
            <GitHub />
          </IconButton>
          <IconButton color="secondary" onClick={() => window.open('https://linkedin.com/in/ruben-de-bruijn-1a9786a3')}>
            <LinkedIn />
          </IconButton>
          </Box>
      </Toolbar>

      <Grid container spacing={4}>
        <Grid item xs={12} md={2}>
          <MenuBar>
            <MenuBarItem 
              label="Home"
              icon={<HomeOutlined />}
              isActive={isActivePath('/home')} 
              onClick={() => history.push('/home')} 
            />

            <MenuBarItem 
              label="Oplossingen"
              icon={<Build />} 
              isActive={isActivePath('/solutions')} 
              onClick={() => history.push('/solutions')}
            />

            <MenuBarItem 
              label="Projecten"
              icon={<Work />}
              isActive={isActivePath('/projects')} 
              onClick={() => history.push('/projects')} 
            />

            <MenuBarItem 
              label="About"
              icon={<InfoOutlined />}
              isActive={isActivePath('/about')} 
              onClick={() => history.push('/about')} 
            />

            <MenuBarItem 
              label="Contact"
              icon={<Phone />} 
              isActive={isActivePath('/contact')} 
              onClick={() => history.push('/contact')}
            />
          </MenuBar>
        </Grid>

        <Grid item xs={12} md={10}>
          <Switch>
            <Route
              exact
              render={() => <HomeView />}
              path="/home"
            />
            <Redirect to="/home" />
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
