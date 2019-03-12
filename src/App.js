import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import DirectoryList from './components/DirectoryList';

class App extends Component {
  state = {
    users : [

    ]
  }
  render() {
    return (
      <div className="main-container">
        <div className="component-container">
          <Header heading="Phone Directory"/>
          <DirectoryList users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
