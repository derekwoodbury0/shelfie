import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventoryList: []
    }

    this.componentDidMount=this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      this.setState ({ inventoryList: res.data})
    })
  }

  render() {
    return (
      <div className="App">
      <Dashboard inventoryList={this.state.inventoryList}/>
      <Form componentDidMount={this.componentDidMount}/>
      <Header />
      </div>
    );
  }
}

export default App;
