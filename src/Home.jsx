import React from "react";
import { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import homegif from "./assets/gifs/Home.gif";
import Typed from "typed.js";

const Home = () => {
  const element = useRef(null);

  useEffect(() => {
    var typed = new Typed(element.current, {
      strings: [
        "Software Developer",
        "Web Developer",
        "UI/UX Designer",
        "Programmer",
        "App Developer",
        "Human",
      ],
      startDelay: 100,
      typeSpeed: 30,
      backSpeed: 40,
      backDelay: 1000,
      showCursor: false,
      loop: true,
    });
  });

  return (
    <Row className="Home pt-5" id="home">
      <Col md="6" id="hometext">
        <h4>hello!</h4>
        <h1>
          I' <span>M</span> Priyanshu
        </h1>
        <h1>
          I'M A <span ref={element} />
        </h1>
      </Col>
      <Col md="6" className="p-5">
        <img src={homegif} alt="" width="100%" height="60%" />
      </Col>
    </Row>
  );
};

export default Home;
