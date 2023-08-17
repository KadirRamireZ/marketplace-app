import React from "react";
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";

function App() {
  return (
    <>
      <img
        className="nikebarra"
        src={
          "https://cdn.shopify.com/s/files/1/1880/7069/files/Nike-Banner-March2023.png?v=1680121865"
        }
        alt=""
       
      />
      <DataProvider>
        <div className="App">
          <Router>
            <Header />
            <Carrito />
            <Pages />
          </Router>
        </div>
      </DataProvider>
      <img
        className="nikebarra"
        src={
          "https://img.buzzfeed.com/buzzfeed-static/complex/images/Y19jcm9wLGhfNDYwLHdfMTcwMSx4XzE0LHlfMA==/tqzvsvpfwgb7fjdmxn0r/nike-just-do-it-logo.jpg"
        }
        alt=""
        width="300"
      />
    </>
  );
}

export default App;
