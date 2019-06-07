import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            imageUrl: '',
            name: '',
            price: '',
            edit: false
        }
    }

    componentDidMount() {
        axios.get(`/api/inventory/${this.props.match.params.id}`)
        .then(res => {console.log(res)})
        .catch(err => console.log(err))
    }


    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentProduct !== this.props.currentProduct) {

            this.setState ({ imageUrl: this.props.currentProduct.img,
                name: this.props.currentProduct.name,
                price: this.props.currentProduct.price
            })
            this.toggleEdit()
        }
    }

    updateProduct = () => {
        let updatedProduct = {name: this.state.name, price: this.state.price, imageUrl: this.state.imageUrl}
        axios.put(`/api/inventory/${this.props.currentProduct.id}`, updatedProduct)
        .then(() => this.props.componentDidMount())

        this.toggleEdit()
        this.setState ({ name: '', imageUrl: '', price: ''})
    }

    handleChange = e => {
        let { value, name } = e.target

        this.setState ({[name]: value})
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
            this.setState({ name: '', imageUrl: '', price: ''})
        })
    }

    toggleEdit = () => this.setState ({ edit: !this.state.edit})

    
    render() {
        return (
            <div>
                <img src={this.state.imageUrl} alt="" height="200" width="200" />
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
                <Link to="/">
                    <button onClick={this.cancelButton}>Cancel</button>
                </Link>
                {this.state.edit ?
                    <Link to="/">
                        <button onClick={this.updateProduct}>Save Changes</button>
                    </Link>
                    :
                    <Link to="/">
                        <button onClick={this.handleClick}>Add To Inventory</button>
                    </Link>
                }
            </div>
        )
    }
}