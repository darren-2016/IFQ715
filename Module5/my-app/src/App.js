const animals = [
  {
    name: "Lion",
    number: 3,
    eats: ["zerba", "antelope", "buffalo", "hippopotamus"],
  },
  {
    name: "Tiger",
    number: 5,
    eats: ["moose", "deer", "buffalo"],
  },
  {
    name: "Giraffe",
    number: 6,
    eats: ["leaves", "twigs"],
  },
  {
    name: "Elephant",
    number: 4,
    eats: ["grass", "leaves", "flowers", "fruit"],
  },
  {
    name: "Monkey",
    number: 10,
    eats: ["fruit", "leaves", "vegetables", "insects"],
  },
  {
    name: "Lemur",
    number: 15,
    eats: ["fruit", "leaves", "insects"],
  },
  {
    name: "Rhinoceros",
    number: 2,
    eats: ["grass", "shoots", "leaves", "berries"],
  },
];



export default function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>Start editing to see some magic happen!</h2>
      {animals.map((animal) => (
        <AnimalComponent name={animal.name} number={animal.number} />
      ))}
      <AnimalComponent name="Lion" number={35} />
    </div>
  );
}

function AnimalComponent(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.number}</p>
    </div>
  );
}


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
