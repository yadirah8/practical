import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <h2 className={styles.heading}>Contact Us</h2>
      <Row>
        <Col lg={5} md={12}>
          <Form className={styles.form}>
            <Form.Group>
              <Form.Control
                className={styles.input}
                type="text"
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className={styles.input}
                type="email"
                placeholder="Email Address"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className={styles.input}
                type="text"
                placeholder="Subject"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className={styles.textarea}
                as="textarea"
                rows="3"
                cols="30"
                placeholder="Your Message"
              />
            </Form.Group>

            <Button
              className={styles.button}
              variant="outline-primary"
              type="submit"
            >
              <i class="fas fa-paper-plane"></i>&nbsp;Send
            </Button>
          </Form>
        </Col>
        {/* Map */}
        <Col lg={7} md={12}>
          <Container>
            <div className={styles.mapcontainer} id="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.18054456352!2d3.3909005354632935!3d6.578941655388249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92a2fae8f251%3A0x34ef4d790b6ef35b!2sOur%20Daily%20Manna!5e0!3m2!1sen!2sng!4v1594019805987!5m2!1sen!2sng"
                style={{ border: "0" }}
                width="100%"
                height="315px"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
