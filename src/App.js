import React from 'react';
import './App.css';
import { Component } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';



class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
