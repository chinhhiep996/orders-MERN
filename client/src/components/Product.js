import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

class Product extends Component {
    render() {
        const { product } = this.props;
        return(
            <Col sm={3}>
                <Card>
                    <CardImg top src={product.imageUrl} alt="image product" />
                    <CardBody>
                        <CardTitle>{ product.name }</CardTitle>
                        <CardSubtitle>{ product.price }</CardSubtitle>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Product;