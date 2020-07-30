import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
    return (
        <div id="header-container" className="container-fluid">
            <Navbar id="navbar" sticky="top" variant="dark">

                <Navbar.Brand href="#home">SponsorConnect</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/browse">Browse</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="#logout">Log Out</Nav.Link>
                </Nav>

            </Navbar>
        </div>
    );
}

export default Navigation;
