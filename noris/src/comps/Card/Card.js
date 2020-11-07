import React from 'react'
import './Card.css';

export default function Card({style, children}) {
    return (
        <div className="card full-width" style={{...style}}>
            {children}
        </div>
    )
}
