var React = require('react');
var {Route, DefaultRoute} = require('react-router');
var Docs = require('./docs');
var Card = require('./card');

var routes = (
  <Route path='/' handler={Docs}>
    <Route name='card' handler={Card}/>
    <DefaultRoute handler={Card}/>
  </Route>
);

module.exports = routes;