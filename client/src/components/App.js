import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import ProductsContainer from '../containers/ProductsContainer';
import Carts from './Carts';

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                
                <Route path="/" exact component={ ProductsContainer }></Route>
                <Route path="/carts" component={ Carts }></Route>
            </Router>
        );
    }
}

export default App;
