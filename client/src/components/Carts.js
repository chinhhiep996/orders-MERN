import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Container } from 'reactstrap';

import CartItem from './CartItem';

class Carts extends Component {
    render() {
        const { carts } = this.props;
        return (
            <Container>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map((cart, index) => 
                                <CartItem key={index} index={index} cart={cart} />
                            )
                        }
                    </tbody>
                </Table>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    carts: state.carts
})

export default connect(mapStateToProps)(Carts);