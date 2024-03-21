// Topbar.js
import React from "react";
import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { useTheme } from "./ThemeContext";

export default function Topbar({ toggleDarkMode, isDarkMode }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Priyanshu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Skill">Skill</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
          <div className="topbar">
            <button
              onClick={toggleDarkMode}
              style={{ background: "transparent" }}
            >
              {isDarkMode ? <CiSun color="white" /> : <FaMoon color="white" />}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
