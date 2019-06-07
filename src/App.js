import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';
import {HashRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // inventoryList: [],
      // currentProduct: null,
    }

    // this.componentDidMount=this.componentDidMount.bind(this)
    // this.getCurrentProduct=this.getCurrentProduct.bind(this)
  }

  // componentDidMount() {
  //   axios.get('/api/inventory').then(res => {
  //     this.setState ({ inventoryList: res.data})
  //   })
  // }

  // getCurrentProduct(product) {
  //   this.setState ({ currentProduct: product})
  // }

  render() {
    return (
      <Router >
        <div className="App">
          <Header />
          <div className="main">
            <Route exact path="/" render={props => {
              return (
                <Dashboard 
                  {...props} 
                  inventoryList={this.state.inventoryList}
                  componentDidMount={this.componentDidMount}
                  getCurrentProduct={this.getCurrentProduct}
                />
              )
            }} 
             />
             <Route exact path="/add" render={props => {
               return (
                 <Form {...props} 
                  componentDidMount={this.componentDidMount}
                  currentProduct={this.state.currentProduct}
                 />
               )
             }}
             />
             <Route path="/add/:id" component={Form} />
            {/* <Dashboard 
              inventoryList={this.state.inventoryList}
              componentDidMount={this.componentDidMount}
              getCurrentProduct={this.getCurrentProduct}
              />
            <Form componentDidMount={this.componentDidMount}    
              currentProduct={this.state.currentProduct}
              /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
