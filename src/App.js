import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Dashbord from './Dashbord';
function App() {
  return (
    <div className="app">
        <Header />
        <div className="dashbord"> 
            <Dashbord />
        </div>
    </div>
  );
}

export default App;
