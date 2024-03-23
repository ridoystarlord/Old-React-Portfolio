import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HeroBanner.css";
import heroBanner from "../../../images/my-images.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

const HeroBanner = () => {
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col sm={12} md={6} lg={6} className="d-flex align-items-center">
          <div>
            <div className="hero-Banner-title">
              <h1>
                I'm <span>Ridoy</span>
              </h1>
              <h6>Freelance Android & Web Developer</h6>
              <p>
                I love to build your Android & Web Application which is
                attractive, interactive & User Friendly. I spend my time working
                on freelance projects and building my own products.
              </p>
              <div>
                <FontAwesomeIcon size="2x" icon={faGithub} className="me-2" />
                <FontAwesomeIcon size="2x" icon={faLinkedin} className="me-2" />
                <FontAwesomeIcon
                  size="2x"
                  icon={faStackOverflow}
                  className="me-2"
                />
                <FontAwesomeIcon size="2x" icon={faSkype} className="me-2" />
                <FontAwesomeIcon size="2x" icon={faEnvelope} />
              </div>
              <div className="mt-3">
                <Button className="hire-me-btn fw-bolder px-3">Hire Me</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div>
            <img src={heroBanner} alt="" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroBanner;
