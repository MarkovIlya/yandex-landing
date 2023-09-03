import React from 'react';
import "./tasks.css"
import {Task} from "../task/task";

interface TasksProps {
    tasks: {
        headerText: string
        bodyText?: string
        imageSource?: string
    }[]
}

export function Tasks({tasks}: TasksProps) {
    return (
        <div className="tasks__wrapper">
            <div className="text-block header" style={{"--font-family": "Arial", "--color": "white"} as React.CSSProperties}>
                Какие задачи помогает решать сервис
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