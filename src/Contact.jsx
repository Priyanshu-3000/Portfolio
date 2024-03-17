import Form from "react-bootstrap/Form";
import contactgif from './assets/gifs/giphy.gif';

import { Row, Col } from "react-bootstrap";


export default function Contact() {


  return (
    <div className="component " id="Contact">
      <h1>Contact Me</h1>
      <Row>
        <Col md={6}>
          <img src={contactgif} alt="" />
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
