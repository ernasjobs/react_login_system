import React from 'react';
import UCPLogo  from '../images/UCPLogo.png';
import './Headers.css';
import {isMobile} from 'react-device-detect';
export default class Headers extends React.Component{
    constructor(){
        super();
    }
    render(){
        const className = isMobile ? "MobileUCPLogoBlue" : "UCPLogoBlue";
        return (
            <header>   
                    <img data-testid="ucpLogoHeader" src={UCPLogo} className={className} alt="UCP official logo" />  
            </header>
        )
    }
};



