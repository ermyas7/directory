import React, { Component } from 'react'
import ListItem from './ListItem';

export class Lists extends Component {
  render() {
    return (
        this.props.users.map((user, index) => <ListItem user={user} key={this.index}/>)
    )
  }
}

export default Lists
