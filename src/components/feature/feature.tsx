import React from 'react';
import "./feature.css"

interface FeatureProps {
    headerText: string
    bodyText?: string
    imageSource?: string
}

const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

export function Feature({headerText, bodyText, imageSource} : FeatureProps) {
    return (
        <div className="feature unselectable" onDragStart={handleDragStart}>
            {!imageSource ?? <img src={imageSource} alt="img"/>}
            <h2 className="text-block" style={{"--font-family": "Arial", "--font-weight": "bold"} as React.CSSProperties}>{headerText}</h2>
            <p className="text-block" style={{"--font-family": "Arial"} as React.CSSProperties}>{bodyText}</p>
        </div>
    )
}