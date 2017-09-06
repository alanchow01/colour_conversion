import React from 'react';
import Swatch from './swatch.js';
import SplitSwatch from './split_swatch.js';
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

  colourChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: this.minMaxColour(value)
    });
  }

  minMaxColour(val) {
    if (val > 255 ) {
      return 255
    } else if ( val < 0 ) {
      return 0
    } else {
      return parseInt(val,10)
    }
  }

  render () {
    return(
      <div className="slider">
        <input type="range" name="red" id="red" min="0" max="255" value={this.state.red} step="1" onChange={ this.colourChange } />
        <p>
          <label htmlFor="redValue" className="sliderVals">Red: </label>
          <input type="number" name="red" id="redValue" min="0" max="255" value={this.state.red} onChange={ this.colourChange } />
        </p>

        <input type="range" name="green" id="green" min="0" max="255" value={this.state.green} step="1" onChange={ this.colourChange } />
        <p>
          <label htmlFor="greenValue" className="sliderVals">Green: </label>
          <input type="number" name="green" id="greenValue" min="0" max="255" value={this.state.green} onChange={ this.colourChange } />
        </p>

        <input type="range" name="blue" id="blue" min="0" max="255" value={this.state.blue} step="1" onChange={ this.colourChange } />
        <p>
          <label htmlFor="blueValue" className="sliderVals">Blue: </label>
          <input type="number" name="blue" id="blueValue" min="0" max="255" value={this.state.blue} onChange={ this.colourChange } />
        </p>

        <Swatch red={this.state.red} green={this.state.green} blue={this.state.blue}/>
      </div>
    );
  }
}
