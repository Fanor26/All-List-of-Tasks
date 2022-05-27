import React from 'react';
import {   taskCard,
    titleCard,
    titleContainer, button} from '../assets/Task.module.scss';

const TaskComponent = ({tasks, deleteTaskHander,  updateTaskHandler}) => {
    const {id, taskName, state} = tasks;
    return (
        <div className={taskCard}>
            <div className={titleContainer}>
                <div className={titleCard}>
                <p className={ state?'textThrough': ''} onDoubleClick={() => {
            updateTaskHandler(id);
                 }}>
                    {taskName} </p>
                </div>

                <div>
                    <button fill="none" onClick={() => {deleteTaskHander(id)}} className={button}>Delete Task</button>
                </div>
            </div>
        </div>
    );
};

export default TaskComponent;
