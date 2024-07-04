import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./portfolio";
import { TooltipProvider } from "react-tooltip";
import Main from "./containers/Main";
import "./App.css";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        
            <Main theme={themes[theme]} setTheme={setTheme} />
        
      </>
    </ThemeProvider>
  );
}

export default App;
