import React, {useContext} from 'react';
import {Nav} from 'react-bootstrap';
import './Sidebar.css';
import {AuthContext} from '../../libs/contextLib';


function Sidebar() {

    const authContext = useContext(AuthContext);
    let userData = JSON.parse(localStorage.getItem('user'));

    return (
        <div data-testid='Sidebar' id={'sidebar'} className={'col-1 pr-0'}>
            <Nav defaultActiveKey='/dashboard' id={'sidebar-nav'}  className='flex-column'>
                {authContext.isLoggedIn &&
                <Nav.Link className={'profile'} href='/profile'>{userData.username}</Nav.Link>}
                <Nav.Link className={window.location.pathname === '/dashboard' ? 'nav-selected' : 'nav-item'}
                          href='/dashboard'>Dashboard</Nav.Link>
                <Nav.Link className={window.location.pathname === '/browse' ? 'nav-selected' : 'nav-item'}
                          href='/browse'>Browse</Nav.Link>
                <Nav.Link className={window.location.pathname === '/profile' ? 'nav-selected' : 'nav-item'}
                          href='/profile'>Profile</Nav.Link>
                <Nav.Link className={'premium-signup nav-item mt-auto'} href={'/premium'}>Upgrade to Premium</Nav.Link>
            </Nav>
        </div>
    );
}


export default Sidebar;
