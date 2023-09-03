import React from 'react';
import './questionsAnswers.css'
import {QuestionAnswer} from "./question-answer/questionAnswer";


interface QuestionsAnswersProps {
    title?: string
    questionsAnswers: {headerText: string, bodyText: string}[]
}

export function QuestionsAnswers({title, questionsAnswers} : QuestionsAnswersProps) {
    return (
        <>

            <div className="faq-content">
                <h2 className="text-block header" style={{"--font-family": "Arial"} as React.CSSProperties}>
                    {title}
                </h2>
                {questionsAnswers.map((questionAnswer) => (
                    <QuestionAnswer headerText={questionAnswer.headerText} bodyText={questionAnswer.bodyText}/>
                ))}
            </div>
        </>
    )
}