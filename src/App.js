import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import TodoLisComponent from "./components/TodoListComponent";
import {main}  from "./App.module.scss";
import HeaderComponent from "./components/HeaderComponent";
function App() {
    let [listTask, setListTask]= useState([]);
    const newTaskHandler = (task) =>{
        listTask = [...listTask, task]
        setListTask(listTask);

    }

    const deleteTaskHander = (id) => {
        const newlistTask = listTask.filter( items => {
          return id !== items.id;
        });
        setListTask(newlistTask);
      }

    return (
        <main className={main}>
            <HeaderComponent />
            <FormComponent newTaskHandler={newTaskHandler}/>
            <TodoLisComponent list={listTask}
             deleteTaskHander={deleteTaskHander}/>
        </main>
    );
}

export default App;
