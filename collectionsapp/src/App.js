import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./User";
import UserMapping from './UserMapping'
import UserResidence from './UserResidence'

class App extends Component {
  render() {
      const rawDataArray = require('./rawData');

      return (
          <div className="App">
              <h1>User Collection List</h1>
              <UserMapping array={rawDataArray}/>
              <UserResidence array={rawDataArray}/>
          </div>
      );
  }
}

export default App;
