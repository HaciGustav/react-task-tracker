import { useState } from 'react';
import List from '../list/List';
import FormStyle from './form.module.css';

const Form = ({ task, date, taskInput }) => {
    let index = 0;
    //array which we push tasks to and save in localStorage
    const taskArray = [];
    const submit = (e, task, date) => {
        e.preventDefault();

        console.log(task);
        taskToLocalStorage(task, date);
    };
    const taskToLocalStorage = (task, date) => {
        const taskItem = {
            index: index,
            taskInput: task,
            dateInput: date,
        };
        taskArray.push(taskItem);
        localStorage.setItem(`taskArray`, JSON.stringify(taskArray));
        index++;
    };
    console.log(localStorage);
    return (
        <div className={FormStyle.formWrapper}>
            <form>
                <div className={FormStyle.taskWrap}>
                    <label htmlFor="task">Task</label>
                    <input
                        id="task"
                        type="text"
                        placeholder="Add Task"
                        value={task}
                        onChange={taskInput}
                    />
                </div>
                <div className={FormStyle.dateWrapper}>
                    <label htmlFor="date">Date & Time</label>
                    <input
                        id="date"
                        type="text"
                        placeholder="Add Date & Time"
                        value={date}
                        onChange={taskInput}
                    />
                </div>
                <button
                    className={FormStyle.saveBtn}
                    type="submit"
                    onClick={submit}>
                    Save Task
                </button>
            </form>
        </div>
    );
};

export default Form;
