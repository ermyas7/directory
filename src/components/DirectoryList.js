import React, { Component } from 'react'
import Lists from './Lists'
import {Link} from 'react-router-dom'

export class DirectoryList extends Component {
  render() {
    return (
        <div className="component-body-container">
        <Link to="/add" className="add">Add</Link>
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
