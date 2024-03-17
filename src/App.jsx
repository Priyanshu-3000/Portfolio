import React from "react";
import Topbar from "./Nav";
import Home from "./Home";
import Slide from "./Slide";
import Project from "./Projects";

// import Project from "./component/Projects/Projects";
import "./App.css";
import { BoxDataProvider } from "./Data/data"; // Correct import for BoxDataProvider
import Experience from "./Experience";
import Contact from "./Contact";

function App() {
  return (
    <>
      <BoxDataProvider>
        <Topbar />
        <Home />
        <Slide />
        <Experience />
        <Project />
        <Contact />
      </BoxDataProvider>
    </>
  );
}

export default App;
