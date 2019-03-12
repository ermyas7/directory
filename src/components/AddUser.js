import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class AddUser extends Component {
   state = {
           name: '',
           number: ''
    } 

   //input value handler
   onChange = (e) => {
       this.setState({[e.target.name]: e.target.value})
   }

   //submit event handler

   onSubmit = (e) => {
       e.preventDefault();
       this.props.addUser({name: this.state.name, number: this.state.number})
       this.setState({name: '', number: ''})
   }
  render() {
    return (
        <div className="person">
            <Link to='/' className="person-back">Back</Link>  
            <form className="person-contact" onSubmit={this.onSubmit}>
            <div className="person-contact-name">
                <label htmlFor="name" className="person-contact-name-label">Name:</label>
                <input type="text"
                 className="person-contact-name-input"
                  id="name"
                   name="name"
                   value={this.state.name}
                   onChange={this.onChange}/>
            </div>
            <div className="person-contact-number">
                <label htmlFor="number" className="person-contact-number-label">
                    Phone:
                </label>
                <input type="text"
                 className="person-contact-number-input"
                  id="number" 
                  name="number"
                  value={this.state.number}
                  onChange ={this.onChange}/>
            </div>
            <div className="person-value">
                <p className="person-value-subscribe">Subscriber to be added:</p>
                <p className="person-value-name">Name: {this.state.name}</p>
                <p className="person-value-number">Phone:{this.state.number}</p>
            </div>
            <input type="submit" value="Add" className="add"/>
        </form>  
      </div>
    )
  }
}

export default AddUser
