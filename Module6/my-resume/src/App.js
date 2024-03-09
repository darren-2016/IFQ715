import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column bg-light">
        <div className="App">
          <Header />
          {/* content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}


function Header() {
  return <p>Header</p>;
 }

 function Footer() {
  return <p>Footer</p>;
 }

export default App;
