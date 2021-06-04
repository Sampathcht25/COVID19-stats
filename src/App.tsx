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
      <header className="">
        {/* <p>{getData.confirmed.value}Hello</p>
        <p>{getData.confirmed.detail}Hello</p>
        <p>{getData.lastUpdate}Hello</p>
        <p>{getData.recovered.value}Hello</p> */}

      </header>
      <Cards />
      <TableData />

    </div>
  );
}

export default App;
