import { useState } from "react";

import logo from './logo.svg';
import './App.css';


function App() {
  const janet = {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
  };
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <h1>User Details</h1>
      <button onClick={() => setUser(janet)}>Get User</button>
      <ul>
        <li>First Name: {user.first_name}</li>
        <li>Last Name: {user.last_name}</li>
        <li>E: {user.email}</li>
      </ul>  
    </div>
  );
}

export default App;
