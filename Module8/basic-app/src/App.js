
import './App.css';

const API_URL = `https://d2h6rsg43otiqk.cloudfront.net/prod`;

const getFactors = () => {
  const url = `${API_URL}/factors/2020`;
  const token = localStorage.getItem("token")

  return fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      "X-API-KEY": "EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV"
   }
 })
    .then((res) =>
      res.json().then((res) => {
        console.log(res);
     })
   )
    .catch((error) => console.log(error));
};


export default function App() {
  const login = () => {
    const url = `${API_URL}/user/login`;

    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV"
      },
      body: JSON.stringify({ email: "mike@gmail.com", password: "password" }),
    })
      .then((res) => res.json().then((res) => {
        localStorage.setItem("token", res.token);
        console.log(res.token);
      })
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>JWT Token Example</h1>
      <button onClick={login}>Login</button>
      <button onClick={getFactors}>Get Factors</button>
    </div>
  );
}
