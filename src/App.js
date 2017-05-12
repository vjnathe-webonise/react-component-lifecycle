import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function log(message = '') {
  console.log(`Time:${new Date()}, Action: ${message}`)
}

function getRandomColor() {
  var colors = ['red', 'yellow', 'blue', 'brown', 'pink', 'green']
  return colors[Math.floor(Math.random() * colors.length)]
}

class App extends Component {
  constructor(props) {
    // executes once
    super(props);
    this._updateMe = this._updateMe.bind(this);
    this._forceUpdateMe = this._forceUpdateMe.bind(this);
    this._unmountMe = this._unmountMe.bind(this);
    this._changeColor = this._changeColor.bind(this);
    this.state = {
      color: getRandomColor()
    };
    log('parent constructor');
  }

  componentWillMount() {
    // executes once
    log('parent componentWillMount');
  }

  componentDidMount() {
    // executes once
    log('parent componentDidMount');
  }

  shouldComponentUpdate() {
    // executes many time but not on component mounting
    log('parent shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    // executes many time but not on component mounting
    log('parent componentWillUpdate');
  }

  componentDidUpdate() {
    // executes many time but not on component mounted
    log('parent componentDidUpdate');
  }

  componentWillUnmount() {
    // executes once
    log('parent componentWillUnmount');
  }

  _updateMe() {
    this.setState({
      color: getRandomColor()
    })
  }

  _forceUpdateMe() {
    this.forceUpdate()
  }

  _unmountMe() {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }

  _changeColor(color) {
    this.setState({
      color: color
    })
  }

  render() {
    // executes many time
    log('parent render');
    return (
      <div>
        <h1>Parent Section</h1>
        <h2 style={{'color':`${this.state.color}`}}>Let's see what is happening in the background</h2>
        <button onClick={this._updateMe}>Update Me</button>
        <button onClick={this._forceUpdateMe}>Force Update Me</button>
        <button onClick={this._unmountMe}>Unmount Me</button>
        <hr/>
        <Child name={this.state.color} changeColor={this._changeColor}/>
      </div>
    );
  }
}

export default App;

class Child extends Component {
  constructor(props) {
    super(props)
    this._updateChild = this._updateChild.bind(this);
    this.state = {
      name: this.props.name
    }
    log('child constructor');
  }

  componentWillMount() {
    // executes once
    log('child componentWillMount');
  }

  componentDidMount() {
    // executes once
    log('child componentDidMount');
  }

  shouldComponentUpdate() {
    // executes many time but not on component mounting
    log('child shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    // executes many time but not on component mounting
    log('child componentWillUpdate');
  }

  componentDidUpdate() {
    // executes many time but not on component mounted
    log('child componentDidUpdate');
  }

  componentWillUnmount() {
    // executes once
    log('child componentWillUnmount');
  }

  componentWillReceiveProps(newProps) {
    // will call on every parent component update but not on mount
    log('child componentWillReceiveProps')
    this.setState({
      name: newProps.name
    })
  }

  _updateChild() {
    this.props.changeColor('black')
  }

  render() {
    log('child render')
    return (
      <div>
       <h1>Child Section</h1>
       <h2>{`props:${this.props.name}`}</h2>
       <h2>{`state:${this.state.name}`}</h2>
        <button onClick={this._updateChild}>Update Child</button>
      </div>
    )
  }
}

Child.defaultProps = {
  name: '-',
  changeColor: ()=>{}
}

Child.propTypes = {
  name: PropTypes.string,
  changeColor: PropTypes.func
}
