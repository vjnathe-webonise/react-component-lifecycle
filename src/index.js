import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Content from './Content';
import NotFound from './NotFound';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Home}>
			<IndexRoute component={App}/>
			<Route path="app" component={App}/>
			<Route path="content" component={Content}/>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
