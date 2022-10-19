import { useState } from 'react';
import React from 'react';
import Form from '../form/Form';
import List from '../list/List';
import ShowBtn from '../showBtn/ShowBtn';

const Wrapper = () => {
    const [showForm, setShowForm] = useState(true);
    const showFormToggle = () => {
        setShowForm(!showForm);
    };

    //?==================================================///
    const [formValues, setFormValues] = useState({
        task: '',
        date: '',
    });
    const { task, date } = formValues;
    console.log(task);
    const taskInput = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
        console.log(task);
    };

    return (
        <div>
            <ShowBtn showForm={showForm} toggleFunc={showFormToggle} />
            {showForm && <Form taskInput={taskInput} task={task} date={date} />}
            {JSON.parse(localStorage.getItem('taskArray'))?.map((item) => {
                return (
                    <List
                        key={item.index}
                        task={item.taskInput}
                        date={item.dateInput}
                    />
                );
            })}
        </div>
    );
};

export default Wrapper;
