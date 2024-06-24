import Header from "./components/header/Header"
import Hero from "./components/hero/Hero";
import React from "react";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residence from "./components/Residences/Residence";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Getstarted from "./components/Getstarted/Getstarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residence/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    
    </div>
  );
}

export default App;
