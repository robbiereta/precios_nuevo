import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useState, useEffect } from "react";
import lista from "./carabela_nov22.json";


function App() {

  //save axios  response to state
  let [data, setData] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  
  
  useEffect(() => {
    setData(lista);
  },[]);
console.log(data);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
