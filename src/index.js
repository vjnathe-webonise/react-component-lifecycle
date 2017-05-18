import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Content from './Content';
import NotFound from './NotFound';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ********************  RR-3  ******************************
// 1) uncomment following to demonstrate React Router-3
// 2) make changes in Home.js for Link as per version of router 

/*import { Router, Route, IndexRoute, hashHistory } from 'react-router';
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
);*/

// **********************************************************

// ********************  RR-4  ******************************
// 1) uncomment following to demonstrate React Router-4
// 2) make changes in Home.js for Link as per version of router

/*import {BrowserRouter} from ‘react-router-dom’

var routes = (
    <BrowserRouter history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={App}/>
            <Route path="app" component={App}/>
            <Route path="content" component={Content}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </BrowserRouter>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);*/

// **********************************************************




