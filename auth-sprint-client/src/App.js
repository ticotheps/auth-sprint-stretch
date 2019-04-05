import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Home from './home/Home';
import Signin from './signin/Signin';
import Signup from './signup/Signup';
import Jokes from './jokes/Jokes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink exact to="/">Home</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login">Sign-In</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/register">Sign-Up</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
        <Route
            exact
            path="/"
            render={props => {
              console.log(props);
              return <Home {...props} />;
            }}
          />
          <Route
            path="/login"
            render={props => {
              console.log(props);
              return <Signin {...props} />;
            }}
          />
          <Route
            path="/register"
            render={props => {
              console.log(props);
              return <Signup {...props} />;
            }}
          /> 
          <Route
            path="/jokes"
            render={props => {
              console.log(props);
              return <Jokes {...props} />;
            }}
          />
        </main>
      </div>
    );
  }

  logout = event => {
    localStorage.removeItem("token");

    this.props.history.push("/login");
  };
}

export default withRouter(App);
