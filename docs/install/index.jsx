var React = require('react');
var Highlight = require('react-highlight/optimized');

var Install = React.createClass({
  render: function () {
    return (
      <div className='grid-content'>
        <Highlight innerHTML={true} languages={['xml']}>
          {require('../../README.md')}
        </Highlight>
      </div>
    );
  }
});

module.exports = Install;