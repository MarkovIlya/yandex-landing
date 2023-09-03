import React from 'react';
import "./YButton.css"

interface YButtonProps {
    text: string | never
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void | never
}

export function YButton({text, onClick} : YButtonProps) {
    return (
        <span className="button text-block" onClick={onClick} style={{"--font-family": "Arial"} as React.CSSProperties}>
            {text}
        </span>
    )
}