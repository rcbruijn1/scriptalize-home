import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import { MenuBarStyles } from "./MenuBar.style"

const MenuBar = ({ children }) => {
  const classes = MenuBarStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.any,
};

export default MenuBar;