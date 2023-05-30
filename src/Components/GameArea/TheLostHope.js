import React from "react";
import "./TheLostHope.css";

function TheLostHope() {
  return (
    <div className="container">
      <div className="thelosthope">
        <div className="thelosthope-header">
          <p>THE LAST HOPE</p>
        </div>
        <div className="thelosthope-body">
          <div className="thelosthope-part-one">
            <h1>CO-OP FANTASTIC FEAR GAME</h1>
            <p>
              The Lost Hope" is a fantastical horror co-op game where players
              are tasked with completing designated missions and reaching the
              ultimate goal. The game features four characters, and in order to
              progress, players must work together and overcome various
              challenges..
            </p>
            <img src={require("../../Images/game3.1.jpg")} alt="game3.1"/>
            <h1>FIND THE PUZZLE</h1>
            <p>
              Solve the puzzles, escape the room, or else time will run out, and
              you will encounter unwanted consequences.
            </p>
            <img src={require("../../Images/game3.2.jpg")} alt="game3.2"/>
            <h1>TRUST YOUR FRIENDS</h1>
            <p>
              Trust your friends, escape the rooms together, and achieve
              success. If you don't trust your friends, you won't be able to
              succeed in this task. You definitely need them. If one person gets
              hurt, the job will become even more difficult.
            </p>
            <br></br>            <br></br>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TheLostHope;
