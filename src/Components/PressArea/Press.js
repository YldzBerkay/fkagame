import React from "react";

import "./Press.css";

function Press() {
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
                Red Barrels is the studio behind the immersive indie horror
                series Outlast, a series that has terrified more than 8 million
                players worldwide. Based in Montreal, Red Barrel’s mission is to
                create unforgettable experiences that leave the player’s blood
                running cold.
              </p>
              <h1>History</h1>
              <p>
                Red Barrels was founded by Philippe Morin (Prince of Persia:
                Sands of Time, Assassin’s Creed and Uncharted: Drake’s Fortune),
                David Chateauneuf (Lead level designer: Prince of Persia: Sands
                of Time, Assassin’s Creed and Splinter Cell: Conviction) and
                Hugo Dallaire (Art Director: Splinter Cell and Army of Two).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Press;
