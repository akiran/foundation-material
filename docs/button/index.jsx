var React = require('react');

var Buttons = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className='subheader'>
          Default/Raised buttons
        </h3>
        <div>
          <a href="#" className="button">Primary</a>
          <a href="#" className="secondary button">Secondary</a>
          <a href="#" className="success button">Success</a>
          <a href="#" className="alert button">Alert</a>
          <a href="#" className="warning button">Warning</a>
          <a href="#" className="info button">Info</a>
          <a href="#" className="dark button">Dark</a>
        </div>
        <h3 className='subheader'>
          Flat buttons
        </h3>
        <div>
          <a href="#" className="flat button">Primary</a>
          <a href="#" className="secondary flat button">Secondary</a>
          <a href="#" className="success flat button">Success</a>
          <a href="#" className="alert flat button">Alert</a>
          <a href="#" className="warning flat button">Warning</a>
          <a href="#" className="info flat button">Info</a>
          <a href="#" className="dark flat button">Dark</a>
        </div>
      </div>
    );
  }
});

module.exports = Buttons;