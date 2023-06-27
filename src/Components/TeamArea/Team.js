import React,{useEffect}from "react";
import "./Team.css";
import TeamCard from "./TeamCard";

function Team() {
  useEffect(() => {
    document.title = "Team";  
  }, []);
  return (
    <div className="container">
      <div className="team">
        <h1>Our Team</h1>
        <div className="team-container">
          <TeamCard 
            name="Furkan Ömür"
            position="Lead Cinematic Artist / Founder"
            image={require("../../Images/Team Members/furkan.jpg")}
            alt="Furkan"
          />
          <TeamCard
            name="Oğuz Dündar"
            position="Lead Developer / Co-Founder"
            image={require("../../Images/Team Members/Oguz.png")}
            alt="Oguz"
          />
          <TeamCard
            name="Kerem Şimşek"
            position="Art Director / Co-Founder"
            image={require("../../Images/Team Members/Kerem.jpg")}
            alt="Kerem"
          />
          <TeamCard
            name="Elif Ardoğan"
            position="Junior 3D Artist"
            image={require("../../Images/Team Members/Elif.png")}
            alt="Elif"
          />
          <TeamCard
            name="Berkay Arda Yıldız"
            position="Web Developer"
            image={require("../../Images/Team Members/Berkay.jpg")}
            alt="Berkay"
          />
          <TeamCard
            name="Onur Erdinli"
            position="Level Designer"
            image={require("../../Images/Team Members/Onur.jpg")}
            alt="Onur"
          />
          <TeamCard
            name="Oktay Hotaman"
            position="Junior Level Designer"
            image={require("../../Images/Team Members/Oktay.jpg")}
            alt="Oktay"
          />
          <TeamCard
            name="Nazım Erkota"
            position="Senior Developer"
            image={require("../../Images/Team Members/Nazim.jpg")}
            alt="Nazım"
          />
          <TeamCard
            name="Çağrı Çınar"
            position="Developer"
            image={require("../../Images/Team Members/Cagri.jpg")}
            alt="Çağri"
          />
          <TeamCard
            name="Kemal Okudan"
            position="Concept Artist"
            image={require("../../Images/Team Members/Kemal.png")}
            alt="Kemal"
          />
          <TeamCard
            name="Duygu Turan"
            position="Concept Artist"
            image={require("../../Images/Team Members/Duygu.png")}
            alt="Duygu"
          />
          <TeamCard
            name="Anıl Özgen"
            position="3D Karakter Artist"
            image={require("../../Images/Team Members/Anil.png")}
            alt="Anıl"
          />
          <div className="team-card"></div>
          <div className="team-card"></div>
          <div className="team-card"></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
