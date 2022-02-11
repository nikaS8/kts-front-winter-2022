import React from 'react';
import logo from './logo.svg';
import {Button} from "antd";
import './App.css';

function App() {
  const sayHello:string = 'Hello!!';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>Click me!</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {sayHello}
        </a>
      </header>
    </div>
  );
}

export default App;
