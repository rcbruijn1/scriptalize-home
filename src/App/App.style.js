import { makeStyles } from "@material-ui/core";

export const useAppStyles = makeStyles(theme => ({
  appWrapper: {
    backgroundColor: theme.palette.primary.dark,
    minHeight: '100vh',
    width: '100%',
    padding: theme.spacing(4),
  },
}));