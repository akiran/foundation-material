var React = require('react');
var {Route, DefaultRoute} = require('react-router');
var Docs = require('./docs');

var routes = (
  <Route path='/' handler={Docs}>
  </Route>
);

module.exports = routes;