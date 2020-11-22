import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, gameStarted: false };
    this.timerInterval = null;

    this.gameStart = this.gameStart.bind(this);
    this.keyListner = this.keyListner.bind(this);
  }

  gameStart() {
    this.setState({
      gameStarted: true,
    });
    this.timerInterval = setInterval(
      () => this.setState({ time: this.state.time + 1 }),
      1 * 1000);

    document.addEventListener("keydown", this.keyListner);
  };

  componentDidMount() {

  }

  componentWillUnmount() {

  }
  componentDidUpdate() {
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.timerInterval);
      document.removeEventListener("keydown", this.keyListner);
    }
  }

  keyListner(event) {
    if (this.state.gameStarted) {
      if (event.keyCode === 37) {
        this.setState({ y: this.state.y - 5 });
      }
      if (event.keyCode === 38) {
        this.setState({ x: this.state.x - 5 });
      }
      if (event.keyCode === 39) {
        this.setState({ y: this.state.y + 5 });
      }
      if (event.keyCode === 40) {
        this.setState({ x: this.state.x + 5 });
      }
    }
  };

  render() {
    return (
      <>
        { !this.state.gameStarted ? (
          <button className="start" onClick={this.gameStart}>Start</button>
        ) : (
            <>
              <div className="ball" style={{ top: this.state.x + "px", left: this.state.y + "px" }}></div>
              <div className="hole"></div>
              <h3 className="heading-timer">{this.state.time}</h3>
            </>
          )}
      </>
    );
  }
}

export default Timer;
