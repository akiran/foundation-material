var React = require('react');

var BasicCard = React.createClass({
  render: function () {
    var baseUrl = '';
    if (process.env.NODE_ENV === 'production') {
      baseUrl = 'http://static.webrafter.com';
    }
    return (
      <div className='card'>
        <img src={baseUrl + "/img/spring.jpg"} />
        <div className='card-content'>
          <p>Beautiful sunset scenary. Orange color sun in the background and grass in the front</p>
        </div>
        <div className='card-action'>
          <a href="#">Share</a>
          <a href="#">Explore</a>
        </div>
      </div>
    );
  }
});

module.exports = BasicCard;