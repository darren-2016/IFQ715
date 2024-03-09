import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./Home";
import Contact from "./Contact";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column bg-light">
        <div className="App">
          <Header />
            <Container fluid className="pt-2">
              {/* content */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Container>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
