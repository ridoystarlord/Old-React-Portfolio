import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import skills from "../../../images/skills.svg";
import html from "../../../images/skills/html-5.svg";
import css from "../../../images/skills/css3.svg";
import bootstrap from "../../../images/skills/bootstrap.svg";
import javascript from "../../../images/skills/javascript.svg";
import material from "../../../images/skills/material-ui.svg";
import android from "../../../images/skills/android-studio.svg";
import mongo from "../../../images/skills/mongodb.svg";
import node from "../../../images/skills/nodejs.svg";
import react from "../../../images/skills/react.svg";
import firebase from "../../../images/skills/firebase.svg";
import "./Skill.css";

const Skill = () => {
  return (
    <Container>
      <Row className="g-3">
        <Col sm={12} md={4} lg={4}>
          <h1 className="skills-title fw-bolder">
            My <span>Profesional</span> Skills
          </h1>
          <div className="d-flex mt-5">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <img src={skills} alt="" className="skill-img" />
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={8} lg={8} className="experience-box p-3">
          <Row xs={2} md={3} lg={4} className="g-4 text-center">
            <Col className="h-100">
              <Card className="p-2 skill-card-bg">
                <Card.Img variant="top" src={html} className="w-50 mx-auto" />
                <Card.Footer>
                  <Card.Title className="mb-0 fw-bolder">HTML 5</Card.Title>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="p-2 skill-card-bg">
                <Card.Img variant="top" src={css} className="w-50 mx-auto" />
                <Card.Footer>
                  <Card.Title className="mb-0 fw-bolder">CSS 3</Card.Title>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="p-2 skill-card-bg">
                <Card.Img
                  variant="top"
                  src={javascript}
                  className="w-50 mx-auto"
                />
                <Card.Footer>
                  <Card.Title className="mb-0 fw-bolder">JavaScript</Card.Title>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="p-2 skill-card-bg">
                <Card.Img
                  variant="top"
                  src={bootstrap}
                  className="w-50 mx-auto"
                />
                <Card.Footer>
                  <Card.Title className="mb-0 fw-bolder">
                    Bootstrap 5
                  </Card.Title>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="p-2 skill-card-bg">
                <Card.Img
                  variant="top"
                  src={material}
                  className="w-50 mx-auto"
                />
                <Card.Footer>
                  <Card.Title className="mb-0 fw-bolder">
                    Material UI
                  </Card.Title>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="p-2 skill-card-bg">
                <Card.Img variant="top" src={react} className="w-50 mx-auto" />
                <Card.Footer>
                  <Card.Title className="mb-0 fw-bolder">React</Card.Title>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="p-2 skill-card-bg">
                <Card.Img variant="top" src={node} className="w-50 mx-auto" />
                <Card.Footer>
                  <Card.Title className="mb-0 fw-bolder">Node JS</Card.Title>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="p-2 skill-card-bg">
                <Card.Img variant="top" src={mongo} className="w-50 mx-auto" />
                <Card.Footer>
                  <Card.Title className="mb-0 fw-bolder">MongoDB</Card.Title>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="p-2 skill-card-bg">
                <Card.Img
                  variant="top"
                  src={firebase}
                  className="w-50 mx-auto"
                />
                <Card.Footer>
                  <Card.Title className="mb-0 fw-bolder">Firebase</Card.Title>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="p-2 skill-card-bg">
                <Card.Img
                  variant="top"
                  src={android}
                  className="w-50 mx-auto"
                />
                <Card.Footer>
                  <Card.Title className="mb-0 fw-bolder">Android</Card.Title>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Skill;
