import React from 'react';
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


function App() {

    let login = false;

    const logIn = () => {
        login = true;
        console.log('logged in', login);

    }

    return (
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
                                {login ? <Redirect to='/dashboard'/> : <Login onSubmit={logIn}/>}
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
