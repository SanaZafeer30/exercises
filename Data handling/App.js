import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import NewComponent from './Component/NewComponent'

import Abc from './test'

class App extends Component {
  state={
    isLoggedIn:'Active',
    user:'alpha'
  };

  static childContextTypes = {
    user: PropTypes.string,
    userStatus: PropTypes.string
  };

  getChildContext() {
    return {
      user: this.state.user,
      userStatus:this.state.isLoggedIn
    }
  }

  render() {
    return (
      <div className="App">
        <h3>HOC Simple Example</h3>
         <NewComponent name={"from parent "}/>
      </div>
    );
  }
}

export default App;

