import React from 'react';
import StickyBox from "react-sticky-box/dist/esnext";
import './SideBar.css'
import {Row, Column} from 'simple-flexbox';
import {Typography} from '@material-ui/core'
import strategyIcon from '../images/strategyIcon.png';
import exploreIcon from '../images/exploreIcon.png';
import identifyCompaniesIcon from '../images/identifyCompanies.png';
import identifyGrowthIcon from '../images/identifyGrowth.png';
import identifyPotentialIcon from '../images/identifyPotential.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"
import Main from '../Main/main.js';

export default (props) => {
    return (
        <div style={{height: '100vh', overflow: 'auto'}}>
            <div className=' w-100'>
                <div className='w-75' style={{marginTop: '7rem'}}><Main/></div>
                <div className={'w-25 sidebar'}><StickyBox
                    className='sidebar-content'>{sideContent(props)}</StickyBox>
                </div>
            </div>
        </div>
    )
};

const sideContent = (props) => {
    return (
        <div className={'pl-2'} style={{marginTop: '5rem'}}>
            <div className="mb-3">
                <Row>
                    <Column flex={1} className={' pl-2'} horizontal={'center'} vertical={'center'}>
                        <img style={{height: '48px'}} src={strategyIcon}/>
                    </Column>
                    <Column flex={5} className={'p-2'}>
                        <Typography className={'side-heading'}>Find Strategic gaps</Typography>
                        <Typography className={'side-info'}>Lorem Ipsum is simply dummy text </Typography>
                    </Column>
                </Row>
                <Row flex={1} className={'pt-2'} horizontal={'space-around'} vertical={'center'}>

                    <input type={'text'} placeholder={'Search a company'}
                           className={'form-control side-search-field'}
                    />
                    <FontAwesomeIcon icon={Icons.faChevronRight} size="xs" color={'white'}/>

                </Row>
            </div>

            <div className="mt-4 pt-3 pb-3">
                <Row>
                    <Column flex={1} className={'pt-2 pl-2'} horizontal={'center'} vertical={'center'}>
                        <img style={{height: '48px'}} src={exploreIcon}/>
                    </Column>
                    <Column flex={5} className={'p-2'}>
                        <Typography className={'side-heading'}>Explore market maps</Typography>
                        <Typography className={'side-info'}>Lorem Ipsum is simply dummy text </Typography>
                    </Column>
                </Row>
                <Row flex={1} className={'pt-2'} horizontal={'space-around'} vertical={'center'}>

                    <input type={'text'} placeholder={'Search a company'}
                           className={'form-control side-search-field'}
                    />
                    <FontAwesomeIcon icon={Icons.faChevronRight} size="xs" color={'white'}/>

                </Row>
            </div>

            <div className="mt-4 pt-3 pb-3">
                <Row>
                    <Column flex={1} className={'pt-2 pl-2'} horizontal={'center'} vertical={'center'}>
                        <img style={{height: '48px'}} src={identifyPotentialIcon}/>
                    </Column>
                    <Column flex={5} className={'p-2'}>
                        <Typography className={'side-heading'}>Identify potential acquires</Typography>
                        <Typography className={'side-info'}>Lorem Ipsum is simply dummy text </Typography>
                    </Column>
                </Row>
                <Row flex={1} className={'pt-2'} horizontal={'space-around'} vertical={'center'}>

                    <input type={'text'} placeholder={'Search a company'}
                           className={'form-control side-search-field'}
                    />
                    <FontAwesomeIcon icon={Icons.faChevronRight} size="xs" color={'white'}/>

                </Row>
            </div>

            <div className="mt-4 pt-3 pb-3">
                <Row>
                    <Column flex={1} className={'pt-2 pl-2'} horizontal={'center'} vertical={'center'}>
                        <img style={{height: '48px'}} src={identifyCompaniesIcon}/>
                    </Column>
                    <Column flex={5} className={'p-2'}>
                        <Typography className={'side-heading'}>dentify comapnies due for exit</Typography>
                        <Typography className={'side-info'}>Lorem Ipsum is simply dummy text </Typography>
                    </Column>
                </Row>
                <Row flex={1} className={'pt-2'} horizontal={'space-around'} vertical={'center'}>

                    <input type={'text'} placeholder={'Search a company'}
                           className={'form-control side-search-field'}
                    />
                    <FontAwesomeIcon icon={Icons.faChevronRight} size="xs" color={'white'}/>

                </Row>
            </div>

            <div className="mt-4 pt-3 pb-3">
                <Row>
                    <Column flex={1} className={'pt-2 pl-2'} horizontal={'center'} vertical={'center'}>
                        <img style={{height: '48px'}} src={identifyGrowthIcon}/>
                    </Column>
                    <Column flex={5} className={'p-2'}>
                        <Typography className={'side-heading'}>Identify growth companies</Typography>
                        <Typography className={'side-info'}>Lorem Ipsum is simply dummy text </Typography>
                    </Column>
                </Row>
                <Row flex={1} className={'pt-2'} horizontal={'space-around'} vertical={'center'}>

                    <input type={'text'} placeholder={'Search a company'}
                           className={'form-control side-search-field'}
                    />
                    <FontAwesomeIcon icon={Icons.faChevronRight} size="xs" color={'white'}/>

                </Row>
            </div>

        </div>
    );
}