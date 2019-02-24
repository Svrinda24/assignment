import React, {Component} from 'react';
import './Header.css';
import logo from '../images/logo.png';
import profile from '../images/profile.jpeg';
import myProfile from '../images/My_Profile.png';
import logOut from "../images/Log_Out.png";
import {Column, Row} from 'simple-flexbox';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"

import {Dropdown} from 'react-bootstrap'

class Header extends Component {
    state = {
        search: '',
        anchorEl: false

    };
    handleSearchChange = (event) => {
        this.setState({search: event.target.value});
    };
    handleClick = (event) => {
        console.log(event);
    };
    handleClickOnProfile = () => {
        this.setState((previousState) => ({anchorEl: !previousState.anchorEl}));
        console.log(this.state.anchorEl);
    };
    handleProfileClose = (event) => {
        this.setState({anchorEl: false});
    };

    render() {
        return (
            <div>
                <header className="App-header">
                    <Row alignSelf={'stretch'} className={'w-100 pt-3'} wrap={true}>
                        <Column flex={'30'} horizontal={'start'} className={'p-2 pl-4'}>
                            <img src={logo} alt={'App-logo'} className={'App-logo'}/>
                        </Column>
                        <Column flex={'40'} horizontal={'center'}>
                            <form className="form-inline mt-2 w-100">
                                <FontAwesomeIcon icon={Icons.faSearch} size="xs" color={'white'}/>
                                <input type={'text'}
                                       placeholder={'Search for companies, people & investors'}
                                       className="form-control search-field"
                                       onChange={this.handleSearchChange}
                                       value={this.state.search}
                                       name={'search'}/>
                            </form>
                        </Column>
                        <Column flex={15} horizontal='center'>
                            <Dropdown className={'w-100 h-100'}>
                                <Dropdown.Toggle size="lg" className={' profile-tab w-100'}>
                                    <img alt="profile" name="profileIcon"
                                         aria-owns={this.state.anchorEl ? 'menu-list-grow' : null}
                                         src={profile}
                                         className=" profile-icon"/>
                                    <span style={{margin:'0 5rem 0 4rem'}}>Mrinalini Saha</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={'w-100'}>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Column>
                    </Row>
                </header>
            </div>
        );
    }
}

export default Header;
