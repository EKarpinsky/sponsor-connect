import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/navigation";

function App() {
    return (
        <div className="App">
            <div className="header">
                <Navigation/>
            </div>
        </div>
    );
}

export default App;
