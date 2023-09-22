import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable } from "mdbreact";
import axios from "axios";



function App() {


  //save axios  response to state
  let [data, setData] = useState([]);


  
  function getData(){
  
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://a-d9z9.onrender.com/precios',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      let lista=response.data; 
      return lista
   
    })
    .catch((error) => {
      console.log(error);
    });
    
  }


  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.

  useEffect(() => {
    let lista = getData();
    setData(lista);
  }, []);


  
  const cols = {
    columns: [
      {
        label: "Codigo",
        field: "C",
        sort: "asc",
        width: 150,
      },
      {
        label: "Descripcion",
        field: "B",
        sort: "asc",
        width: 150,
      },
      {
        label: "Precio",
        field: "D",
        sort: "asc",
        width: 150,
      },
      {
        label: "Ubicacion",
        field: "F",
        sort: "asc",
        width: 150,
      }
    ],
    rows: data,
  };

  return (
    <div className="App">
      <h1>Mastermoto</h1>
      <MDBDataTable striped bordered hover data={cols} />
    </div>
  );
}

export default App;
