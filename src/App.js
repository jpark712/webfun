import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  const [ipAddr, setIpAddr] = useState(null);

  useEffect(() => {
    fetch('/api/ip').then(res => res.json()).then(data => {
      setIpAddr(data.ip_addr);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p> The current time is {currentTime}.</p>

        <p> Your IP Address is {ipAddr}</p>
      </header>
    </div>
  );
}

export default App;
