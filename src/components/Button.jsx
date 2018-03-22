import React, { Component } from 'react';

export default class Button extends Component {

  render() {

    const { clickFunction, buttonText } = this.props;

    return (
      <button onClick={ clickFunction }>
        {buttonText}
      </button>
    );
  }
}
