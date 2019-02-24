import React from 'react';
import {Col, Row} from "react-bootstrap";
import useCase from "../images/useCase.png";
import topChart from "../images/topChart.png";

const chartView = props => {
    return (

        <Row className=" pl-2">
            <Col xs={12} md={5} sm={12} className="chart-div mr-3 height-fit">
                <Row className={'pl-1 pr-2'}>
                    <Col xs={6} sm={6}>
                        <img src={useCase} className={'w-100'}/>
                    </Col>
                    <Col xs={5} sm={6} className="p-1">
                        <button className='use-case-btn w-100 mb-2'>Buy side PE</button>
                        <button className='use-case-btn w-100 mt-2 mb-2'>Buy side Corporate</button>
                        <button className='use-case-btn w-100 mt-2'>Sell side</button>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} md={6} sm={12} className="chart-div ml-2 height-fit">
                <Row>
                    <Col xs={4} sm={4}>
                        <img src={topChart} style={{width: '80%'}}/>
                    </Col>
                    <Col xs={8} sm={8} className="p-1">
                        <Row className={'mt-2'}>
                            <button className='top-chart-btn mr-1'>acquirers</button>
                            <button className='top-chart-btn ml-2 '>Founders</button>
                        </Row>
                        <Row className={'mt-2'}>
                            <button className='top-chart-btn mr-2'>Institutional Investors</button>
                            <button className='top-chart-btn ml-2'>Board members</button>
                        </Row>
                        <Row className={'mt-2'}>
                            <button className='top-chart-btn mr-2 '>Investment Partners</button>
                            <button className='top-chart-btn ml-2 '>Corporate VCs</button>
                        </Row>
                        <Row className={'mt-2'}>
                            <button className='top-chart-btn mr-2'>Smart money investors</button>
                            <button className='top-chart-btn ml-2'>Private equality</button>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>

    )
};

export default chartView;