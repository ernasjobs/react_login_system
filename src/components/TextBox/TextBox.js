import './TextBox.css'
import React, { useState} from "react";
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect';

const TextBox = ({backgroundColor, name,key, title, size, id, maxLength, minLength, placeholder, type,value:initialValue,clearInput, ...props}) => {
    const[emptyInput, setEmptyInput] = useState(clearInput)
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        if (emptyInput) {setEmptyInput(false)}
        setInput(e.currentTarget.value);
        console.log(input);  
    };
    const clearInputField = (e) => {
        setEmptyInput(!clearInput)
    };
    const className = isMobile ? "mobiletextbox" : "textbox";
return (
    
    <div className={`${className ? "mobiletextbox" : "textbox"}`}>
        <label htmlFor={id}>{title}</label>
        <input
        name={name}
        key = {key}
        placeholder={placeholder}
        id= {id}
        maxLength = {maxLength}
        minLength = {minLength}
        type={type}
        value ={emptyInput ? '': input}
        onChange = {handleChange}
        clearInput = {clearInputField}
       
        />
    </div>
);
};

TextBox.propTypes = {
    backgroundColor: PropTypes.string,
        /** What background colour to use */
    title: PropTypes.string,
        /** Input contents */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
        /** How large should the input be? */
    maxLength: PropTypes.number,
    //Maximum input length
    minLength: PropTypes.number,
    //Minimum input length
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number', 'date'])
};

TextBox.defaultProps = {
    backgroundColor: null,
    size: 'small',
    maxLength: 30,
    minLength: 0,
    placeholder: '',
    type: "text"
};

/* Example Use

<TextBox 
    title="First Name" 
    placeholder="Enter your firstname" 
    minLength="5" 
    maxLength="30" 
    id="input1" 
    type="text" 
/>

*/

export default TextBox;
