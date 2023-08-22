 
import { createTheme } from "@mui/material/styles";
 
 const Theme = createTheme({
    palette: {
      primary: {
          main: "#265fa3",
          light:"#d5e3ff",
          dark:"#001c3b"
      },
      secondary: {
          main: "#555f70",
          light:"#d9e3f8",
          dark:"#121c2b"
      },
      error: {
          main: "#ba1a1a",
          light:"#ffdad6",
          dark:"#410002"
      },
      background: {
          paper:"#fdfbff",
          default:"#1a1c1e"
      },
      info:{
        main:'#fdfbff',
        contrastText:'#1a1c1e'
      }
      
  }
  });
  export default Theme;


