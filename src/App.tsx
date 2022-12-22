import React from 'react';
import logo from './logo.svg';
import './App.css';

console.log("process.env");
console.log(process.env);

console.log("process.env.REACT_APP_SERKAN");
console.log(process.env.REACT_APP_SERKAN);
console.log(process.env["REACT_APP_SERKAN"]);

console.log("process.env.REACT_APP_COMMIT_ID");
console.log(process.env.REACT_APP_COMMIT_ID);
console.log(process.env["REACT_APP_COMMIT_ID"]);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <div>package date: {process.env.REACT_APP_GITHUB_PACKAGE_DATE}</div> 
        <div>package version: {process.env.REACT_APP_GITHUB_PACKAGE_VERSION}</div> 
      </header>
    </div>
  );
}

export default App;
