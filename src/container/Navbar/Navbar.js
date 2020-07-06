import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

import styles from "./Navbar.module.css";

const Navbars = () => {
  return (
    <Navbar collapseOnSelect  variant="dark" fixed="top" expand="lg" className={styles.nav}>
      <Navbar.Brand href="#home">Virus</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.nav_link}
          ><i class="fas fa-home"></i>&nbsp;
            Home
          </Link>
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.nav_link}
          >
            Features
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.nav_link}
          >
            Contact Us
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.nav_link}
          >
            About Us
          </Link>
        </Nav>
        <Nav>
          <Nav.Link className={styles.nav_link} href="#feature">
            Login
          </Nav.Link>
          <Nav.Link className={styles.nav_link} href="#feature">
            SignUp
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navbars;
