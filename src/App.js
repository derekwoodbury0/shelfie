import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import {HashRouter as Router, Route } from 'react-router-dom'

function App (props) {
    return (
      <Router >
        <div className="App">
          <Header />
          <div className="main">
            <Route exact path="/" render={props => {
              return (
                <Dashboard 
                  {...props} 
                />
              )
            }} 
             />
             <Route exact path="/add" render={props => {
               return (
                 <Form {...props} 
                 />
               )
             }}
             />
             <Route path="/add/:id" component={Form} />
          </div>
        </div>
      </Router>
    );
  }
// }

export default App;
