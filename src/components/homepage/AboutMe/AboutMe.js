import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import aboutme from "../../../images/about-me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutMe.css";

import {
  faTwitter,
  faInstagram,
  faFacebook,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col sm={12} md={6} lg={6}>
          <div>
            <img src={aboutme} alt="" className="img-fluid mx-auto d-block" />
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <h1 className="about-me-title fw-bolder">
            About <span>Me</span>
          </h1>
          <p>
            My name is Mehedi Hasan Ridoy and i'm professional Android & Web
            Developer. I can create beautiful websites & Applications according
            to your needs. You can contact with me with below social Media.
          </p>
          <div className="about-me-social-media">
            <div>
              <div className="mt-3 d-flex ">
                <FontAwesomeIcon
                  size="2x"
                  icon={faTwitter}
                  className="me-3 about-me-icon"
                />{" "}
                <a
                  href="https://twitter.com/RidoyStarlord/"
                  className="text-white text-decoration-none name"
                >
                  Mehedi Hasan Ridoy
                </a>
              </div>
              <div className="mt-3 d-flex">
                <FontAwesomeIcon
                  size="2x"
                  icon={faInstagram}
                  className="me-3 about-me-icon"
                />{" "}
                <a
                  href="https://www.instagram.com/ridoy_starlord/"
                  className="text-white text-decoration-none"
                >
                  Mehedi Hasan Ridoy
                </a>
              </div>
              <div className="mt-3 d-flex">
                <FontAwesomeIcon
                  size="2x"
                  icon={faFacebook}
                  className="me-3 about-me-icon"
                />{" "}
                <a
                  href="https://www.facebook.com/RidoyStarlord/"
                  className="text-white text-decoration-none"
                >
                  Mehedi Hasan Ridoy
                </a>
              </div>
              <div className="mt-3 d-flex">
                <FontAwesomeIcon
                  size="2x"
                  icon={faWhatsapp}
                  className="me-3 about-me-icon"
                />{" "}
                <a
                  href="https://wa.me/+8801785706971"
                  className="text-white text-decoration-none"
                >
                  Mehedi Hasan Ridoy
                </a>
              </div>
              <div className="mt-3 d-flex">
                <FontAwesomeIcon
                  size="2x"
                  icon={faTelegram}
                  className="me-3 about-me-icon"
                />{" "}
                <a
                  href="https://t.me/ridoystarlord"
                  className="text-white text-decoration-none"
                >
                  Mehedi Hasan Ridoy
                </a>
              </div>
              <div className="mt-5">
                <Button className="hire-me-btn fw-bolder ms-3">
                  Download Resume{" "}
                  <FontAwesomeIcon icon={faDownload} className="ms-3" />
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
