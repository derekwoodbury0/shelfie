import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>SHELFIE</h1>
                <Link to="/">
                    <button>Dashboard</button>
                </Link>
                <Link to="/add">
                    <button>Add Inventory</button>
                </Link>
            </div>
        )
    }
}