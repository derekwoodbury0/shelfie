import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageUrl: '',
            name: '',
            price: '',
        }
    }

    handleChange = e => {
        let { value, name } = e.target

        this.setState ({[name]: value})
        console.log(this.state)
    }

    cancelButton = () => {
        this.setState ({
            name: '',
            imageUrl: '',
            price: '',
        })
    }

    handleClick = () => {
        let newAnimal = this.state
        axios.post('/api/product', newAnimal).then( res => {
            this.props.componentDidMount()
            this.setState({ name: '', imageUrl: '', price: ''})
        })
    }
    
    render() {
        return (
            <div>
                <input 
                    placeholder="image URL"
                    onChange={this.handleChange}
                    name="imageUrl"
                    value={this.state.imageUrl}
                    type="text"    
                />
                <input 
                    placeholder="Product Name"
                    onChange={this.handleChange}
                    name="name"
                    value={this.state.name}
                    type="text"    
                />
                <input 
                    placeholder="Price"
                    onChange={this.handleChange}
                    name="price"
                    value={this.state.price}
                    type="number"    
                />
                <button onClick={this.cancelButton}>Cancel</button>
                <button onClick={this.handleClick}>Add To Inventory</button>
            </div>
        )
    }
}