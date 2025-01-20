import React, { useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
