import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MetricAdd from "./components/add-metric.component";
import HomeMetrics from "./components/home-metric.component";
import NavBar from "./components/navbar.component";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMetrics />} exact></Route>
          <Route path="/addNewMetric" element={<MetricAdd />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
