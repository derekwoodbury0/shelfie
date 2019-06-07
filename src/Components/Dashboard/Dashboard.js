import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render () {
        return (
            <div>
                <h1>Dashboard</h1>
                {this.props.inventoryList.map((product, index) => {
                    return (
                        <Product key={index} product={product} />
                        )
                    })
                }
            </div>
        )
    }
}