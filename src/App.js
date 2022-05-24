import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import TodoLisComponent from "./components/TodoListComponent";
import {main}  from "./App.module.scss";
import HeaderComponent from "./components/HeaderComponent";
function App() {
    let [listTask, setListTask]= useState([]);
    const handlerNewTask = (task) =>{
        listTask = [...listTask, task]
        setListTask(listTask);

    }
    const removeTask = (id) => {
        const newTasks = [...listTask].filter((task) => task.id !== id);
        setListTask(newTasks);
    };

    return (
        <main className={main}>
            <HeaderComponent />
            <FormComponent handlerNewTask={handlerNewTask}/>
            <TodoLisComponent list={listTask} removeTask={removeTask}/>
        </main>
    );
}

export default App;
