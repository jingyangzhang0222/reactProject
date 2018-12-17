import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { Main } from './Main';
import { TOKEN_KEY } from '../constants';
import '../styles/App.css';

class App extends Component {
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
    }

    handleLogin = (data) => {
        localStorage.setItem(TOKEN_KEY, data);
        this.setState({isLoggedIn: true});
    }

    handleLogout = (data) => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({isLoggedIn: false});
    }

    render() {
        return (
            <div className="App">
                <TopBar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} />
                <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
            </div>
        );
    }
}

export default App;