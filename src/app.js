import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Salesman from "./pages/salesman";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Salesman />} />
      </Routes>
    </>
  );
}

export default App;
