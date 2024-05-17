import React, { useState } from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Productd from "./Components/Productd";
import Men from "./Components/Men";
import Girl from "./Components/Girl";
import MenProducts from "./Components/MenProducts";
import WomenProducts from "./Components/WomenProducts";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Homepage named="moiz" />}></Route>
          <Route exact path="/men" element={<Men />}></Route>
          <Route exact path="/women" element={<Girl />}></Route>
          <Route exact path="/menproducts" element={<MenProducts />}></Route>
          <Route exact path="/womenproducts"  element={<WomenProducts />}></Route>
          <Route exact path="/p" element={<Productd />}></Route>
          <Route exact path="/signin" element={<Login />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
