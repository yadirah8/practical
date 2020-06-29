import React from "react";
import { Jumbotron,Button } from "react-bootstrap";

import styles from "./Hero.module.css";
import Navbars from "../../container/Navbar/Navbar";

const Hero = () => {
  return (
    <Jumbotron fluid className={styles.jumbotron} id="home">
        <Navbars/>
        <div className={styles.text}>
      <h1>Hello, world!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos cumque delectus ratione perferendis cum accusamus autem ex assumenda, consequuntur vitae maiores porro vero? Inventore dolorum alias, dolorem veniam hic provident.
      </p>
      <p>
        <Button className={styles.button}>Learn more</Button>
      </p>
      </div>
    </Jumbotron>
  );
};

export default Hero;
