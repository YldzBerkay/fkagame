import React,{useEffect} from "react";

import "./Press.css";

function Press() {
  useEffect(() => {
    document.title = "Press";  
  }, []);
  return (
    <div className="container">
      <div className="press">
        <div className="press-header">
          <div className="press-left-side">
            <div className="press-left-side-information">
              <h1>Factsheet</h1>
              <h3>Developer:</h3>
              <p>FKA Games</p>
              <p>Based in Istanbul, Turkey</p>
              <h3>Founding date:</h3>
              <p>2023</p>
              <h3>Website:</h3>
              <p>
                <a href="fkagame.com">fkagames.com</a>
              </p>
              <h3>Press / Business Contact:</h3>
              <p>info@fkagame.com </p>
              <h3>Social:</h3>
              <p>
                <a href="https://www.instagram.com/fkagames/">Instagram</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/fkagames/">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className="press-right-side">
            <div className="press-right-side-information">
              <h1>Description</h1>
              <br></br>
              <p>
                FKA Games is an independent game development team based in
                Istanbul, Turkey. It was founded by Furkan Ömür, with
                co-founders Oğuz Dündar and Kerem Şimşek. Currently, the team
                consists of a total of 10 people and is in the process of
                developing a computer game.
                <br></br> <br></br>
                FKA Games has a team dedicated to designing creative and
                exciting games. The members of the team are experienced and
                talented professionals who are passionate about the world of
                gaming. Each member specializes in different stages of game
                development and aims to work together synergistically to create
                high-quality games.
                <br></br> <br></br>
                The goal of FKA Games in the game development process is to
                provide players with unique and immersive experiences. The
                team's vision is to create games that ignite players'
                imaginations with captivating stories and challenging puzzles.
                They aim to provide an enjoyable experience to players through
                impressive graphics, captivating sounds, and smooth gameplay.
                <br></br> <br></br>
                FKA Games aims to achieve great success in the field of game
                development to which they are passionately committed. In the
                current phase of computer game development, the team is laying
                the foundations for an exciting game by combining their
                creativity and technical knowledge. Upon completion of the game,
                FKA Games aims to provide players with an unforgettable
                experience.
                <br></br> <br></br>
                As an independent game studio, FKA Games is dedicated to
                delivering innovative and high-quality products to the gaming
                industry. The team continually explores and develops new ideas
                for an exciting future. With the support and interest of gamers,
                FKA Games embarks on an exciting journey of growth and success.
              </p>
              <h1>History</h1>
              <p>
                Furkan Ömür The Lost Hope Founder / Lead Game Designer (FKA
                Games 2023) Oğuz Dündar Co-Founder / Lead Game Developer Endless
                Combat (Fatalitech 2017) The Lost Hope (FKA Games 2023) Kerem
                Şimşek Co-Founder / Art Director The Lost Hope (FKA Games 2023)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Press;
