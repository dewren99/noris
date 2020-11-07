import React from 'react';
import './Circle.css';

export default function Circle({style}) {
    return (
        <div className={`circle`} style={{...style}}/>
    )
}
