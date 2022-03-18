import React from "react";

import Home from './Home/Home.jsx'
import Header from './Header/Header.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
