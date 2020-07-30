import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Menu() {
    return (
        <div id="header-container" className="container-fluid">
            <Navbar id="navbar" sticky="top" variant="dark">

                <Navbar.Brand href="#home">SponsorConnect</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Dashboard</Nav.Link>
                    <Nav.Link href="#features">Browse</Nav.Link>
                    <Nav.Link href="#pricing">Profile</Nav.Link>
                    <Nav.Link href="#logout">Log Out</Nav.Link>
                </Nav>

            </Navbar>
        </div>
    );
}

export default Menu;
