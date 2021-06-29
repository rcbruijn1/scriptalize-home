import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App/App';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Router history={history}>
        <App />
      </Router>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);
