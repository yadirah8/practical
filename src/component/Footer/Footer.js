import React from "react";
import { Row, Col } from "react-bootstrap";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer} id="about">
      <Row>
        <Col md={3} sm={6}>
          <h4>Address</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore unde non.</li>
            <li>08000000034</li>
            <li>09000000024</li>
          </ul>
        </Col>
        <Col md={3} sm={6}>
          <h4>Lorem, ipsum.</h4>
          <ul>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
          </ul>
        </Col>
        <Col md={3} sm={6}>
          <h4>Lorem, ipsum.</h4>
          <ul>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
          </ul>
        </Col>
        <Col md={3} sm={6}>
          <h4>Lorem, ipsum.</h4>
          <ul>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
            <li ><a href="/" className={styles.link}>Lorem, ipsum.</a></li>
          </ul>
        </Col>
      </Row>
      {/* copyright */}
      <div className={styles.copy}>
        <p className={styles.text}>
          &copy;{new Date().getFullYear()} Evince Nigeria Limited.All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
// className = "text-muted" id = "footer" >
//   { " "}
// Copyright & copy; Evince Nigeria Limited.All Rights Reserved
