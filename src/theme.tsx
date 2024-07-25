import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    common: {
      black: "#000",
      white: "#F1F2FF",
    },
    primary: {
      main: "#6A83FF",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          padding: "11px 16px",
          fontSize: "12px",
          lineHeight: "18px",
        },
        root: {
          padding: "14px 20px",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "600",
        },
        outlinedPrimary: {
          backgroundColor: "#fff",
          ":hover": {
            backgroundColor: "#f3f3f3",
          },
        },
      },
    },
  },
});

export default theme;
