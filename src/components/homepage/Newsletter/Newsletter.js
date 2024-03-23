import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <Container className="text-center newsletter">
      <p className="fw-bold">Newsletter</p>
      <h1 className="fw-bolder">
        STAY UP TO DATE, SUBSCRIBE
        <br />
        TO THE <span>FREE NEWSLETTER</span> !
      </h1>
      <div className="d-flex justify-content-center mt-4">
        <div>
          <InputGroup className="mb-3 subscribe-box">
            <FormControl
              className="subscribe-box-input border-0"
              placeholder="Enter Your Email"
              aria-label="Enter Your Email"
              aria-describedby="basic-addon2"
            />
            <Button id="button-addon2" className="border-0 subscribe-box-btn">
              SUBSCRIBE <FontAwesomeIcon icon={faComment} className="ms-2" />
            </Button>
          </InputGroup>
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;
