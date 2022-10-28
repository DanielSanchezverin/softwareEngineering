import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import createPalette from "@mui/material/styles/createPalette";

let mainTheme = createTheme({
  palette: createPalette({
    primary: {
      main: "#FF7A00",
      contrastText: "black",
    },
    secondary: {
      main: "#3DD47E",
      contrastText: "black",
    },
    background: {
      main: "#000000",
      contrastText: "white",
    },
  }),
  typography: {
    fontFamily: "Montserrat",
    fontSize: 12,
    button: {
      fontWeight: 900,
    },
  },
});

mainTheme = responsiveFontSizes(mainTheme);

export default mainTheme;
