import React from 'react';
import logo from './logo.svg';
import './App.css';

console.log("process.env");
console.log(process.env);

console.log("process.env.REACT_APP_SERKAN");
console.log(process.env.REACT_APP_SERKAN);
console.log(process.env["REACT_APP_SERKAN"]);

console.log("process.env.REACT_APP_SERKAN_2");
console.log(process.env.REACT_APP_SERKAN_2);
console.log(process.env["REACT_APP_SERKAN_2"]);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Version 0.2
        </p>


        <div>
            <div>REACT_APP_SERKAN: {process.env.REACT_APP_SERKAN}</div>  
            <div>REACT_APP_SERKAN_2: {process.env.REACT_APP_SERKAN_2}</div>
        </div> 
 

      </header>
    </div>
  );
}

export default App;
