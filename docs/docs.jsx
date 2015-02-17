var React = require('react');
var {RouteHandler, Link} = require('react-router');
var Header = require('./header');
var {Panel} = require('react-foundation-apps');

var Docs = React.createClass({
  render: function () {
    return (
      <div className='grid-frame vertical'>
        <Header />
        <div className='grid-block'>
          <Panel id='sidebar' className='grid-block small-2 sidebar'>
            <section>
              <ul className='menu-bar vertical'>
                <li><Link to='install'>Install</Link></li>
                <li><Link to='button'>Button</Link></li>
                <li><Link to='tabs'>Tabs</Link></li>
                <li><Link to='card'>Card</Link></li>
              </ul>
            </section>
          </Panel>
          <div className='grid-block'>
            <div className='grid-content main-docs-section'>
              <RouteHandler />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Docs;