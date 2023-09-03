import React, {useState} from 'react';
import './questionAnswer.css'

interface QuestionAnswerProps {
    headerText: string
    bodyText: string
}

export function QuestionAnswer({headerText, bodyText} : QuestionAnswerProps) {

    const [show, setShow] = useState(false);

    const handleOnClick = () => {
        setShow(prevState => !prevState)
    }

    return (
        <div className="spoiler-item">
            <div className="spoiler-item__header text-block" style={{"--font-family": "Arial", "--font-weight": "bold"} as React.CSSProperties} onClick={handleOnClick}>
                {headerText}
            </div>
            <div className="spoiler-item-text text-block" style={{display: show ? 'block' : 'none', "--font-family": "Arial", "--color": "rgba(85, 105, 150, 0.8)"} as React.CSSProperties}>
                <div className="spoiler-item-text__text">
                    {bodyText}
                </div>
            </div>
            <hr/>
        </div>
    )
}