import { Container, Button, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";


export default function BusinessCard () {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Software Engineer</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Email</Card.Link>
            <Card.Link href="#">LinkedIn</Card.Link>

            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
    ); 
}
