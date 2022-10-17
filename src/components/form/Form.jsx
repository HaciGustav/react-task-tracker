import { useState } from 'react';
import List from '../list/List';
import FormStyle from './form.module.css';

const Form = () => {
    const [formValues, setFormValues] = useState({
        task: '',
        date: '',
    });
    const { task, date } = formValues;
    const taskInput = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });

        console.log(task);
        console.log(date);
    };
    const submit = (e) => {
        e.preventDefault();
    };

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
            <List task={task} date={date} />
        </div>
    );
};

export default Form;
