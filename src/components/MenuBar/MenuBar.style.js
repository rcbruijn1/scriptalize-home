import { makeStyles } from "@material-ui/core";

export const MenuBarStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column' ,
    alignItems: 'flex-start',
    color: theme.palette.primary.light,
    // borderBottom: `1px solid ${theme.palette.primary.light}`,
  },

  menuBarButton: {
    marginBottom: theme.spacing(4),
  },

  buttonIcon: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(4),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    borderRadius: 12,
    transition: 'background-color ease 0.7s',
  },

  buttonIconActive: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.grey[50],
  },

  buttonLabel: {
    color: theme.palette.primary.light,
  },

  buttonLabelActive: {
    color: theme.palette.grey[50],
  },
}));