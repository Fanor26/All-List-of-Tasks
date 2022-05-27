
import React from 'react';
import useForm from "../hooks/useForm";
import TaskModel from "../models/TaskModel";


import { title, tasknames, forms,inputsContainer,formContainer, submitButton} from '../assets/Form.module.scss';

const FormComponent = ({newTaskHandler}) => {
  const [form, handlerChangeForm, handlerResetForm] = useForm({ taskname: "" });
  const {taskname} = form;

  const handlerSubmit = (e) => {
    e.preventDefault();

    handlerResetForm();
    if (taskname !== '') {
      const taskModel = new TaskModel(taskname);
      newTaskHandler(taskModel);
  }
  };
  return (
      <div className={formContainer} onSubmit={handlerSubmit}>
        <h2>All List of Tasks</h2>
        <form className={forms}>
          <h3>Add Task</h3>
          <div className={inputsContainer}>
            <input
                className={tasknames}
                type="text"
                name="taskname"
                onChange={handlerChangeForm}
                value={taskname}
                placeholder="Write some task"
            />

            <input className={submitButton} type="submit" value="Create Task" />
          </div>
        </form>
        <div className={title}>{taskname}</div>
      </div>
  );
};
export default FormComponent;
