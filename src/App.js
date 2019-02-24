import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header.js';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar/SideBar.js'

library.add(faSearch);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <SideBar/>

            </div>
        );
    }
}

export default App;
