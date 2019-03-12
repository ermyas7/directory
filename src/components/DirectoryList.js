import React, { Component } from 'react'
import Lists from './Lists';
export class DirectoryList extends Component {
  render() {
    return (
        <div className="component-body-container">
        <a href="/add" className="add">Add</a>
        <div className="grid-container heading-container">
            <h3>Name</h3>
            <h3>Phone</h3>
        </div>
        <Lists users={this.props.users}/>
    </div>
    )
  }
}

export default DirectoryList
