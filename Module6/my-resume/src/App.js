import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

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

function Home() {
  return <h1>Home</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function Header() {
  return <p>Header</p>;
 }

 function Footer() {
  return <p>Footer</p>;
 }

export default App;
