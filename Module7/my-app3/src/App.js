import { useState } from "react";

import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <label htmlFor="name">Your Name:</label>

//       <form onSubmit={(event) => {
//         event.preventDefault();

//         console.log(event.target.elements.name.value);
//       }}>
//         <label htmlFor="name">Your Name:</label>
//         <input id="name" name="name" type="text" />
//       </form>
//     </div>
//   );
// }

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="App">

      <h1>Hello, {name}</h1>

      <label htmlFor="name">Your Name:</label>

      <input type="text" name="name" id="name" value={name} 
        onChange={(event) => { const { value } = event.target;
        if (/[0-9]/.test(value)) {
          setError("Names shouldn't have numbers");
        } else {
          setError(null);
        }
          setName(value);
        }
       } />

       {
        error != null ? <p>Error: {error}</p> : null
       }

    </div>
  );
}

export default App;
