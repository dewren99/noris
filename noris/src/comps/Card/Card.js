import React from 'react'
import './Card.css';

export default function Card({className, style, children}) {
    return (
        <div className={`card full-width ${className}`} style={{...style}}>
            {children}
        </div>
    )
}
