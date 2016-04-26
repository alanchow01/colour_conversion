import React from 'react';

var colourArray;
var Slider = React.createClass({
  getInitialState: function() {
    return {
      red: 127,
      green: 127,
      blue: 127,
    }
  },
  _updateRed: function(e) {
    this.setState({red:e.target.value})
  },
  _updateGreen: function(e) {
    this.setState({green:e.target.value})
  },
  _updateBlue: function(e) {
    this.setState({blue:e.target.value})
  },
  _convertCMYK: function() {

    var r = this.state.red / 255;
    var g = this.state.green / 255;
    var b = this.state.blue / 255;

    var k = Math.min( 1 - r, 1 - g, 1 - b );
    var c = ( 1 - r - k ) / ( 1 - k );
    var m = ( 1 - g - k ) / ( 1 - k );
    var y = ( 1 - b - k ) / ( 1 - k );

    if(r==0 && g==0 && b==0) {
      c = 0;
      m = 0;
      y = 0;
      k = 100;
    } else {
      c = Math.round( c * 100 );
      m = Math.round( m * 100 );
      y = Math.round( y * 100 );
      k = Math.round( k * 100 );
    }
    colourArray = [c, m, y, k];
  },
  render: function() {
    {this._convertCMYK()}
    var styles = {
      background: 'rgb(' + this.state.red + ',' + this.state.green + ',' + this.state.blue + ')'
    }
    return (
      <div>

        <div className="content">
          <input id="red"
            type="range"
            min="0"
            max="255"
            steps="1"
            value={this.state.red}
            onChange={this._updateRed} />
          <label>Red: {this.state.red}</label>
          <input id="green"
            type="range"
            min="0"
            max="255"
            steps="1"
            value={this.state.green}
            onChange={this._updateGreen} />
          <label>Green: {this.state.green}</label>
          <input id="blue"
            type="range"
            min="0"
            max="255"
            steps="1"
            value={this.state.blue}
            onChange={this._updateBlue} />
          <label>Blue: {this.state.blue}</label>
        </div>

        <div className="content">
        <div className="swatch">
          <div className="colour-block" style={styles}></div>
          <ul className="cmyk-breakdown">
            <li>C: {colourArray[0]}</li>
            <li>M: {colourArray[1]}</li>
            <li>Y: {colourArray[2]}</li>
            <li>K: {colourArray[3]}</li>
          </ul>
        </div>
      </div>

      </div>
  );
}
});

module.exports = Slider;
