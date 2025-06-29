import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const mount = (el) => {
  const root = createRoot(el);
  root.render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
          <Landing />
          <Pricing />
        </div>
      </ThemeProvider>
    </BrowserRouter>,
  );
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");

  if (el) {
    mount(el);
  }
}

export { mount };
