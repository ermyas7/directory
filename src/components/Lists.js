import React, { Component } from 'react'
import ListItem from './ListItem';

export class Lists extends Component {
  render() {
    return (
        this.props.users.map((user) => <ListItem user={user} key={user.id} removeUser={this.props.removeUser}/>)
    )
  }
}

export default Lists
