
import React, { Component, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About"
import Contact from "./Components/Contact"
import Tools from "./Components/Tools"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NoPage from "./Components/NoPage";
// import Fruit from "./Components/Fruit";
// import {Home,About,Tools,Contact} from "./Components"



function App() {
  


  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Tools" element={<Tools/>} />
          <Route path="/Contact" element={<Contact />} />  
          <Route path="*" element={<NoPage />} /> 
        </Routes>
    </BrowserRouter>  
    
    </div>
 
  );
}

export default App;
