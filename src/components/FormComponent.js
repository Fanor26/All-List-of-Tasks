import React from "react";
import {
  form,
  taskname,
  inputsContainer,
  submitButton,
  formContainer,
} from "../assets/Form.module.scss";

const FormComponent = () => {
  return (
    <div className={formContainer}>
      <h2>All List of Tasks</h2>
      <form className={form}>
        <h3>Add Task</h3>
        <div className={inputsContainer}>
          <input
            className={taskname}
            type="text"
            placeholder="Write some task"
          />
          <input className={submitButton} type="submit" value="Create Task" />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
