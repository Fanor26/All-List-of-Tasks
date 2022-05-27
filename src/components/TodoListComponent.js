import React from "react";
import TaskComponent from "./TaskComponent";

import { todolistContainer } from "../assets/TodoList.module.scss";

const TodoListComponent = ({ list, deleteTaskHander }) => {
  return (
    <div className={todolistContainer}>
      {list.map((item) => (
        <TaskComponent
          key={item.id}
          tasks={item}
          deleteTaskHander={deleteTaskHander}
        />
      ))}
    </div>
  );
};

export default TodoListComponent;
