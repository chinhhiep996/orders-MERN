import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand>
                        Shopping Online
                    </NavbarBrand>

                    <Nav className="ml-auto" navbar>
                        <NavItem className="mr-4">
                            <Link to='/'>Home</Link>
                        </NavItem>

                        <NavItem>
                            <Link to='/carts'>Cart (0)</Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Header;