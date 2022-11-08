import React from "react";
import { Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1>Welcome to Note Zipper</h1>
              <p>One Safe place for all you notes.</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
