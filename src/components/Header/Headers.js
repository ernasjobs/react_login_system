import React from 'react';
import UCPLogo  from '../images/UCPLogo.png';
import './Headers.css';
const initialState = {
    isMobile: false
    
};
export default class Headers extends React.Component{
    constructor(){
        super();

        this.state = initialState;
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < 768
            });
        }, true);
    }
    render(){
        const className = this.state.isMobile ? "MobileUCPLogoBlue" : "UCPLogoBlue";
        return (
            <header>   
                    <img data-testid="ucpLogoHeader" src={UCPLogo} className={className} alt="UCP official logo" />  
            </header>
        )
    }
};



