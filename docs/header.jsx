var React = require('react');
var {Link} = require('react-router');

var Header = React.createClass({
  render: function () {
    return (
      <div className='title-bar primary'>
        <span className='title'><Link to="app">Foundation Material</Link></span>      
      </div>
    );
  }
});

module.exports = Header;