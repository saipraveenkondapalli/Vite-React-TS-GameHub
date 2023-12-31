import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
