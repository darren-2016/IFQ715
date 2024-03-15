
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-bootstrap";

import TextField from "../TextField";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const API_URL = `https://d2h6rsg43otiqk.cloudfront.net/prod`;
    const url = `${API_URL}/user/login`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV",
        // "X-API-KEY": "889c4757807b42ec98a21636231510",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setMessage(data.message);
        } else {
          localStorage.setItem("token", data.token);
          navigate({ pathname: "/" });
        }
      });
    };

  return (
    <Container fluid="lg" className="pt-2">
      <main className="flex-grow-1">
        <Row className="viewport-height-75 align-items-center">
          <Col md={6} lg={5} className="text-center">
            <FontAwesomeIcon
              icon={faDoorOpen}
              className="page-icon text-secondary"
            />
          </Col>
          <Col md={6} lg={7}>
            <h1 className="mb-5">Login</h1>
            {message ? <Alert variant="danger">{message}</Alert> : null}
            <Form>
              <TextField text="Email" type="email" onChange={setEmail} value={email}/>
              <TextField text="Password" type="password" onChange={setPassword} value={password} />
              <Button type="submit" variant="primary" className="mt-3" onClick={(event) => handleLogin(event)}>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </main>
    </Container>
  );
}
