import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
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
        </Router>
    );
}

export default App;
