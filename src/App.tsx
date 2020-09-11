import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
         
        >
          Learn React
        </a>
        <Search search_placeholder="Skriv inn søkeord" button="Trykk meg" url="https://892cc57b-1302-4256-a43e-caf341ab9547.mock.pstmn.io/api/"/>
      </header>
    </div>
  );
}

export default App;
