var React = require('react');
var {RouteHandler, Link} = require('react-router');
var Header = require('./header');

var Docs = React.createClass({
  render: function () {
    return (
      <div className='grid-frame vertical'>
        <Header />
        <div className='grid-block'>
          <div className='grid-block small-2'>
            <div className='grid-content collapse' >
              <section>
                <ul className='menu-bar vertical'>
                  <li><Link to='card'>Card</Link></li>
                </ul>
              </section>
            </div>
          </div>
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