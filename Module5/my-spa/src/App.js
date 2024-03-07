import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      {/* the content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />      
    </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function Location() {
  return <h1>Location</h1>;
}

function Login() {
  return <h1>Login</h1>;
}

function Register() {
  return <h1>Regsiter</h1>;
}

function Header() {
  return <p>Header</p>;
}

function Footer() {
  return <p>Footer</p>;
}

export default App;
