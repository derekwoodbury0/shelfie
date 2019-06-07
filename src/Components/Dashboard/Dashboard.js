import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inventoryList: []
        }
    }

    handleDelete = id => {
        axios.delete(`/api/inventory/${id}`).then(
            this.componentDidMount()
        )
    }

    componentDidMount() {
        axios.get('/api/inventory').then(res => {
          this.setState ({ inventoryList: res.data})
        })
      }

    render () {
        return (
            <div>
                {this.state.inventoryList.map(product => {
                    return (
                        <div>
                            <Product key={product.id} 
                                product={product} 
                                handleDelete={() => this.handleDelete(product.id)}
                                componentDidMount={this.componentDidMount}
                            />
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}