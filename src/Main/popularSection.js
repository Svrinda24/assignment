import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Typography} from '@material-ui/core';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"

class PopularSection extends Component {
    state = {
        activeTab: '',
    };
    changeTab = (event) => {
        console.log(event.target.name);
        this.setState({activeTab: event.target.name});
    };

    render() {
        return (
            <Container className={'mt-4 pt-3 pl-1'}>
                <Typography className={'main-heading'}>
                    Discover the popular sections we track
                </Typography>
                <Typography className={'side-info mt-2'}>Lorem Ipsum is simply dummy text </Typography>

                <Row>
                    <Col md={3} className="mt-2">
                        <button className="popular-section-tab  w-100" onClick={this.changeTab}
                                name="one">Enterprise Infrastructure
                        </button>
                    </Col>
                    <Col md={2} className="mt-2">
                        <button className="popular-section-tab w-100" onClick={this.changeTab}
                                name="two">Enterprise Software
                        </button>

                    </Col>
                    <Col md={3} className="mt-2">
                        <button className="popular-section-tab w-100" onClick={this.changeTab}
                                name="three">AI & Analytics
                        </button>

                    </Col>
                    <Col md={3} className="mt-2">
                        <button className="popular-section-tab w-100" onClick={this.changeTab}
                                name="four">Internet of Things
                        </button>

                    </Col>
                    <Col md={2} className="mt-2">
                        <button className="popular-section-tab w-100" onClick={this.changeTab} name="five">FinTech
                        </button>

                    </Col>
                    <Col md={2} className="mt-2">
                        <button className="popular-section-tab w-100" onClick={this.changeTab}
                                name="six">Industrial Tech
                        </button>

                    </Col>
                    <Col md={3} className="mt-2">
                        <button className="popular-section-tab w-100" onClick={this.changeTab} name="seven">Retail &
                            Ecommerce Tech
                        </button>

                    </Col>
                    <Col md={3} className="mt-2">
                        <button className="popular-section-tab w-100" onClick={this.changeTab} name="eight">Travel
                            and Hospitality
                        </button>

                    </Col>
                    <Col md={2} className="mt-2">
                        <button className="popular-section-tab w-100" onClick={this.changeTab} name="nine">Other
                            Verticals
                        </button>
                    </Col>

                </Row>
                {discoverDiv(this.state)}
            </Container>

        )
    }
};
const discoverDiv = props => {
    return (
        <div className="row w-100">
            <Col className=" mt-2" xs={12} sm={6} md={6}>
                {props.activeTab === '' || props.activeTab === 'one' ?
                    <Col className="chart-div">
                        <Row>
                            <Col md={7}><Typography className="discover-heading">
                            <span className={'mr-2'}><FontAwesomeIcon icon={Icons.faBuilding} size="sm"
                                                                      color={'#9e001ded'}/></span>
                                Enterprise Infrastructure
                            </Typography></Col>
                            <Col md={5}><Typography className="discover-sub-heading">View
                                Industries</Typography></Col>
                        </Row>
                        <div className={'pl-3 mt-2'}>
                            <Row className={'mt-2'}>
                                <button className='discover-btn mr-2'>Enterprise Networking</button>
                                <button className='discover-download-btn'>Enterprise Servers & Systems
                                    <span className="ml-1"><FontAwesomeIcon icon={Icons.faDownload} size="sm"
                                                                            color={'#cfcfcf'}/></span></button>
                            </Row>
                            <Row className={'mt-2'}>
                                <button className='discover-btn mr-1'>Enterprise storage</button>
                                <button className='discover-btn mr-1'>Application Development & Integration</button>
                            </Row>
                            <Row className={'mt-2'}>
                                <button className='discover-btn mr-2 '>Cyber security</button>
                                <button className='discover-btn ml-2 '>Enterprise IT Operations Management</button>
                            </Row>

                        </div>

                    </Col> : null}
                {props.activeTab === '' || props.activeTab === 'three' ?
                    <Col className="chart-div">

                        <Row>
                            <Col md={7}>
                                <Typography className="discover-heading">
                        <span className={'mr-2'}><FontAwesomeIcon icon={Icons.faClock} size="sm"
                                                                  color={'#9e001ded'}/></span>
                                    AI & Analytics

                                </Typography></Col>
                            <Col md={5}><Typography className="discover-sub-heading">View
                                Industries</Typography></Col>
                        </Row>
                        <div className={'pl-3 mt-2'}>
                            <Row className={'mt-2'}>
                                <button className='discover-btn mr-3'>Artificial Intelligence</button>
                                <button className='discover-btn'>Data Management & Analytics</button>
                            </Row>
                        </div>
                    </Col> : null}
                {props.activeTab === '' || props.activeTab === 'six' ?
                    <Col className="chart-div">

                        <Row>
                            <Col md={7}>
                                <Typography className="discover-heading">
                            <span className={'mr-2'}><FontAwesomeIcon icon={Icons.faWrench} size="sm"
                                                                      color={'#9e001ded'}/></span>Industrial
                                    Tech
                                </Typography></Col>
                            <Col md={5}><Typography className="discover-sub-heading">View
                                Industries</Typography></Col>
                        </Row>
                        <div className={'pl-4 mt-2'}>
                            <Row className={'mt-2'}>
                                <button className='discover-btn mr-3'>3D Printing</button>
                                <button className='discover-btn mr-3 ml-3'>Auto Tech
                                </button>
                                <button className='discover-btn mr-3 ml-3'>Drones</button>
                                <button className='discover-btn mr-3'>Manufacturing Tech</button>
                                <button className='discover-btn mr-3 ml-3'>Robotics</button>
                                <button className='discover-btn mr-3 ml-3'>Utilities Tech</button>
                                <button className='discover-btn mr-3'>IoT-Auto</button>
                                <button className='discover-btn mr-3 ml-3'>IoT-Industrial</button>
                                <button className='discover-btn mr-3 ml-3'>IoT-Utilities</button>
                            </Row>
                        </div>
                    </Col> : null}
                {props.activeTab === '' || props.activeTab === 'five' ?
                    <Col className="chart-div">

                        <Row>
                            <Col md={7}>
                                <Typography className="discover-heading">
                        <span className={'mr-2'}><FontAwesomeIcon icon={Icons.faFlag} size="sm"
                                                                  color={'#9e001ded'}/></span>FinTech

                                </Typography></Col>
                            <Col md={5}><Typography className="discover-sub-heading">View
                                Industries</Typography></Col>
                        </Row>
                        <div className={'pl-4 mt-2'}>
                            <Row className={'mt-2'}>
                                <button className='discover-btn mr-3'>Alternative Lending and Financing</button>
                                <button className='discover-btn mr-3 ml-3'>Banking Tech
                                </button>
                                <button className='discover-btn mr-3'>Capital Markets Techs</button>
                                <button className='discover-btn mr-3'>Financial Data & Analytics</button>
                                <button className='discover-btn mr-3'>Insurance Tech-Auto</button>
                                <button className='discover-btn mr-3 ml-3'>Insurance Tech-Life & Health</button>
                                <button className='discover-btn mr-2'>Insurance Tech-Property & Casualty</button>
                                <button className='discover-btn mr-3 ml-1'>Payment & Transfers</button>
                                <button className='discover-btn mr-3'>RegTech</button>
                                <button className='discover-btn mr-3 ml-3'>WealthTech</button>
                            </Row>
                        </div>
                    </Col> : null}


            </Col>
            <Col className=" mt-2" xs={12} sm={6} md={6}>

                {props.activeTab === '' || props.activeTab === 'two' ?
                    <Col className="chart-div">

                        <Row>
                            <Col md={7}><Typography className="discover-heading">
                        <span className={'mr-2'}><FontAwesomeIcon icon={Icons.faTv} size="sm"
                                                                  color={'#9e001ded'}/></span>

                                Enterprise Software
                            </Typography></Col>
                            <Col md={5}><Typography className="discover-sub-heading">View
                                Industries</Typography></Col>
                        </Row>
                        <div className={'pl-4 mt-2'}>
                            <Row className={'mt-2'}>
                                <button className='discover-btn  ml-2'>Adtech</button>
                                <button className='discover-btn mr-2 ml-2'>AR/VR
                                </button>
                                <button className='discover-btn mr-2 ml-2'>Blockchain</button>
                                <button className='discover-btn mr-2 ml-2 '>Digital Marketing</button>
                                <button className='discover-btn mr-1 ml-1'>Enterprise Communication</button>
                                <button className='discover-btn mr-1 ml-1'>Financial Management Tech</button>
                                <button className='discover-btn mr-1 ml-1'>Human Capital Management Tech</button>
                                <button className='discover-btn mr-1 ml-1'>Sales & CRM Software</button>
                                <button className='discover-btn mr-1 ml-1'>Supply chain management</button>
                            </Row>

                        </div>
                    </Col> : null}
                {props.activeTab === '' || props.activeTab === 'four' ?
                    <Col className="chart-div">

                        <Row>
                            <Col md={7}><Typography className="discover-heading">
                        <span className={'mr-2'}><FontAwesomeIcon icon={Icons.faGlobe} size="sm"
                                                                  color={'#9e001ded'}/></span>Internet of Things
                            </Typography></Col>
                            <Col md={5}><Typography className="discover-sub-heading">View
                                Industries</Typography></Col>
                        </Row>
                        <div className={'pl-4 mt-2'}>
                            <Row className={'mt-2'}>
                                <button className='discover-btn mr-2'>IoT-Device & Platforms</button>
                                <button className='discover-btn mr-3 ml-2'>IoT-Auto
                                </button>
                                <button className='discover-btn mr-2'>IoT-Commercial Buildings</button>
                                <button className='discover-btn mr-3 ml-3'>IoT-Consumer</button>
                                <button className='discover-btn mr-3'>IoT-Industrial</button>
                                <button className='discover-btn mr-3 ml-3'>IoT-Smart City</button>
                                <button className='discover-btn ml-2'>IoT-Utilities</button>
                            </Row>

                        </div>
                    </Col> : null}
                {props.activeTab === '' || props.activeTab === 'seven' ?
                    <Col className="chart-div">

                        <Row>
                            <Col md={7}><Typography className="discover-heading">
                        <span className={'mr-2'}><FontAwesomeIcon icon={Icons.faShoppingBasket} size="sm"
                                                                  color={'#9e001ded'}/></span>Retail & Ecommerce Tech
                            </Typography></Col>
                            <Col md={5}><Typography className="discover-sub-heading">View
                                Industries</Typography></Col>
                        </Row>
                        <div className={'pl-4 mt-2'}>
                            <Row className={'mt-2'}>
                                <button className='discover-btn mr-2'>Retail Tech</button>
                                <button className='discover-btn mr-3 ml-2'>Ecommerce tech
                                </button>
                            </Row>

                        </div>
                    </Col> : null}
                {props.activeTab === '' || props.activeTab === 'eight' ?
                    <Col className="chart-div">

                        <Row>
                            <Col md={7}><Typography className="discover-heading">
                        <span className={'mr-2'}><FontAwesomeIcon icon={Icons.faPlane} size="sm"
                                                                  color={'#9e001ded'}/></span>Travel
                                and Hospitality
                            </Typography></Col>
                            <Col md={5}><Typography className="discover-sub-heading">View
                                Industries</Typography></Col>
                        </Row>
                        <div className={'pl-4 mt-2'}>
                            <Row className={'mt-2'}>
                                <button className='discover-btn mr-2'>Travel Tech</button>
                                <button className='discover-btn mr-3 ml-2'>Transport tech</button>
                                <button className='discover-btn mr-3 ml-2'>Ag tech</button>
                            </Row>

                        </div>
                    </Col> : null}
                {props.activeTab === '' || props.activeTab === 'nine' ?
                    <Col className="chart-div">
                        <Row>
                            <Col md={7}><Typography className="discover-heading">
                        <span className={'mr-2'}><FontAwesomeIcon icon={Icons.faPlane} size="sm"
                                                                  color={'#9e001ded'}/></span>Other Verticals
                            </Typography></Col>
                            <Col md={5}><Typography className="discover-sub-heading">View
                                Industries</Typography></Col>
                        </Row>
                        <div className={'pl-4 mt-2'}>
                            <Row className={'mt-2'}>
                                <button className='discover-btn mr-2'>Education Tech</button>
                                <button className='discover-btn mr-3 ml-2'>Legal tech</button>
                                <button className='discover-btn mr-3 ml-2'>Ag tech</button>
                            </Row>

                        </div>
                    </Col> : null}

            </Col>
        </div>
    );
};
export default PopularSection;