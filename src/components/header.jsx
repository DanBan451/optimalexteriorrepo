import '../App.css';
import React, { Component } from 'react';
import NavBar from './navbar';   

function Header ({ title, underline=false }) {
    return (         
    <div className="header">
        
    <div></div>        
    
    {(underline) ? (
        <div className='header-underline'>
            <h1>{title}<span>.</span></h1>
            <div></div>            
        </div>        
    ) :
        <div className='header-no-underline'>
            <h1>{title}<span>.</span></h1>                    
        </div>
    }      
    </div>
    );
}

export default Header;