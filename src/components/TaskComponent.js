import React from 'react';
import {   taskCard,
    titleCard,
    titleContainer, button} from '../assets/Task.module.scss';

const TaskComponent = ({tasks, removetask}) => {
    return (
        <div className={taskCard}>
            <div className={titleContainer}>
                <div className={titleCard}>
                    <p>{tasks} </p>
                </div>

                <div>
                    <button fill="none" onClick={removetask} className={button}>Delete Task</button>
                </div>
            </div>
        </div>
    );
};

export default TaskComponent;
