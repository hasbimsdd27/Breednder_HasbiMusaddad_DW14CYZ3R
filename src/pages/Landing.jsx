import React from "react";
import {
  Button,
  Row,
  Col,
  Navbar,
  Nav,
  Jumbotron,
  Modal,
  Form
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  function ModalLog(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="pass"
              />
            </Form.Group>
            <Link to="/main">
              <Button
                variant="success"
                className="btn btn-block"
                type="Submit"
                onClick={() => setModalShow(false)}
              >
                Login
              </Button>
            </Link>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function ModalReg(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Breeder" name="breeder" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" name="email" />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                name="pass"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phone"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Breeder Address"
                name="address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Pet Name" name="pet" />
            </Form.Group>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Pet Gender</Form.Label>
                  <Form.Control as="select" name="gender">
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Pet Age</Form.Label>
                  <Form.Control as="select" name="age">
                    <option>Young</option>
                    <option>Adult</option>
                    <option>Old</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Pet Species</Form.Label>
                  <Form.Control as="select" name="species">
                    <option>Cat</option>
                    <option>Dog</option>
                    <option>Owl</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Link to="/main">
              <Button
                variant="success"
                className="btn btn-block"
                type="Submit"
                onClick={() => setModalShow1(false)}
              >
                Register
              </Button>
            </Link>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <div className="App-body-landing">
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
          <Navbar.Brand href="#" className="App-tittle">
            <h2>Breednder</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Button className="App-btn" onClick={() => setModalShow(true)}>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron className="bg-transparent App-jumbotron">
          <h4 className="App-desc">
            Swipe <strong>RIGHT</strong> <br></br> Make Your Pet{" "}
            <strong>HAPPY</strong>
          </h4>
          <h4 className="text-white">
            <em>Find Your Pet's Match</em>
          </h4>
          <div className="App-Card-Content-Main">
            <p className="App-text">
              by clicking enter, you agree to <u>our terms</u>. Learn how we
              process your data in our <u>Privacy Policy</u> and{" "}
              <u>Cookie Policy</u>
            </p>
            <Button className="App-btn" onClick={() => setModalShow1(true)}>
              Register
            </Button>
          </div>
        </Jumbotron>

        <Navbar fixed="bottom" className="App-footer">
          <h6 className="App-footer-text text-center">
            Breednder © 2020 Made with Reactjs
          </h6>
        </Navbar>
      </div>

      <ModalLog show={modalShow} onHide={() => setModalShow(false)} />
      <ModalReg show={modalShow1} onHide={() => setModalShow1(false)} />
    </>
  );
}
