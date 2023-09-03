import React from 'react';
import "./task.css"

interface TaskProps {
    headerText: string
    bodyText?: string
    imageSource?: string
}

export function Task({headerText, bodyText, imageSource}: TaskProps) {
    return (
        <div className="task">
            <div className="title__wrapper">
                {!imageSource ?? <img src={imageSource} alt="img"/>}
                <h2 className="text-block" style={{"--font-family": "Arial", "--font-weight": "bold", "--color": "white"} as React.CSSProperties}>{headerText}</h2>
            </div>
            <p className="text-block" style={{"--font-family": "Arial", "--color": "#8ca0be"} as React.CSSProperties}>{bodyText}</p>
        </div>
    )
}