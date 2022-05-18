import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [CLientList, setCLientList] = useState({});

  useEffect  (() => {
    console.log("pedindo")
     fetch('http://localhost:5000/clients')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const list = {...data}
        setCLientList(list)
      }).catch((err) => {console.error(err)})
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Portal Controle De Documentos</p>
        <h2>
        {JSON.stringify(CLientList)}
        </h2>
      </header>
    </div>
  );
}
export default App;
