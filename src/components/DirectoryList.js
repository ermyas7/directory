import React, { Component } from 'react'
import Lists from './Lists'
import {Link} from 'react-router-dom'

export class DirectoryList extends Component {
  render() {
    return (
        <div className="component-body-container">
        <Link to="/add" className="add" onClick={this.props.changeHeading}>Add</Link>
        <div className="grid-container heading-container">
            <h3>Name</h3>
            <h3>Phone</h3>
        </div>
        <Lists users={this.props.users} removeUser={this.props.removeUser}/>
    </div>
    )
  }
}

export default DirectoryList
