import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import homegif from "./assets/gifs/Home.gif";
import Typed from "typed.js";
import anime from "animejs";

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

    const animateImage = () => {
      anime({
        targets: ".slideout",
        translateX: 800,
        scale: 1,
        zIndex: -1, // Ensure the image appears behind the text
        rotate: "2turn",
        duration: 500, // Duration of the animation
        easing: "easeInOutQuad", // Easing function
      });
    };

    const intervalId = setInterval(animateImage, 300); // Call animateImage function every 3 seconds

    return () => {
      clearInterval(intervalId); // Cleanup: clear the interval when the component unmounts
      typed.destroy(); // Cleanup: destroy the Typed.js instance
    };
  }, []);

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
        <img
          className="slideout"
          src={homegif}
          alt=""
          style={{ position: "absolute", top: 120, left: 400, zIndex: -1 }} // Position the image absolutely and set z-index
        />
      </Col>
    </Row>
  );
};

export default Home;
