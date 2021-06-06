import React from 'react';
import './App.css';
import {Cards} from './components/cards' ;
import {TableData} from './components/table/table';

function App() {
  return (
    <div className="">
      <div className="App">
        <header className="App-header">
          <h1 className="header">COVID-19 INFO</h1>
        </header>
      </div>
      <Cards />
      <TableData />
      <footer>| @sam_cht25 | Email: Sampath.cht25@gmail.com |</footer>
    </div>
  );
}

export default App;
