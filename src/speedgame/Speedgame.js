import React, { Component } from "react";
import "./Speedgame.css";
import Box from "./Box";
import GameOver from "./GameOver";
const colors = ["green", "yellow", "red", "blue"];
const activeQueue = [];

class Speedgame extends Component {
  state = {
    score: 0,
    scoreFlasher: 0,
    activeBox: undefined,
    pace: 1700,
    gameOver: false,
    missclicks: 0
  };

  flash = () => {
    activeQueue.push(this.state.activeBox);
    if (activeQueue.length >= 10) {
      this.stopGame();
    }
    //asettaa activeboxin arvoon undefined,
    this.setState({ activeBox: undefined });
    console.log("Jono: " + activeQueue);
  };

  next = () => {
    //arpoo uuden aktiivisen
    this.setState({ activeBox: Math.floor(Math.random() * 4) });

    // käynnistää flash metodin 150ms päästä joka muuttaa activeboxin takaisin undefined ja lisää flashanneen jonoon muistiin.
    this.flashTimer = setTimeout(this.flash, 150);

    //ehtolauseet pelin nopeudelle, pace staten arvoa muuttamalla.
    if (this.state.pace > 800) {
      this.setState({ pace: this.state.pace * 0.97 });
    } else if (this.state.pace > 600) {
      this.setState({ pace: this.state.pace * 0.98 });
    } else if (this.state.pace > 480) {
      this.setState({ pace: this.state.pace * 0.991 });
    } else {
      this.setState({ pace: this.state.pace * 0.997 });
    }
    console.log(this.state.pace);

    this.timer = setTimeout(this.next.bind(), this.state.pace);
  };

  scoreFlash = () => {
    this.setState({ scoreFlasher: 0 });
  };

  clickHandler = () => {
    console.log("painettu oikein");
    this.setState({ scoreFlasher: 1 });
    this.setState({ score: this.state.score + 1 });
    this.scoreFlashtimer = setTimeout(this.scoreFlash, 100);
    activeQueue.splice(0, 1);
  };
  missclick = () => {
    //play voice
    this.setState({ scoreFlasher: 2 });
    this.setState({ score: this.state.score - 1 });
    this.scoreFlashtimer = setTimeout(this.scoreFlash, 100);
    this.setState({ missclicks: this.state.missclicks + 1 });
    if (this.state.missclicks >= 3) {
      this.stopGame();
    }
  };

  startGame = () => {
    this.next();
  };
  stopGame = () => {
    clearTimeout(this.timer);
    clearTimeout(this.flash);
    this.setState({ gameOver: true });
  };

  render() {
    return (
      <div className="App">
        <h1>Speedtest 2.7</h1>
        <Box
          color={colors[0]}
          active={this.state.activeBox === 0}
          click={activeQueue[0] === 0 ? this.clickHandler : this.missclick}
        />
        <Box
          color={colors[1]}
          active={this.state.activeBox === 1}
          click={activeQueue[0] === 1 ? this.clickHandler : this.missclick}
        />
        <Box
          color={colors[2]}
          active={this.state.activeBox === 2}
          click={activeQueue[0] === 2 ? this.clickHandler : this.missclick}
        />
        <Box
          color={colors[3]}
          active={this.state.activeBox === 3}
          click={activeQueue[0] === 3 ? this.clickHandler : this.missclick}
        />

        <div>
          <div
            className={
              this.state.scoreFlasher === 1
                ? "score green"
                : this.state.scoreFlasher === 2
                ? "score red"
                : "score"
            }
          >
            {this.state.score}
          </div>
        </div>

        <div>
          <button onClick={this.startGame}>Start!</button>
          <button onClick={this.stopGame}>Stop!</button>
        </div>

        {this.state.gameOver && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default Speedgame;
