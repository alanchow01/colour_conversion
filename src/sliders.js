import React from 'react';

import '../styles/sliders.css';

export default class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 127,
      green: 127,
      blue: 127
    };
  }

  _colorUpdateRed = (e) => {
    this.setState( { red: e.target.value } )
  }
  _colorUpdateGreen = (e) => {
    this.setState( { green: e.target.value } )
  }
  _colorUpdateBlue = (e) => {
    this.setState( { blue: e.target.value } )
  }

  render () {
    return(
      <div className="slider">
        <input type="range" id="red" min="0" max="255" value={this.state.red} step="1" onChange={ this._colorUpdateRed } />
        <p className="sliderVals">Red: {this.state.red}</p>
        <input type="range" id="green" min="0" max="255" value={this.state.green} step="1" onChange={ this._colorUpdateGreen } />
        <p className="sliderVals">Green: {this.state.green}</p>
        <input type="range" id="blue" min="0" max="255" value={this.state.blue} step="1" onChange={ this._colorUpdateBlue } />
        <p className="sliderVals">Blue: {this.state.blue}</p>
      </div>
    );
  }
}
