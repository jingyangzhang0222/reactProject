import React, { Component } from 'react';
import { TopBar } from './TopBar';
import {Main} from './Main';
import { Register } from './Register';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopBar />
                <Register />
            </div>
        );
    }
}

export default App;