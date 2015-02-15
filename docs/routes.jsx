var React = require('react');
var {Route, DefaultRoute} = require('react-router');
var Docs = require('./docs');
var Card = require('./card');
var Install = require('./install')

var path = (process.env.NODE_ENV==='dev_docs') ? '/': '/opensource/foundation-material';
var routes = (
  <Route name='app' path={path} handler={Docs}>
    <Route name='card' handler={Card}/>
    <Route name='install' handler={Install}/>
    <DefaultRoute handler={Install}/>
  </Route>
);

module.exports = routes;