import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/navigation';
import Dashboard from './components/dashboard';
import Browse from './components/browse';
import Profile from './components/profile';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import {AuthContext} from './libs/contextLib';


function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    let token = localStorage.getItem('token');

    // check local storage for jwt for logged in
    useEffect(() => {
        if (token)
            setLoggedIn(true);
        else
            setLoggedIn(false);
    }, [])

    const login = () => {
        setLoggedIn(true);
        if (loggedIn)
            console.log('logged in');
    }

    const logout = () => {
        setLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn: loggedIn, token: token, login: login, logout: logout}}>
            <Router>
                <div className='App'>
                    <div className='header'>
                        {/*only show header on welcome page*/}
                        <Switch>
                            <Route exact path='/'>
                                <Header/>
                            </Route>
                        </Switch>
                    </div>
                    <div className={'row'}>
                        {/*Do not show sidebar on welcome/login pages*/}
                        <Switch>
                            <Route exact path='/'/>
                            <Route path='/login'/>
                            <Route path='/'>
                                <Sidebar/>
                            </Route>
                        </Switch>
                        <div id={'app-container'} className={'container-fluid col-11'}>
                            <Switch>
                                <Route exact path='/'>
                                    <Welcome/>
                                </Route>
                                <Route path='/dashboard'>
                                    <Dashboard/>
                                </Route>
                                <Route path='/browse'>
                                    <Browse/>
                                </Route>
                                <Route path='/profile'>
                                    <Profile/>
                                </Route>
                                <Route path='/login'>
                                    {loggedIn ? <Redirect to='/dashboard'/> : <Login/>}
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
