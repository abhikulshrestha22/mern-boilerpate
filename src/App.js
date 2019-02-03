import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Secret from './Secret';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/secret" >Secret</Link></li>
        </ul>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/secret' component={Secret} />
        </Switch>
      </div>
    );
  }
}

export default App;
