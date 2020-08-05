import React, {useContext, useEffect,useState} from 'react';
import {Nav} from 'react-bootstrap';
import './Sidebar.css';
import {AuthContext} from '../../libs/contextLib';
import {FaHome, FaList, FaCalendarAlt, FaFileInvoiceDollar} from 'react-icons/fa';

function Sidebar() {

    const authContext = useContext(AuthContext);
    const [userLoaded, setUserLoaded] = useState(false);
    let userData = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        setUserLoaded(true);
    }, [userData])


    return (
        <div data-testid='Sidebar' id={'sidebar'} className={'col-1 pr-0'}>
            <Nav defaultActiveKey='/dashboard' id={'sidebar-nav'} className='flex-column'>
                {authContext.isLoggedIn && userLoaded && userData.profile_image !== null &&
                <Nav.Link
                    className={window.location.pathname === '/profile' ? 'd-flex px-2 align-items-center nav-selected' : 'd-flex px-2 align-items-center nav-item'}
                    href='/profile'><img className='sidebar-profile-thumbnail mx-2'
                                         src={'http://localhost:1337' + userData.profile_image.formats.thumbnail.url}
                                         alt='User profile picture'/>{userData.username}</Nav.Link>}
                <hr className='m-1 border-dark'/>
                <Nav.Link
                    className={window.location.pathname === '/dashboard' ? 'd-flex px-2 align-items-center nav-selected' : 'd-flex px-2 align-items-center nav-item'}
                    href='/dashboard'><FaHome className={'mx-2'}/>Dashboard</Nav.Link>
                <Nav.Link
                    className={window.location.pathname === '/browse' ? 'd-flex px-2 align-items-center nav-selected' : 'd-flex px-2 align-items-center nav-item'}
                    href='/browse'><FaList className={'mx-2'}/>Browse</Nav.Link>
                <hr className='m-1 border-dark'/>
                <Nav.Link
                    className={window.location.pathname === '/calendar' ? 'd-flex px-2 align-items-center nav-selected' : 'd-flex px-2 align-items-center nav-item'}
                    href='/calendar'><FaCalendarAlt className={'mx-2'}/>My Calendar</Nav.Link>
                <Nav.Link
                    className={window.location.pathname === '/campaigns' ? 'd-flex px-2 align-items-center nav-selected' : 'd-flex px-2 align-items-center nav-item'}
                    href='/campaigns'><FaFileInvoiceDollar className={'mx-2'}/>My Campaigns</Nav.Link>
                <hr className='m-1 border-dark'/>
                <Nav.Link className={'premium-signup nav-item'} href={'/premium'}>Upgrade to Premium</Nav.Link>
            </Nav>
        </div>
    );
}


export default Sidebar;
