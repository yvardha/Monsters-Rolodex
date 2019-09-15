import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder , handleChange }) => (
    <input 
    className = 'search'
    type ='search' 
    placeholder={placeholder} // for placholder
    onChange={ handleChange} // for  serachField (on Change)
    />
)