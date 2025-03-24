import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/slices/store";
import AppRoutes from "./redux/routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00e676",
    },
    background: {
      default: "#0d1b2a",
      paper: "#1b263b",
    },
    text: {
      primary: "#e0e1dd",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h5: {
      fontWeight: 700,
    },
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
