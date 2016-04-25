import React from 'react';

var Slider = React.createClass({

  render: function() {
    return (
      <div>
        <label>Red</label><input type="range" />
      </div>
    );
  }
});

module.exports = Slider;
