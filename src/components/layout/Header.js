import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="header-heading" >{this.props.heading} </h1>
            </div>
        )
  }
}

export default Header

