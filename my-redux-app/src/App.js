import React from "react";


import "./App.css";
import JobsList from "./components/JobsList";



function App(props) {
  console.log("hello", props)
  return (
    <div className="App">
      <h1>Job Hunt!</h1>
      <JobsList  />
    </div>
  );
}



export default App;
