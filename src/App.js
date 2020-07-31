import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/navigation';
import Dashboard from './components/dashboard';
import Browse from './components/browse';
import Profile from './components/profile';
import Welcome from './components/Welcome/Welcome';

function App() {
    return (
        <Router>
            <div className='App'>
                <div className='header'>
                    {/*only show header on welcome page*/}
                    {window.location.pathname === '/' && <Header/>}
                </div>
                <div className={'row'}>
                    {window.location.pathname !== '/' && <Sidebar/>}
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
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
