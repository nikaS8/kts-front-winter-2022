import React, {useState} from 'react';
import logo from './logo.svg';
import {Button} from "antd";
import './App.css';

import GitHubStore from './store/GitHubStore/GitHubStore';
const gitHubStore = new GitHubStore();
const EXAMPLE_ORGANIZATION = 'ktsstudio';
gitHubStore.getOrganizationReposList({
  org: EXAMPLE_ORGANIZATION
}).then(result => {
  console.log(result);
})


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
