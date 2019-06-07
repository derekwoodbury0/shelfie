import React, { Component } from 'react'

export default class Product extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
            let { name, price, imageUrl } = this.props.product
        return (
            <div>
                <h1>Name: {name}</h1>
                <h2>Price: {price}</h2>
                <img src={imageUrl} height="200" width="200" alt={name} />
            </div>
        )
    }
}