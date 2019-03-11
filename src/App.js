import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import MainComponent from './components/Main/MainComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <MainComponent />
      </div>
    );
  }
}

export default App;
