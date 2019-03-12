import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import DirectoryList from './components/DirectoryList';
import AddUser from './components/AddUser';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  state = {
    users : [
      
    ],
    heading: 'Phone directory'
  }

  //heading handler
  changeHeading = () => {
    this.setState({heading: 'add subscriber'});
  }

  resetHeading = () => {
    this.setState({heading: 'phone directory'});
  }
  //add new list
  addUser = (user) => {
    const newUser = {...user, id: uuid.v4()};
    this.setState({users: [...this.state.users, newUser]});
  }

  //remove user
  removeUser = (id) => {
    this.setState({users: [...this.state.users.filter((user) => user.id !== id)]})
  }

    
  render() {
    return (
      <Router>
        <div className="main-container">
          <div className="component-container">
            <Header heading={this.state.heading}/>
            <Route exact path={process.env.PUBLIC_URL + '/'} render={props => (
              <DirectoryList users={this.state.users} 
              removeUser={this.removeUser} 
              changeHeading={this.changeHeading}/>
            )}/>
            <Route path={process.env.PUBLIC_URL +'/add'} 
            render={() =><AddUser addUser={this.addUser}
             resetHeading={this.resetHeading}/>}/>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
