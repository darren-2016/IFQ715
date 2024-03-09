import { Container, Button, Card } from "react-bootstrap";
// import { FontAwesomeIcon } from 

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

export default function BusinessCard ( {name, title, description} ) {
    return (
        <Card border="primary" style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Header className="heading">{name}</Card.Header>
          <Card.Body>
            {/* <Card.Title>{ name }</Card.Title> */}
            <Card.Subtitle className="subtitle mb-2 text-muted">{ title }</Card.Subtitle>
            <Card.Text className="description">{ description }</Card.Text>
            <Card.Link href="#">Email</Card.Link>
            <Card.Link href="#">LinkedIn</Card.Link>

            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
    ); 
}
