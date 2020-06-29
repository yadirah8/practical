import React from 'react'
import {CardDeck, Card} from 'react-bootstrap';

import img1 from "../../assets/woman2.jpg";
import img2 from '../../assets/beard.jpg';
import img3 from "../../assets/woman2.jpg";
import styles from "./Cards.module.css"

const Cards = () => {
    return (
        <CardDeck className={styles.deck}>
            <Card className={styles.card}>
                <Card.Img className={styles.img} variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime est ullam magni autem quia molestiae, suscipit amet asperiores debitis libero dicta consequatur earum. Dicta fugiat corporis aliquid tempora adipisci?
      </Card.Text>
                </Card.Body>
            </Card>
            <Card className={styles.card}>
                <Card.Img className={styles.img} variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis accusantium maiores voluptatem molestias, a omnis repellat vel quibusdam temporibus, culpa earum architecto ipsum esse totam odio, ipsa illo in!
        content.{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={styles.card}>
                <Card.Img className={styles.img} variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quam, aliquid deleniti cum enim corrupti, deserunt officiis quibusdam quos, perferendis cumque soluta veniam ducimus. Officiis illum explicabo error rem. Suscipit!
      </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    )
}

export default Cards
