import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: "#FF8C00",
      },
      secondary: {
        main: "#1C1C1C",
      },
    },
    typography: {
        fontFamily: "bold"
    }
  });
    
  theme = responsiveFontSizes(theme);

  export default theme;