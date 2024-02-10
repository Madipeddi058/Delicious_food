import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import img1 from "./images/chef.png";
import Navbar from "./Navbar";
import Home from "./Home";
import Signup from "./Signup";
import Menu from "./Menu";
import Login from "./Login";
// import Navbar from "./Navbar";
function App() {
  return (
    <BrowserRouter>
      <div id="firstdiv">
      <h1 style={{ marginLeft: "0px" }} className="topnav">
        <b className="Delicious1">DELICIOUS </b>
        <b className="food2">FOOD</b>
        <img
          className="chefp"
          src={img1} alt="chef" />
        <div className="anchor">
            <Navbar />
        </div>
      </h1>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
