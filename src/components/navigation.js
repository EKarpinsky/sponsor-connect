import React, {useContext} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {AuthContext} from '../libs/contextLib';

function Header() {
    const authContext = useContext(AuthContext);
    return (
        <div id='header-container' className='container-fluid'>
            <Navbar id='navbar' sticky='top' variant='dark'>

                <Navbar.Brand href='#home'>SponsorConnect</Navbar.Brand>
                <Nav className='ml-auto'>
                    <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                    <Nav.Link href='/browse'>Browse</Nav.Link>
                    <Nav.Link href='/profile'>Profile</Nav.Link>
                    {authContext.isLoggedIn === true && <Nav.Link href='#' onSelect={authContext.logout}>Log Out</Nav.Link>}
                    {authContext.isLoggedIn !== true && <Nav.Link href='/login'>Login</Nav.Link>}
                </Nav>

            </Navbar>
        </div>
    );
}

export default Header;
