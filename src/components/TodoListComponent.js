import React from 'react';
import TaskComponent from './TaskComponent';

import {todolistContainer} from '../assets/TodoList.module.scss';

const TodoListComponent = ({list, removeTask}) => {
    list.map(id => {
            console.log("item -> :", id)

        }

    )
    return (
        <div className={todolistContainer}>

            {list &&
                list.map(id =><TaskComponent  removetask={() => removeTask ()} tasks={id}/>)}


        </div>
    );
};

export default TodoListComponent;
