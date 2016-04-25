import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './components/slider.jsx';

var ColourSlide = React.createClass({
  render: function() {
    return (
      <div>
        <Slider/>
      </div>
    );
  }
});

ReactDOM.render(<ColourSlide />, document.querySelector('#colour-mount'));
