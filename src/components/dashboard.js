import React, {useContext} from 'react';
import {AuthContext} from '../libs/contextLib';

function Dashboard() {

    const authContext = useContext(AuthContext);
    let loggedInString = authContext.isLoggedIn === true ? 'Logged in' : 'Logged out';

    return (
        <div>Dashboard
            <div>{loggedInString}</div>
        </div>
    );
}

export default Dashboard;
