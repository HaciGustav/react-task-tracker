import ButtonStyle from './button.module.css';

const ShowBtn = ({ showForm, toggleFunc }) => {
    return (
        <button className={ButtonStyle.showHide} onClick={toggleFunc}>
            <span>{showForm ? 'Hide' : 'Show'} </span>Add Task Bar
        </button>
    );
};

export default ShowBtn;
