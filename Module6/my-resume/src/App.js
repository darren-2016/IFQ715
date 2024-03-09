import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
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
