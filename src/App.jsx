import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Model from "./pages/Model";
//components
import Header from "./components/Header";
//Styles
import "./App.scss";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home imageDetails={imageDetails} />}
        />
        <Route
          path='/model/:id'
          element={<Model imageDetails={imageDetails} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;