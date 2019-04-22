import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const { cart, index } = this.props;
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{cart.name}</td>
                <td>{cart.price}</td>
                <td>{cart.description}</td>
            </tr>
        );
    }
}

export default CartItem;