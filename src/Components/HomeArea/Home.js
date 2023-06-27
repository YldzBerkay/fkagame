import React,{useEffect} from "react";
import Slider from "./Slider";
import "./Home.css";
import TheLostHope from "../GameArea/TheLostHope";

function Home() {
  useEffect(() => {
    document.title = "FKA Games";  
  }, []);
  return <div className="home">
    <Slider />
    <TheLostHope />
  </div>;
}

export default Home;
