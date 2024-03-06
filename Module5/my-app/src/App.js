export default function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>Start editing to see some magic happen!</h2>
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
