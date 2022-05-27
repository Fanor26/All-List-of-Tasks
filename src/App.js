import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import TodoLisComponent from "./components/TodoListComponent";
import {main}  from "./App.module.scss";
import HeaderComponent from "./components/HeaderComponent";
function App() {
    console.log('call App')
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
      const updateTaskHandler = (id) => {
        const newListTask = listTask.map(item => {
          if (id === item.id) {
            item.state = !item.state;
          }
          return item;
        });
        setListTask(newListTask);
      }

    return (
        <main className={main}>
            <HeaderComponent />
            <FormComponent newTaskHandler={newTaskHandler}/>
            <TodoLisComponent list={listTask}
             deleteTaskHander={deleteTaskHander}
             updateTaskHandler={updateTaskHandler}
             />
        </main>
    );
}

export default App;
