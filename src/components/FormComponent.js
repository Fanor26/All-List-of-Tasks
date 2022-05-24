
import React from 'react';
import useForm from "../hooks/useForm";


import { title, tasknames, forms,inputsContainer,formContainer, submitButton} from '../assets/Form.module.scss';

const FormComponent = ({handlerNewTask}) => {
  const [form, handlerChangeForm, handlerResetForm] = useForm({ taskname: "" });
  const {taskname} = form;

  const handlerSubmit = (e) => {
    e.preventDefault();

    handlerResetForm();
    handlerNewTask(taskname)
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
