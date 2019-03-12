import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="component-container">
          <Header heading="Phone Directory"/>
        </div>
      </div>
    );
  }
}

export default App;
