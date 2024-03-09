import { Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="text-bg-light mt-auto p-5">
            <Row>
                <Col md={6}>
                    <p>&copy; 2024, Darren J. Draper</p>
                </Col>
                <Col md={6}>
                    <p className="fw-light">More Footer text...</p>
                </Col>
            </Row>
        </footer>
    );
}
