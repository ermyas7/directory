import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class AddUser extends Component {
  render() {
    return (
        <div className="person">
            <Link to='/' className="person-back">Back</Link>  
            <form className="person-contact">
            <div className="person-contact-name">
                <label htmlFor="name" className="person-contact-name-label">Name:</label>
                <input type="text" className="person-contact-name-input" id="name" name="name"/>
            </div>
            <div className="person-contact-number">
                <label htmlFor="number" className="person-contact-number-label">
                    Phone:
                </label>
                <input type="text" className="person-contact-number-input" id="number" name="number"/>
            </div>
            <div className="person-value">
                <p className="person-value-subscribe">Subscriber to be added:</p>
                <p className="person-value-name">Name:</p>
                <p className="person-value-number">Phone:</p>
            </div>
            <Link to="/" className="add">Add</Link>
        </form>  
      </div>
    )
  }
}

export default AddUser
