import { useState, useEffect } from "react";
import lista from "./lista.json";
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
  }, []);


  
  const data = {
    columns: [
      {
        label: "Codigo",
        field: "A",
        sort: "asc",
        width: 150,
      },
      {
        label: "Descripcion",
        field: "B",
        sort: "asc",
        width: 150,
      }
      
    ],
    rows: data2.lista,
  };

  return (
    <div className="App">
      <h1>Precios</h1>
      <MDBDataTable striped bordered hover data={cols} />
    </div>
  );
}

export default App;
