import React from 'react';
import "./tasks.css"
import {Task} from "../task/task";

interface TasksProps {
    title: string
    tasks: {
        headerText: string
        bodyText?: string
        imageSource?: string
    }[]
}

export function Tasks({title, tasks}: TasksProps) {
    return (
        <div className="tasks__wrapper">
            <div className="text-block header" style={{"--font-family": "Arial", "--color": "white"} as React.CSSProperties}>
                {title}
            </div>
            <div className="tasks">
                {tasks.map(task => (
                    <section className="tasks__item">
                        <Task headerText={task.headerText} bodyText={task.bodyText}/>
                    </section>
                ))}
            </div>
        </div>
    )
}