import React, { Component } from 'react'

export class ListItem extends Component {
  render() {
    return (
        <div className="grid-container">
            <p style={{width: '10%'}}>{this.props.user.name}</p>
            <p style={{width: '10%'}}>{this.props.user.number}</p>
            <p className="delete" onClick={this.props.removeUser.bind(this, this.props.user.id)}>Delete</p>
        </div>
    )
  }
}

export default ListItem
