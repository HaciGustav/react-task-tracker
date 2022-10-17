import { useState } from 'react';
import React from 'react';
import Form from '../form/Form';
import List from '../list/List';
import ShowBtn from '../showBtn/ShowBtn';

const Wrapper = () => {
    const [showForm, setShowForm] = useState(false);
    const showFormToggle = () => {
        setShowForm(!showForm);
    };

    //?==================================================///

    return (
        <div>
            <ShowBtn showForm={showForm} toggleFunc={showFormToggle} />
            {showForm && <Form />}

            {!showForm && <List />}
        </div>
    );
};

export default Wrapper;
