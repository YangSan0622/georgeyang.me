import React from 'react';
import './App.css';
import { Component } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Slides from './Components/Slides/Slides';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';



class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Slides/>
            <Skills/>
            <About/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
