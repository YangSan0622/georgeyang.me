import React from 'react';
import './App.css';
import { Component } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Introduction from './Components/Introduction/Introduction';



class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Introduction></Introduction>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
