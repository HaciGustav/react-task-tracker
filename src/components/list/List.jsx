import ListStyle from './list.module.css';

const List = ({ task, date }) => {
    return (
        <div classsName={ListStyle.listWrapper}>
            <ul>
                <li>
                    <p>{task}</p>
                    <p>{date}</p>
                </li>
            </ul>
        </div>
    );
};

export default List;
