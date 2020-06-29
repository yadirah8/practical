import React from 'react';

import styles from './About.module.css';
import Cards from '../../container/Cards/Cards';
const About = () => {
    return (
        <div id="about">
            <div className={styles.text}>
            <h1 className={styles.subhead}>About Us</h1>
            <p className={styles.subtext}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, quia facere voluptatum dolore obcaecati quidem accusantium in repellendus labore, blanditiis quos, autem pariatur qui eos laboriosam voluptatem rerum assumenda illum voluptate dolores asperiores. Possimus hic laborum soluta quo fugit quasi?
            </p>
            </div>
            <div className={styles.team} id="team">
                <h1 className={styles.subhead}>Meet Our Team</h1>
                <Cards />
            </div>
        </div>
    )
}

export default About
