import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="container">
      <div className="team">
        <h1>Our Team</h1>
        <div className="team-container">
          <div className="team-card">
            <div className="team-card-text-name">Furkan Ömür</div>
            <div className="team-card-text-positon">
              Lead Cinematic Artist / Founder
            </div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/furkan.jpg")} alt="Furkan" />
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Oğuz Dündar</div>
            <div className="team-card-text-positon">
              Lead Developer / Co-Founder
            </div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/Oguz.png")} alt="Oguz"/>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Kerem Şimşek</div>
            <div className="team-card-text-positon">
              Art Director / Co-Founder
            </div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/no-photo.png")} alt="Kerem" />
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Elif Ardoğan</div>
            <div className="team-card-text-positon">Junior 3D Artist </div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/Elif.png")} alt="Elif"/>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Berkay Arda Yıldız</div>
            <div className="team-card-text-positon">Web Developer</div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/Berkay.jpg")} alt="Berkay"/>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Onur Erdinli</div>
            <div className="team-card-text-positon">Level Designer </div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/Onur.jpg")} alt="Onur"/>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Oktay Hotaman</div>
            <div className="team-card-text-positon">Junior Level Designer</div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/Oktay.jpg")} alt="Oktay"/>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Utku Şirin</div>
            <div className="team-card-text-positon">3D Animatör</div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/Utku.jpg")} alt="Utku"/>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Nazım Erkota</div>
            <div className="team-card-text-positon">Senior Developer </div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/Nazim.jpg")} alt="Nazım"/>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Çağrı Çınar</div>
            <div className="team-card-text-positon">Developer</div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/Cagri.jpg")} alt="Çağri"/>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Kemal Okudan</div>
            <div className="team-card-text-positon">Concept Artist</div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/Kemal.png")} alt="Kemal"/>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-text-name">Duygu Turan</div>
            <div className="team-card-text-positon">Concept Artist</div>
            <div className="team-card-image">
              <img src={require("../../Images/Team Members/Duygu.png")} alt="duygu"/>
            </div>
          </div>
          <div className="team-card"></div>
          <div className="team-card"></div>
          <div className="team-card"></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
