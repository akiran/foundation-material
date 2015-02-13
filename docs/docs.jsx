var React = require('react');
var {RouteHandler} = require('react-router');

var Docs = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Foundation material</h1>
      </div>
    );
  }
});

// React.render(<Docs />, document.body);

module.exports = Docs;