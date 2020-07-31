import React from 'react';
import {Nav} from "react-bootstrap";


function Sidebar() {
    return(
        <div data-testid="Sidebar" id={"sidebar"} className={"col-1 pr-0"}>
            <Nav defaultActiveKey="/dashboard" className="flex-column">
                <Nav.Link className={window.location.pathname === "/dashboard" ? "nav-selected py-3" : "py-3"}
                href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link className={window.location.pathname === "/browse" ? "nav-selected py-3" : "py-3"}
                href="/browse">Browse</Nav.Link>
                <Nav.Link className={window.location.pathname === "/profile" ? "nav-selected py-3" : "py-3"}
                href="/profile">Profile</Nav.Link>
            </Nav>
        </div>
    );
}


export default Sidebar;
