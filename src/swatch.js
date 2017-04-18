import React from 'react';

import '../styles/swatch.css';

export default class Swatch extends React.Component {

  _convertToCMKY() {
    let r = this.props.red / 255;
    let g = this.props.green / 255;
    let b = this.props.blue / 255;

    let k = Math.min( 1 - r, 1 - g, 1 - b);
    let c = ( 1 - r - k ) / ( 1 - k );
    let m = ( 1 - g - k ) / ( 1 - k );
    let y = ( 1 - b - k ) / ( 1 - k );

    if ( r === 0 && g === 0 && b === 0 ) {
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
    return [c, m, y, k];
  }

  _convertToHEX() {
    return "#" + ((1<<24) + parseInt(this.props.red << 16 , 10) + parseInt(this.props.green << 8, 10) + parseInt(this.props.blue, 10)).toString(16).slice(1).toUpperCase();
  }

  render () {

      let background = {
        background: `rgb(${this.props.red},${this.props.green},${this.props.blue})`,
      }

      let cmykValues = this._convertToCMKY(), [c,m,y,k] = cmykValues;

    return(
      <div className="swatchBox">
        <div className="swatch" style={background}>
        </div>
          <ul className="cmykBreakdown">
            <li>C: {c}</li>
            <li>M: {m}</li>
            <li>Y: {y}</li>
            <li>K: {k}</li>
          </ul>
          <p>{this._convertToHEX()}</p>
          <p>rgb({this.props.red}, {this.props.green}, {this.props.blue})</p>
      </div>
    );
  }
}
