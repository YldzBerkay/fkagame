import React from "react";
import "./App.css";
import Header from "./Components/HeaderArea/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/HomeArea/Home";
import Footer from "./Components/FooterArea/Footer";
import Terms from "./Components/TermArea/Terms";
import Team from "./Components/TeamArea/Team";
import Contact from "./Components/ContactArea/Contact";
import Press from "./Components/PressArea/Press";
import TheLostHope from "./Components/GameArea/TheLostHope";
import Error from "./Components/Error/Error";

function App() {
  return (
    <div className="main-class">
      <Header />
      <Routes>

        <Route path="/" element={<Home />}  />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/thelosthope" element={<TheLostHope />} />
        
        <Route path="*" element={<Error />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
