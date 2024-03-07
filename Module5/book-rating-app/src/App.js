// import logo from './logo.svg';
import './App.css';

import { useState } from "react";

const books = [
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "The Magician's Nephew",
    author: "C. S. Lewis",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
  },
 ];

 function Book(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <LikeCounter/>
    </div>
  );
}

// function Book({ title, author }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{author}</p>
//     </div>
//   );
// }

export default function App() {
  return (
    <div className="App">
      
      {/* {books.map((book) => (
      <Book title={book.title} author={book.author} />
        ))} */}

      {books.map((book) => (
      <Book {...book} />
        ))}
    </div>
  );
}

function LikeCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((oldCount) => oldCount + 1);
  };
  const decrement = () => {
    setCount((oldCount) => oldCount - 1);
  };
  return (
    <div>
      <p>Like Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}
