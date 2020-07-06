import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import styles from "./Feature.module.css";

const Feature = () => {
  return (
    <div>
      <Row>
        <Col md={4} className={styles.col}>
          <i
            class="fa fa-check-circle-o fa-4x"
            aria-hidden="true"
            style={{ color: "orange" }}
          ></i>
          <h4 className={styles.heading}>Accuracy</h4>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dolore exercitationem, deleniti facilis itaque voluptate porro
            sapiente tempore cumque pariatur.
          </p>
        </Col>
        <Col md={4} className={styles.col}>
          <i
            class="fa fa-handshake-o fa-4x"
            aria-hidden="true"
            style={{ color: "orange" }}
          ></i>
          <h4 className={styles.heading}>Teamwork</h4>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dolore exercitationem, deleniti facilis itaque voluptate porro
            sapiente tempore cumque pariatur.
          </p>
        </Col>
        <Col md={4} className={styles.col}>
          <i
            class="fa fa-laptop fa-4x"
            aria-hidden="true"
            style={{ color: "orange" }}
          ></i>
          <h4 className={styles.heading}>Training</h4>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dolore exercitationem, deleniti facilis itaque voluptate porro
            sapiente tempore cumque pariatur.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Feature;
