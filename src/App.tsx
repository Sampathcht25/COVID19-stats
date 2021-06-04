import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchCountryData, fetchDailyData, fetchCountriesData} from '../src/api'
import {Cards} from './components/cards' ;
import {TableData} from './components/table/table';

function App() {

  let getVal:any = null;
  const[getData, setData] = useState(getVal);

  useEffect(()=>{
    const fetch_Data = async() => {
      const data:any = await fetchCountryData('usa')
      setData(data);
    };
    
    fetch_Data();
  }, [setData])

  console.log(getData, "valuee");
  console.log(fetchCountriesData(), "fetchCountriesData")

  return (
    <div className="">
      <div className="App">
        <header className="App-header">
          <h1 className="header">COVID-19 INFO</h1>
        </header>
      </div>
      <Cards />
      <TableData />
      <footer>@ sam_cht25</footer>
    </div>
  );
}

export default App;
