import { createMuiTheme } from "@material-ui/core"
import { colorsDefault } from './colors';
import "typeface-raleway";

export const theme = createMuiTheme({
  palette: {
    ...colorsDefault,
  },
  typography: {
    fontFamily: 'Raleway',
  },
  overrides: {
    MuiTypography: {
      colorTextSecondary: {
        color: '#FFF',
      },
    },
    MuiCard: {
      root: {
        backgroundColor: colorsDefault.primary.main,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 12,
      },
    },
    MuiIconButton: {
      root: {
        color: colorsDefault.primary.light,
      },
    },
  },
});