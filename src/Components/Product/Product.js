import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {

    render() {
            let { name, price, img, id} = this.props.product
        return (
            <div className="product">
                <h1>Name: {name}</h1>
                <h2>Price: {price}</h2>
                <img src={img} height="200" width="200" alt="" />
                <button onClick={this.props.handleDelete} style={{width: '200px'}}>delete</button>
                <Link to={`/add/${id}`}>
                    <button style={{width: '200px'}}>Edit</button>
                </Link>
            </div>
        )
    }
}