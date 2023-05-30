import React from "react";
import Slider from "./Slider";
import "./Home.css";
import News from "./News";

function Home() {
  return <div className="home">
    <Slider />
    <News />

  </div>;
}

export default Home;
