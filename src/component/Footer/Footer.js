import React from 'react';
import { Card } from "react-bootstrap";

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <Card className={styles.footer} bg="dark" >
            <Card.Footer className="text-muted" id="contact"> Copyright &copy; Evince Nigeria Limited.All Rights Reserved</Card.Footer>
        </Card>
    )
}

export default Footer