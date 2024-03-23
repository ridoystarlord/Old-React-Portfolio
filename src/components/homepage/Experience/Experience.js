import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import exp from "../../../images/programming.svg";
import "./Experience.css";

const Experience = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="g-3">
        <Col sm={12} md={6} lg={6} className="tests">
          <h1 className="text-center fw-bolder mb-4 experiences-title">
            Professional <span>Experiences</span>
          </h1>
          <div className="p-3 experience-box text-center">
            <h6>2021 - Present</h6>
            <h4 className="company-title fw-bolder">Ajax Business Solutions</h4>
            <p>Cairo, Egypt</p>
            <p className="mb-0">Full Stack Software & Web developer</p>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <img src={exp} alt="" className="experiences-img" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
