import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import styled from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className={styled.error}>
            <h1 className={styled.h1}>Oops!</h1>
                      <h2 className={styled.h2}>Error 404 Not Found</h2>
            <div className={styled.detail}>
              Sorry, an error occured. The requested page was not found!
            </div>
            <div className={styled.action}>
              <Link to="/">
                              <Button variant="outline-primary" size="lg" className={styled.button}>
                  <i class="fas fa-home"></i>&nbsp;Back to Home
                </Button>
              </Link>
              <Link>
                {" "}
                              <Button className={styled.button} variant="outline-secondary" size="lg">
                  <i class="fas fa-envelope"></i>&nbsp;Support
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
