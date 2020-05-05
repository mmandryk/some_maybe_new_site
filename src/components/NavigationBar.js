import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

.navbar {
    background-color: white;
}

.navbar-brand navbar-nav, nav-link {
    color: black;
    font-size: x-large;

    &:hover {
        color: black;
        font-size: 25px;
    }
}`
;

export const NavigationBar = () => (
    <Styles>
    <Navbar expand="lg">
        <Navbar.Brand href="/">Lorem Ipsum</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/gallery">Gallery</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/prices">Prices</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Styles>
);
