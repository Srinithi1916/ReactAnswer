import React from "react";
import Navbar from "./navbar";
import Home from "./home";

import { FontProvider } from "./FontContext";
import "./App.css";
import Footer from "./footer";
function App() {
  return (
    <FontProvider>
      <div className="App">
        <Navbar />
        <Home />
      <Footer/>
      </div>
    </FontProvider>
  );
}
export default App;
