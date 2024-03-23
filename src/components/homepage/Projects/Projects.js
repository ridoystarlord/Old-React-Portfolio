import React from "react";
import { Container, Row } from "react-bootstrap";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
  return (
    <Container className="my-5 text-center">
      <small className="fw-bold mb-0">WORKING PROCESS</small>
      <h1 className="project-section-title mb-4 fw-bolder">
        LASTET WORKING <span>PROJECT</span>
      </h1>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Project></Project>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
