import { Component } from "react";

class Timer extends Component {
  state = {
    currentDate: new Date(),
    dateFinishedTimer: new Date("Fri Sep 27 2024 21:00:00 GMT+0000"),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDate: new Date(),
    });
  }

  render() {
    const timeDifference =
      this.state.dateFinishedTimer - this.state.currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return (
      <>
        <p>
          {days < 10 ? `0${days}` : days}:{hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </>
    );
  }
}

export default Timer;
