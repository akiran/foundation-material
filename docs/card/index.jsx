var React = require('react');
var Highlight = require('react-highlight/optimized');
var BasicCard = require('./basic');

var CardDemos = React.createClass({
  render: function () {
    return (
      <div>
        <div className='grid-block'>
          <div className='grid-content small-8'>
            <Highlight innerHTML={true} languages={['xml']}>
              {require('./basic.md')}
            </Highlight>
          </div>
          <div className='grid-content small-4'>
            <BasicCard />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CardDemos;