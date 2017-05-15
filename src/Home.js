import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
	render() {
		return (
			<div>
			  <div>Header</div>
			  <Link to="app">App</Link><br/>
			  <Link to="content">Content</Link>
			  {this.props.children}
			  <div>Footer</div>
			</div>
		);
	}
}

export default Home;