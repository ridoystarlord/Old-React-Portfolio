import React from "react";
import { Card, Col } from "react-bootstrap";

const Project = () => {
  return (
    <Col className="h-100">
      <Card className="skill-card-bg h-100">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Footer>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Project;
