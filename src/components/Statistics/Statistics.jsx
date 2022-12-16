import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Increment = e => {
    console.log(e.currentTarget.id);
    const id = e.currentTarget.id;
    this.setState(prevstate => {
      return {
        [id]: prevstate[id] + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button id="good" type="button" onClick={this.Increment}>
            Good
          </button>
          <button id="neutral" type="button" onClick={this.Increment}>
            Neutral
          </button>
          <button id="bad" type="button" onClick={this.Increment}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li> Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </ul>
      </>
    );
  }
}

// PropTypes
