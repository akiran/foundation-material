var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <div className='title-bar primary'>
        <span className='title'>Foundation Material</span>      
      </div>
    );
  }
});

module.exports = Header;