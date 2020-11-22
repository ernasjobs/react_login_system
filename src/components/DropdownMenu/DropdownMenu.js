import React from 'react'
import Select from 'react-select'
import './DropdownMenu.css';
const DropdownMenu = ({options,placeholder,styles, ...props}) => (
  <Select className="Dropdown" options={options} placeholder={placeholder}/>
)

export default DropdownMenu;

DropdownMenu.defaultProps = {
  
    options:[
      { value: 'computing', label: 'BSc (Hons) Computing and Information Systems' },
      { value: 'criminoloy', label: 'BA (Hons) Crimonology'},
      { value: 'digitalArts', label: 'FDA Digital Arts'}
    ]
};