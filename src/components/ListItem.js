import React, { Component } from 'react'

export class ListItem extends Component {
  render() {
    return (
        <div className="grid-container">
            <p style={{width: '10%'}}>{this.props.user.name}</p>
            <p style={{width: '10%'}}>{this.props.user.number}</p>
            <p className="delete">Delete</p>
        </div>
    )
  }
}

export default ListItem
