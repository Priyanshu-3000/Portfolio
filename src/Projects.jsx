import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Project() {
  const [current, setCurrrent] = useState(0);
  function nextslide() {
    setCurrrent(current === data.length - 1 ? 0 : current + 1);
  }
  function lastslide() {
    setCurrrent(current === 0 ? data.length - 1 : current - 1);
  }

  const data = [
    {
      img: "https://imgs.search.brave.com/Kl7Nigk3nHo0df8uaBabYa77iPZBJos7G09ySBfFnRU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDc3MTA0NDE2MDQt/NWJkYzQxYmM2NTE3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OGNH/bGpkSFZ5Wlh4bGJu/d3dmSHd3Zkh4OE1B/PT0",
      title: "E-COMMERCE",
      techstack: "laravel",
      discription: "",
    },
    {
      img: "https://imgs.search.brave.com/yOpRp52oUm3Bb3KQ39kEA__KYYRkH7qI92JhA83pN9c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn",
      title: "NEWS WEBSITE",
      techstack: "laravel",
      discription:
        "qwerthdjfad adugisd fh ahfyweihfhajs  dfh uf ghruiefrhqwr yg yd",
    },
    {
      img: "https://imgs.search.brave.com/Kl7Nigk3nHo0df8uaBabYa77iPZBJos7G09ySBfFnRU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDc3MTA0NDE2MDQt/NWJkYzQxYmM2NTE3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OGNH/bGpkSFZ5Wlh4bGJu/d3dmSHd3Zkh4OE1B/PT0",
      title: "E-COMMERCE",
      techstack: "laravel",
      discription: "",
    },
    {
      img: "https://imgs.search.brave.com/yOpRp52oUm3Bb3KQ39kEA__KYYRkH7qI92JhA83pN9c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn",
      title: "NEWS WEBSITE",
      techstack: "laravel",
      discription: "",
    },
    {
      img: "https://imgs.search.brave.com/Kl7Nigk3nHo0df8uaBabYa77iPZBJos7G09ySBfFnRU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDc3MTA0NDE2MDQt/NWJkYzQxYmM2NTE3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OGNH/bGpkSFZ5Wlh4bGJu/d3dmSHd3Zkh4OE1B/PT0",
      title: "E-COMMERCE",
      techstack: "laravel",
      discription: "",
    },
    {
      img: "https://imgs.search.brave.com/yOpRp52oUm3Bb3KQ39kEA__KYYRkH7qI92JhA83pN9c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn",
      title: "NEWS WEBSITE",
      techstack: "laravel",
      discription: "",
    },
  ];

  return (
    <div className="component" id="Project">
      <h1 className="">Projects</h1>
      <h4>
        Always <span>Willing</span>, Always <span>Able</span>.
      </h4>
      <Row xs={1} md={3} className="g-4 p-5">
        {data.map((item, idx) => (
          <Col key={idx} className="p-3">
            <Card className="popup">
              <Card.Img
                variant="top"
                src={item.img}
                style={{ maxwidth: "18rem" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.discription}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Project;
