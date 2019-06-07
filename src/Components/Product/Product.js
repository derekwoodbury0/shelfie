import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Form from '../Form/Form'

export default class Product extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
            let { name, price, img, id} = this.props.product
        return (
            <div>
                <h1>Name: {name}</h1>
                <h2>Price: {price}</h2>
                <img src={img} height="200" width="200" alt="" />
                <button onClick={this.props.handleDelete}>delete</button>
                <Link to={`/add/${id}`}>
                    <button>Edit</button>
                </Link>
                {/* <button onClick={() => this.props.getCurrentProduct(this.props.product)}>Edit</button> */}
            </div>
        )
    }
}