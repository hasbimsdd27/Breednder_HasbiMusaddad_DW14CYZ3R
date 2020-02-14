import React from "react";
import { Navbar, Image, Row, Col, Card, Form, Button } from "react-bootstrap";
import pets from "./swipe/dataMatch.json";
import App from "./swipe/App";
import { Link } from "react-router-dom";

export default function indexAPP() {
  return (
    <div className="wrap">
      <div className="boxLeft">
        <Navbar
          style={{
            background: "#353b48"
          }}
        >
          <Link to="/profile">
            <Image
              src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
              width="50px"
              height="50px"
              roundedCircle
            />
          </Link>
          <Form.Group
            style={{ paddingLeft: "1rem", paddingTop: "1rem" }}
            controlId="exampleForm.ControlSelect1"
          >
            <Form.Control as="select">
              <option>Pet 1</option>
              <option>Pet 2</option>
              <option>Pet 3</option>
              <option>Pet 4</option>
              <option>Pet 5</option>
              <option>Pet 6</option>
            </Form.Control>
          </Form.Group>
        </Navbar>
        <h3 className="text-white ml-2 mt-2">Matched List</h3>
        <Row
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem"
          }}
        >
          <PetList pets={pets} />
        </Row>
      </div>
      <div className="boxRight">
        <App />
        <div
          style={{
            marginTop: "80vh"
          }}
        >
          <Row>
            <Col className="text-center mt-2">
              <Button className="btn btn-warning">
                <i class="fas fa-sync-alt"></i>
              </Button>
              <Button className="btn btn-danger btn-lg ml-2">
                <i class="fas fa-times"></i>
              </Button>
              <Button className="btn btn-success btn-lg ml-2">
                <i class="fas fa-heart"></i>
              </Button>
              <Button className="btn ml-2 btn-primary">
                <i class="fas fa-bolt"></i>
              </Button>
            </Col>
          </Row>
          <Row>
            <Navbar>
              <div
                className="container"
                style={{
                  marginLeft: "4.5rem",
                  marginTop: "0.5rem"
                }}
              >
                <Row>
                  <div>
                    <h5
                      style={{
                        marginLeft: "3rem"
                      }}
                    >
                      <Button className="btn btn-light">
                        <strong>Hide</strong>
                      </Button>
                    </h5>
                  </div>
                  <div style={{ marginLeft: "2rem" }}>
                    <h5>
                      <Button className="btn btn-danger">
                        <i class="fas fa-chevron-left"></i>
                      </Button>
                      No
                    </h5>
                  </div>
                  <div style={{ marginLeft: "2rem" }}>
                    <h5>
                      <Button className="btn btn-success">
                        <i class="fas fa-chevron-right"></i>
                      </Button>
                      Yes
                    </h5>
                  </div>
                  <div style={{ marginLeft: "2rem" }}>
                    <h5>
                      <Button className="btn btn-primary">
                        <i class="fas fa-chevron-up"></i>
                      </Button>
                      Open Profile
                    </h5>
                  </div>
                  <div style={{ marginLeft: "2rem" }}>
                    <h5>
                      <Button className="btn btn-secondary">
                        <i class="fas fa-chevron-down"></i>
                      </Button>
                      Close Profile
                    </h5>
                  </div>
                  <div style={{ marginLeft: "2rem" }}>
                    <h5>
                      <Button className="btn btn-dark">
                        <i class="fas fa-forward"></i>
                      </Button>
                      Next Photos
                    </h5>
                  </div>
                </Row>
              </div>
            </Navbar>
          </Row>
        </div>
      </div>
    </div>
  );
}

function PetList(props) {
  return props.pets.map(pets => (
    <Col className="col-md-4 fluid">
      <Card
        className="bg-transparent fluid"
        key={pets.index}
        style={{
          height: "10rem",
          width: "7rem"
        }}
      >
        <div
          style={{
            width: "100px",
            height: "120px"
          }}
        >
          <img
            src={pets.pics}
            style={{
              width: "100%",
              height: "100%"
            }}
            className="img-thumbnail"
            alt="..."
          ></img>
        </div>

        <Card.Title className="text-white">
          <strong>{pets.name}</strong>
        </Card.Title>
      </Card>
    </Col>
  ));
}
