import React from 'react';

class Clock extends React.Component {
  constructor(p) {
    super(p);
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
    // debugger;
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState ({ date: new Date()});
  }

  render() {
    return (
      <div>
        <h1>Time!</h1>
        <span>{this.state.date.toString()}</span>
      </div>
    );
  }
}

export default Clock;
