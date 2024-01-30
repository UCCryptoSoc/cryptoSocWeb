import React from 'react';
import { data, images } from '../../constants';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
            <Container>
                <Navbar.Brand href="/"> <img src={images.logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        {data.Menu.map((item) => (
                            <Nav.Link key={item.link} href={item.link}>{item.text}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
