import './TodoItem.css';
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input
                checked={isDone}
                type="checkbox"
                onChange={onChangeCheckbox}
            />
            <div className="content">
                {content}
            </div>
            <div className="date">
                {new Date(date).toLocaleDateString()}
            </div>
            <button onClick={onClickDeleteButton}>
                삭제
            </button>
        </div>
    );
};

// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props의 변화 감지 판단 가능
//     // True -> Props 변경 X -> 리랜더링X
//     // False -> Props 변경 O -> 리랜더링 O

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });

export default TodoItem;