import React from 'react';
import "./banner.css"
import {YButton} from "../UI/YButton/YButton";

interface BannerProps {
    title: string,
    body: string,
    buttons: { text: string, onClick: () => void }[]
}

export function Banner({title, body, buttons} : BannerProps) {
    return (
        <>
            <div className="banner">
                <div className="info">
                    <h1 className="text-block" style={{"--font-family": "Arial", "--font-weight": "bold"} as React.CSSProperties}>{title}</h1>
                    <p className="text-block" style={{"--font-family": "Arial", "--color": "rgba(85, 50, 150, 0.8)"} as React.CSSProperties}>{body}</p>
                    <div className="button_list">
                        {buttons.map(button => (
                            <YButton text={button.text} onClick={button.onClick}/>
                        ))}
                    </div>
                </div>
                <div className="image">

                </div>
            </div>
        </>
    )
}