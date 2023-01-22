import React from "react";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import Manager from "../src/Components/Manager";
import Server from "../src/Components/Server";
import About from "../src/Components/About";
//import Login from "../src/Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <Routes>
        <Route exact path="/manager" element={<Manager />}></Route>
        <Route exact path="/server" element={<Server />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        </Routes>
    </div>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
