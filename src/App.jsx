// App.js
import React, { createContext, useState, useContext } from "react";
import Topbar from "./Nav";
import Home from "./Home";
import Slide from "./Slide";
import Project from "./Projects";
import "./App.css"; // Correct import for ThemeProvider
import Experience from "./Experience";
import Contact from "./Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Topbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Home />
      <Slide />
      <Experience isDarkMode={isDarkMode} />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
