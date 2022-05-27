import React, { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import FormComponent from "./components/FormComponent";
import TodoLisComponent from "./components/TodoListComponent";
import {main}  from "./App.module.scss";


const store = (listData) => {
    localStorage.setItem('listTask', JSON.stringify(listData));
  }
  const getStore = () => {
     return JSON.parse(localStorage.getItem('listTask'));
  }
function App() {
    console.log('call App')
    let [listTask, setListTask] = useState(getStore());
    const newTaskHandler = (task) =>{
        listTask = [...listTask, task]
        setListTask(listTask);
        store(listTask);

    }

    const deleteTaskHander = (id) => {
        const newlistTask = listTask.filter( items => {
          return id !== items.id;
        });
        setListTask(newlistTask);
        store(newlistTask);
      }
      const updateTaskHandler = (id) => {
        const newListTask = listTask.map(item => {
          if (id === item.id) {
            item.state = !item.state;
          }
          return item;
        });
        setListTask(newListTask);
        store(newListTask);
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
