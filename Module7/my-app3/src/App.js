import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="name">Your Name:</label>
      <form onSubmit={(event) => {
        event.preventDefault();

        console.log(event.target.elements.name.value);
      }}>
        <label htmlFor="name">Your Name:</label>
        <input id="name" name="name" type="text" />
      </form>
    </div>
  );
}

export default App;
