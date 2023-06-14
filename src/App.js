import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => { 
    setCount(count + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='btn' onClick={handleClick}>Contar</button>
      </header>
    </div>
  );
}

export default App;
