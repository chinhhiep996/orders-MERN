import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Container } from 'reactstrap';

import Product from '../components/Product';

class ProductsContainer extends Component {
    render() {
        const { products } = this.props;
        return (
            <Container>
                <Row>
                    {
                       products ? products.map((product, index) => 
                            <Product key={index} product={ product } />) : "Loading"
                    }
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductsContainer);