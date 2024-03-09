import { useEffect, useState } from "react";

import logo from './logo.svg';
import './App.css';

function fetchUser(id) {
  const url = `https://reqres.in/api/users/${id}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
}

function App() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser(userId).then((user) => setUser(user));
  }, [userId]);

  return (
    <div className="App">
      <h1>User Details</h1>
      <button disabled={userId === 1} onClick={() => setUserId(userId - 1)}>
        Previous
      </button>
      <button disabled={!userId === 1} onClick={() => setUserId(userId + 1)}>
        Next
      </button>
      {user ? (
        <div>
          <img src={user.avatar} alt="Avatar"></img>
          <ul>
            <li>User id: {userId}</li>
            <li>First Name: {user.first_name}</li>
            <li>Last Name: {user.last_name}</li>
            <li>E: {user.email}</li>
          </ul>  
        </div>
  ) : (
    <p>Loading...</p>
  )}
  </div>
  );
}

export default App;
