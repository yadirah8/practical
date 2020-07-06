import React from "react";
import { Container } from "react-bootstrap";

import styles from "./Features.module.css";
import Feature from "../../container/Feature/Feature";
const Features = () => {
  return (
    <div id="features">
      <Container>
        <div className={styles.text}>
          <h2 className={styles.heading}>Features</h2>
          <p className={styles.subtext}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, quia
            facere voluptatum dolore obcaecati quidem accusantium in repellendus
            labore, blanditiis quos, autem pariatur qui eos laboriosam
            voluptatem rerum assumenda illum voluptate dolores asperiores.
            Possimus hic laborum soluta quo fugit quasi?
          </p>
        </div>
        <div className={styles.feature} id="team">
          <Feature />
        </div>
      </Container>
    </div>
  );
};

export default Features;
