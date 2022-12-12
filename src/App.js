import { useState, useEffect } from "react";
import lista from "./kuraz.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable } from "mdbreact";

function App() {

  //save axios  response to state
  let [data2, setData] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  
  
  useEffect(() => {
    setData(lista);
  },[]);
console.log(data2);
const data = {
  columns: [
    {
      label: "Codigo",
      field: "Codigo",
      sort: "asc",
      width: 150
    },
    {
      label: "Descripcion",
      field: "Descripcion",
      sort: "asc",
      width: 150
    },
    {
      label: "Marca",
      field: "Marca",
      sort: "asc",
      width: 150
    },
    {
      label: "Moto",
      field: "MOTO",
      sort: "asc",
      width: 150
    },
    {
      label: "Existencia",
      field: "Existencia",
      sort: "asc",
      width: 150
    },
    {
      label: "Precio",
      field: "Precio",
      sort: "asc",
      width: 150
      
    }
  ],
  rows: data2.lista
};


  return (
    <div className="App">
    <h1>Carabela,Kurazai,Islo</h1>
    <h3>Lista de diciembre 2022</h3>
    <MDBDataTable striped bordered hover data={data} />
  
    </div>
  );
}

export default App;
