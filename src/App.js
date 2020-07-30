import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Nav } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/navigation";
import Dashboard from "./components/dashboard";
import Browse from "./components/browse";
import Profile from "./components/profile";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="header">
                    <Navigation/>
                </div>
                <div className={"row"}>
                    <div id={"sidebar"} className={"col-1 pr-0"}>
                        <Nav defaultActiveKey="/dashboard" className="flex-column">
                            <Nav.Link className={window.location.pathname==="/dashboard"?"nav-selected py-3":"py-3"} href="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link className={window.location.pathname==="/browse"?"nav-selected py-3":"py-3"} href="/browse">Browse</Nav.Link>
                            <Nav.Link className={window.location.pathname==="/profile"?"nav-selected py-3":"py-3"} href="/profile">Profile</Nav.Link>
                        </Nav>
                    </div>
                    <div className={"col-11"}>
                        <div id={"app-container"} className={"container-fluid"}>
                            <Switch>
                                <Route path="/dashboard">
                                    <Dashboard />
                                </Route>
                                <Route path="/browse">
                                    <Browse />
                                </Route>
                                <Route path="/profile">
                                    <Profile />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
