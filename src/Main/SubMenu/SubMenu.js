import React, {Component} from 'react';
import {Typography} from '@material-ui/core'
import './SubMenu.css';
import {Row, Col, Container} from 'react-bootstrap'

import ChartView from '../chartView';
import PopularSection from '../popularSection.js';

class SubMenu extends Component {
    state = {
        activeTab: '',
    };
    changeTab = (event) => {
        console.log(event.target.name);
        this.setState({activeTab: event.target.name});
    };

    render() {
        return (
            <div>
                <Container>
                    <Row className={'w-75'}>
                        <Col className="pl-0 profile-btn-div" xs={12} md={6} lg={1} sm={6}>
                            <button className="profile-btn  w-100" onClick={this.changeTab} name="profile">Profile
                            </button>
                        </Col>
                        <Col xs={12} md={6} lg={3} sm={6}>
                            <button className="comparables-btn w-100" onClick={this.changeTab}
                                    name="comparables">Comparables
                            </button>

                        </Col>
                        <Col xs={12} md={6} lg={3} sm={6}>
                            <button className="strategic-btn w-100" onClick={this.changeTab} name="strategic">Strategic
                                gaps
                            </button>

                        </Col>
                        <Col xs={12} md={6} lg={3} sm={6}>
                            <button className="potential-btn w-100" onClick={this.changeTab} name="potential">Potential
                                Acquirers
                            </button>

                        </Col>
                        <Col className={'fast-path-btn-div pl-0'} xs={12} md={6} lg={2} sm={6}>
                            <button className="fast-path-btn w-100" onClick={this.changeTab} name="fastPath">Fast Path
                            </button>

                        </Col>
                    </Row>
                </Container>
                {strategicDiv(this.state)}
                {ChartView(this.state)}
                <PopularSection/>
            </div>
        )
    }
}

const strategicDiv = props => {
    return (
        <div className={'ml-1'}>
            <div className="row  w-100">
                {props.activeTab === '' || props.activeTab === 'strategic' ?
                    <Col className="sub-div">
                        <Typography className="sub-div-content">What are the most critical strategic gaps for a company
                            across its portfolio?
                            <span className={'w-50 ml-2'}><button
                                className="strategic-btn border-none">Strategic gaps</button></span></Typography>

                    </Col> : null}
                {props.activeTab === '' || props.activeTab === 'strategic' ? <Col className="sub-div">
                    <Typography className="sub-div-content">Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s?
                        <span className={'w-50 ml-2'}><button
                            className="strategic-btn border-none">Strategic gaps</button></span></Typography>
                </Col> : null}
            </div>
            <div className="row w-100">
                {props.activeTab === '' || props.activeTab === 'potential' ? <Col className="sub-div">
                    <Typography className="sub-div-content">Lorem Ipsum has been the industry's?
                        <span className={' ml-2'}>
                        <button className="potential-btn border-none"
                                >Potential Acquirers</button></span>
                    </Typography>
                </Col> : null}
                {props.activeTab === '' || props.activeTab === 'profile' ? <Col className="sub-div">
                    <Typography className="sub-div-content">Lorem Ipsum has been the industry's standard
                        dummy text ever
                        since ?
                        <span className={'w-50 ml-2'}><button
                            className="profile-btn w-25 border-none">Profile</button></span></Typography>
                </Col> : null}
            </div>
            <div className="row w-100">
                {props.activeTab === '' || props.activeTab === 'comparables' ? <Col className="sub-div">
                    <Typography className="sub-div-content">What are the most critical strategic gaps?
                        <span className={'w-50 ml-2'}> <button
                            className="comparables-btn w-25 border-none">Comparables</button></span>
                    </Typography>
                </Col> : null}
                {props.activeTab === '' || props.activeTab === 'profile' ? <Col className="sub-div">
                    <Typography className="sub-div-content">What are the most critical strategic gaps?
                        <span className={'w-50 ml-2'}><button
                            className="profile-btn w-25 border-none ">Profile</button></span></Typography>
                </Col> : null}
            </div>
            <div className="row w-100">
                {props.activeTab === '' || props.activeTab === 'fastPath' ? <Col className="sub-div">
                    <Typography className="sub-div-content">What are the most critical strategic gaps?
                        <span className={'w-50 ml-2'}>   <button
                            className="fast-path-btn w-25 border-none">Fast Path</button></span></Typography>
                </Col> : null}
                {props.activeTab === '' || props.activeTab === 'comparables' ? <Col className="sub-div">
                    <Typography className="sub-div-content">What are the most critical strategic gaps?
                        <span className={'w-50 ml-2'}><button
                            className="comparables-btn w-25 border-none">Comparables</button></span></Typography>
                </Col> : null}
            </div>
        </div>
    );
};

export default SubMenu;