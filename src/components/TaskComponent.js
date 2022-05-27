import React from 'react';
import {   taskCard,
    titleCard,
    titleContainer, button} from '../assets/Task.module.scss';

const TaskComponent = ({tasks, deleteTaskHander}) => {
    const {id, taskName} = tasks;
    return (
        <div className={taskCard}>
            <div className={titleContainer}>
                <div className={titleCard}>
                    <p>{taskName} </p>
                </div>

                <div>
                    <button fill="none" onClick={() => {deleteTaskHander(id)}} className={button}>Delete Task</button>
                </div>
            </div>
        </div>
    );
};

export default TaskComponent;
