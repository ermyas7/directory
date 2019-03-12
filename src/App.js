import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import DirectoryList from './components/DirectoryList';
import AddUser from './components/AddUser';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  state = {
    users : [
      {
        name: 'Ermyas',
        number: 1234
      }
    ]
  }

  //add new list
  addUser = (user) => {
    this.setState({users: [...this.state.users, user]});
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <div className="component-container">
            <Header heading="Phone Directory"/>
            <Route exact path='/' render={props => (
              <DirectoryList users={this.state.users}/>
            )}/>
            <Route path='/add' render={() =><AddUser addUser={this.addUser}/>}/>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
