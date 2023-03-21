import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Packages from "./Pages/Packages/Packages";
import Contact from "./Pages/Contact/Contact";
import Signin from "./Pages/Signin/Signin";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
