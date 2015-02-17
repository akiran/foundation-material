var React = require('react');
var {Route, DefaultRoute} = require('react-router');
var Docs = require('./docs');
var Install = require('./install')
var Card = require('./card');
var Tabs = require('./tabs');
var Button = require('./button');

var path = (process.env.NODE_ENV==='dev_docs') ? '/': '/opensource/foundation-material';
var routes = (
  <Route name='app' path={path} handler={Docs}>
    <Route name='install' handler={Install}/>
    <Route name='button' handler={Button}/>
    <Route name='card' handler={Card}/>
    <Route name='tabs' handler={Tabs}/>
    <DefaultRoute handler={Install}/>
  </Route>
);

module.exports = routes;