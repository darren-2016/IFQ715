import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

function HighlightLink(props) {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return <Nav.Link {...props} active={match} />;
}

export default function Header() {
    return (
        <Navbar bg="primary" expand="md" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto">
                        <HighlightLink to="/" as={Link}>
                            Home
                        </HighlightLink>
                        <HighlightLink to="/contact" as={Link}>
                            Contact
                        </HighlightLink>
                        {/* <Nav.Link href="#"to="/">Home</Nav.Link>
                        <Nav.Link to="/contact">Contact</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}

  