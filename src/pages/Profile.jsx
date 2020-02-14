import React, { useState } from "react";
import {
  Navbar,
  Card,
  Image,
  Row,
  Col,
  Form,
  Button,
  Modal
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-input-slider";

export default function Profile(props) {
  return (
    <div className="wrap">
      <div className="boxLeft">
        <LeftBoxContent />
      </div>
      <div className="boxRight">
        <PetProfile />
      </div>
    </div>
  );
}

function LeftBoxContent() {
  return (
    <>
      <Navbar
        style={{
          background: "#353b48"
        }}
      >
        <Link to="/main">
          <Image
            src="https://www.pngrepo.com/download/46477/left-chevron.png"
            width="50px"
            height="50px"
            roundedCircle
          />
        </Link>

        <Image
          className="ml-3"
          src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
          width="50px"
          height="50px"
          roundedCircle
        />

        <h2
          style={{
            marginLeft: "1rem",
            color: "white"
          }}
        >
          Pet Profile
        </h2>
      </Navbar>
      <div className="mt-3 ml-2 mr-2">
        <h3
          style={{
            color: "white"
          }}
        >
          Account Setting
        </h3>
        <Card>
          <Card.Body>
            <Row>
              <Col>Email</Col>
              <Col className="text-right">dummy@dummy.com</Col>
            </Row>
            <Row className="mt-3">
              <Col>Phone</Col>
              <Col className="text-right">08212345678</Col>
            </Row>
          </Card.Body>
        </Card>
      </div>

      <div className="mt-3 ml-2 mr-2">
        <h3
          style={{
            color: "white"
          }}
        >
          Account Setting
        </h3>
        <Card>
          <Card.Body>
            <SliderInput />
            <Form.Group className="mt-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Age</Form.Label>
              <Form.Control as="select" name="age">
                <option>Adult</option>
                <option>Kid</option>
                <option>Old</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mt-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Species</Form.Label>
              <Form.Control as="select" name="species">
                <option>Cat</option>
                <option>Dog</option>
                <option>Deer</option>
              </Form.Control>
            </Form.Group>
            <Row>
              <Col className="text-center">
                <Link to="/">
                  <Button className="btn btn-danger">Log Out</Button>
                </Link>
              </Col>
            </Row>
            <div></div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

function SliderInput() {
  const [state, setState] = useState({ x: 10, y: 10 });

  return (
    <div>
      <Row>
        <Col>Maximum Distance</Col>
        <Col className="text-right">{state.x + " Km"}</Col>
      </Row>
      <Slider
        axis="x"
        x={state.x}
        onChange={({ x }) => setState(state => ({ ...state, x }))}
      />
    </div>
  );
}

function PetProfile(props) {
  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [premium, setPremium] = useState(false);

  return (
    <div>
      <Modal
        show={showMessage}
        onHide={() => {
          setShowMessage(false);
        }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <h3>Your transaction is being processed, Please wait</h3>
        </Modal.Body>
      </Modal>
      <Row>
        {premium ? (
          <Link to="/add">
            <Button
              className="btn btn-success"
              style={{ marginLeft: "63vw" }}
              onClick={() => {
                setPremium(false);
              }}
            >
              Add Pet
            </Button>
          </Link>
        ) : (
          <Button
            className="btn btn-success"
            onClick={() => setShow(true)}
            style={{ marginLeft: "63vw" }}
          >
            Add Pet
          </Button>
        )}
      </Row>
      <div>
        <Card
          style={{
            width: "35vw",
            margin: "0 auto",
            float: "none",
            marginBottom: "2rem",
            background: "white"
          }}
        >
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
            alt="First slide"
          />

          <div className="container">
            <div className="card border mt-1 mb-1">
              <div className="container mt-1">
                <Row>
                  <Col>
                    <h3>
                      <strong>Pet Name</strong>
                    </h3>
                  </Col>
                  <Col className="text-muted text-right">
                    <h3>Pet Species</h3>
                  </Col>
                </Row>

                <h6>
                  <i className="fas fa-user-alt mr-2"></i>
                  <strong>..Breeder</strong>
                </h6>
                <h6>
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <strong>..km</strong> from you
                </h6>

                <h6>
                  <i className="fas fa-venus-mars  mr-2"></i>
                  <strong>..Old..-..gender..</strong>
                </h6>
                <h6>
                  <i className="fas fa-phone mr-2"></i>
                  <strong>...Phone</strong>
                </h6>

                <h3 className="mt-3">
                  <strong>About Pet</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis et quasi cum perspiciatis placeat exercitationem
                  sequi nostrum ipsam cumque qui.
                </p>
              </div>
            </div>

            <Link to="/edit">
              <Button className="btn btn-success btn-block mb-2">Edit</Button>
            </Link>
          </div>
        </Card>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h1 style={{ textAlign: "center" }}>
            <strong>PREMIUM!</strong>
          </h1>
          <h3 style={{ textAlign: "center" }}>
            Upgrade your Breednder and you can access the <strong>PRO</strong>{" "}
            feature
          </h3>
          <Form.Group controlId="exampleForm.ControlInput1" className="mt-5">
            <Form.Label>Your Rek Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="4000-1111-2222-3333"
              name="norek"
            />
          </Form.Group>
          <div className="custom-file">
            <input
              id="inputGroupFile01"
              type="file"
              className="custom-file-input"
            />
            <label className="custom-file-label" for="inputGroupFile01">
              Upload Your Screenshot Here
            </label>
          </div>
        </Modal.Body>

        <Row className="mb-1">
          <Col className="text-center">
            <Button
              className="btn btn-success btn-lg"
              onClick={() => {
                setShowMessage(true);
                setShow(false);
                setPremium(true);
              }}
            >
              Send
            </Button>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}
