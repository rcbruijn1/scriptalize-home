import PropTypes from 'prop-types';
import clsx from 'clsx';

import { ButtonBase, Typography } from "@material-ui/core";

import { MenuBarStyles } from "./MenuBar.style"

const MenuBarItem = ({ label, icon, isActive, onClick }) => {
  const classes = MenuBarStyles();

  return (
    <ButtonBase 
      color="inherit"
      disableRipple
      onClick={onClick}
      className={classes.menuBarButton}
      >
        <div className={clsx(classes.buttonIcon, { [classes.buttonIconActive]: isActive })}>
          {icon}
        </div>
        <Typography className={clsx(classes.buttonLabel, { [classes.buttonLabelActive]: isActive })}>
          {label}
        </Typography>
    </ButtonBase>
  );
};

MenuBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default MenuBarItem;