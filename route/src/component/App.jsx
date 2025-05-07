import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Home/Login";
import Signup from "./Home/Signup";
import Home from "./Home/Home";
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
