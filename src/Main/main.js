import React, {Component} from 'react';
import {TabsContainer, Tabs, Tab} from 'react-md';
import {Typography} from '@material-ui/core'
import './main.css';
import {Column} from "simple-flexbox";
import SubMenu from "./SubMenu/SubMenu.js"
import ChartView from './chartView.js';
import PopularSection from './popularSection.js';

class Main extends Component {
    state = {
        activeTabIndex: 0,
    }
    changeTab = (activeTabIndex) => {
        this.setState({activeTabIndex: activeTabIndex});
    };

    render() {
        const customStyle = {
            maxHeight: "475px",
            overflow: "auto"
        };
        return (
            <div className={'main-div'}>
                <Typography className={'main-heading'}>
                    Choose From our smart filters
                </Typography>
                <Typography className={'side-info mt-2'}>Lorem Ipsum is simply dummy text </Typography>
                <TabsContainer id="notification-tab" panelClassName="md-grid" onTabChange={this.changeTab}
                               className="w-100 mt-3" style={{maxHeight: '100%'}}>
                    <Tabs tabId="notification-tab">
                        <Tab className={this.state.activeTabIndex === 0 ? "active-tab" : 'inactive-tab'}
                             label="Company">
                            <div id="notification-container p-0" className="width-100-per border-smoke-white"
                                 style={customStyle}>
                            </div>
                        </Tab>
                        <Tab label="Investor"
                             className={this.state.activeTabIndex === 1 ? "active-tab" : 'inactive-tab'}>
                            <div id="notification-container p-0" className="width-100-per border-smoke-white"
                                 style={customStyle}>
                            </div>
                        </Tab>
                        <Tab label="Person" className={this.state.activeTabIndex === 2 ? "active-tab" : 'inactive-tab'}>
                            <div id="notification-container p-0" className="width-100-per border-smoke-white"
                                 style={customStyle}>

                            </div>
                        </Tab>
                        <Tab label="Sector" className={this.state.activeTabIndex === 3 ? "active-tab" : 'inactive-tab'}>
                            <div id="notification-container p-0" className="width-100-per border-smoke-white"
                                 style={customStyle}>

                            </div>
                        </Tab>
                        <Tab label="Industry"
                             className={this.state.activeTabIndex === 4 ? "active-tab" : 'inactive-tab'}>
                            <div id="notification-container p-0" className="width-100-per border-smoke-white"
                                 style={customStyle}>
                            </div>
                        </Tab>
                        <Tab label="Sub-Industry"
                             className={this.state.activeTabIndex === 5 ? "active-tab" : 'inactive-tab'}>
                            <div id="notification-container p-0" className="width-100-per border-smoke-white"
                                 style={customStyle}>

                            </div>
                        </Tab>
                        <Tab label="Region"
                             className={this.state.activeTabIndex === 6 ? "active-tab" : 'inactive-tab'}>
                            <div id="notification-container p-0" className="w-100"
                                 style={customStyle}>

                            </div>
                        </Tab>
                    </Tabs>
                </TabsContainer>
                {this.state.activeTabIndex === 0 ? <SubMenu/> : null}
                {this.state.activeTabIndex === 1  ? <PopularSection/> : null}
                {this.state.activeTabIndex === 2  ? <ChartView/> : null}
                {this.state.activeTabIndex === 3 ? <SubMenu/> : null}
                {this.state.activeTabIndex === 4  ? <PopularSection/> : null}
                {this.state.activeTabIndex === 5  ? <ChartView/> : null}

            </div>
        )
    }
}

export default Main;