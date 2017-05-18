import React, {Component} from 'react';

// RR-3 uncomment this
//import {Link} from 'react-router';

//RR-4 uncomment this
//import {Link} from 'react-router-dom';

const inLineStyle = {
	border: '1px solid black',
	margin: '15px 0'
}

class Home extends Component {
	render() {
		return (
			<div>
			  <div style={inLineStyle}>
			    Header
			    <ul>
			      <li><Link to="app">App</Link></li>
			      <li><Link to="content">Content</Link></li>
			    </ul>
			  </div>	

			  {this.props.children}

			  <div style={inLineStyle}>Footer</div>
			</div>
		);
	}
}

export default Home;