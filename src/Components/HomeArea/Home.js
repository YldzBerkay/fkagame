import React from "react";
import Slider from "./Slider";
import "./Home.css";
import News from "./News";
import TheLostHope from "../GameArea/TheLostHope";

function Home() {
  return <div className="home">
    <Slider />
    <TheLostHope />

  </div>;
}

export default Home;
