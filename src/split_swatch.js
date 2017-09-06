import React from 'react';

import '../styles/swatch.css';

export default class SplitSwatch extends React.Component {

  _convertToHSV() {
    let r = this.props.red;
    let g = this.props.green;
    let b = this.props.blue;

    r /= 255; g /= 255; b /= 255;
    let minRGB = Math.min(r, g, b), maxRGB = Math.max(r, g, b);
    let h, s, v = maxRGB;

    let delta = maxRGB - minRGB;
    s = maxRGB === 0 ? 0 : +((Math.round(delta / maxRGB + 'e+3') + 'e-3') * 100);

    if (maxRGB === minRGB) {
      h = 0;
    } else {
      switch (maxRGB) {
        case r: h = (g - b) / delta + (g < b ? 6 : 0); break;
        case g: h = (b - r) / delta + 2; break;
        case b: h = (r - g) / delta + 4; break;
      }
      h *= 60;
    }
    let compH = h + 180;
    if (compH > 360) {
      compH -=360;
    }

return [h, s, v, compH];
}

_convertToHEX() {
  return "#" + ((1<<24) + parseInt(this.props.red << 16 , 10) + parseInt(this.props.green << 8, 10) + parseInt(this.props.blue, 10)).toString(16).slice(1).toUpperCase();
}

render () {

  let background = {
    background: `rgb(${this.props.red},${this.props.green},${this.props.blue})`,
  }
  let hsvValues = this._convertToHSV(), [h, s, v, compH, splitH1, splitH2] = hsvValues;


  return(
    <div className="swatchBox">
    <h2>Complementary colour</h2>
    <div className="swatch" style={background}>
    </div>
    <ul className="cmykBreakdown">
    <li>H: {h}&deg;</li>
    <li>S: {s}%</li>
    <li>V: {v}%</li>
    <li>Comp: {compH}&deg;, {s}%, {v}%</li>
    <li>Split 1: {splitH1}&deg;, {s}%, {v}%</li>
    <li>Split 2: {splitH2}&deg;, {s}%, {v}%</li>
    </ul>
    </div>
  );
}
}
