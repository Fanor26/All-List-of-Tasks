import React from "react";
import TaskComponent from "./TaskComponent";

import { todolistContainer } from "../assets/TodoList.module.scss";

const TodoListComponent = ({ list, deleteTaskHander, updateTaskHandler }) => {
  return (
    <div className={todolistContainer}>
      {list.map((item) => (
        <TaskComponent
          key={item.id}
          tasks={item}
          deleteTaskHander={deleteTaskHander}
          updateTaskHandler={updateTaskHandler}
        />
      ))}
    </div>
  );
};

export default TodoListComponent;
